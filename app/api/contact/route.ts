import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { checkRateLimit } from '../../lib/ratelimit';

// Escape HTML to prevent XSS attacks
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Input validation constants
const MAX_NAME_LENGTH = 50;
const MAX_EMAIL_LENGTH = 150;
const MAX_MESSAGE_LENGTH = 1000;

export async function POST(request: NextRequest) {
  try {
    // Validate environment variable at runtime
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server configuration error. Please contact the site administrator.' },
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    const resend = new Resend(apiKey);

    // Rate limiting: Get IP address from request headers
    // Vercel provides the IP in x-forwarded-for or x-real-ip headers
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwardedFor?.split(',')[0]?.trim() || realIp || 'unknown';
    
    // Check rate limit (handles missing Redis config gracefully)
    const { success, limit, remaining, reset } = await checkRateLimit(ip);
    
    if (!success) {
      const retryAfter = Math.ceil((reset - Date.now()) / 1000);
      return NextResponse.json(
        { 
          error: `Too many requests. Please try again in ${Math.ceil(retryAfter / 60)} minute(s).`,
          retryAfter 
        },
        { 
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': new Date(reset).toISOString(),
            'Retry-After': retryAfter.toString(),
          }
        }
      );
    }

    // Parse request body with error handling
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid request format. Please ensure all fields are properly filled.' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    const { name, email, message, website } = body;

    // Honeypot check - if this field is filled, it's a bot
    // Silently return success to avoid alerting the bot
    if (website && website.trim() !== '') {
      return NextResponse.json(
        { success: true }, 
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Trim inputs
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Validate input lengths
    if (trimmedName.length === 0) {
      return NextResponse.json(
        { error: 'Name cannot be empty' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    if (trimmedName.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: `Name must be ${MAX_NAME_LENGTH} characters or less` },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    if (trimmedEmail.length === 0) {
      return NextResponse.json(
        { error: 'Email cannot be empty' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    if (trimmedEmail.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { error: `Email must be ${MAX_EMAIL_LENGTH} characters or less` },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    if (trimmedMessage.length === 0) {
      return NextResponse.json(
        { error: 'Message cannot be empty' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or less` },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Send email using Resend with escaped HTML to prevent XSS
    const data = await resend.emails.send({
      from: 'Contact Form <contact@justinbeaulieu.com>',
      to: ['beaulieujus@gmail.com'],
      subject: `New Contact Form Submission from ${escapeHtml(trimmedName)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(trimmedMessage).replace(/\n/g, '<br>')}</p>
      `,
      replyTo: trimmedEmail, // So you can reply directly
    });

    // Send auto-reply to user
    try {
      await resend.emails.send({
        from: 'Contact Form <contact@justinbeaulieu.com>',
        to: [trimmedEmail],
        subject: 'Thank you for contacting me!',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${escapeHtml(trimmedName)},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Justin Beaulieu</p>
        `,
      });
    } catch (autoReplyError) {
      // Log error but don't fail the main request if auto-reply fails
      if (process.env.NODE_ENV !== 'production') {
        console.error('Failed to send auto-reply:', autoReplyError);
      }
    }

    return NextResponse.json(
      { success: true, data },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': new Date(reset).toISOString(),
        }
      }
    );
  } catch (error) {
    // In production, consider using a proper error logging service
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error sending email:', error);
    }
    
    // Ensure we always return JSON, never HTML
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}

