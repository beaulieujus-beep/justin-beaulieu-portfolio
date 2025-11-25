"use client";

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { Input, Textarea } from '../components/Input';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '' // Honeypot field - bots will fill this, humans won't see it
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation constants - must match server-side limits
  const MAX_NAME_LENGTH = 50;
  const MAX_EMAIL_LENGTH = 150;
  const MAX_MESSAGE_LENGTH = 1000;

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    let isValid = true;

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // Name validation
    if (!trimmedName) {
      newErrors.name = 'Please enter your name';
      isValid = false;
    } else if (trimmedName.length > MAX_NAME_LENGTH) {
      newErrors.name = `Name must be ${MAX_NAME_LENGTH} characters or less`;
      isValid = false;
    }

    // Email validation
    if (!trimmedEmail) {
      newErrors.email = 'Please enter your email';
      isValid = false;
    } else if (trimmedEmail.length > MAX_EMAIL_LENGTH) {
      newErrors.email = `Email must be ${MAX_EMAIL_LENGTH} characters or less`;
      isValid = false;
    } else if (!validateEmail(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Message validation
    if (!trimmedMessage) {
      newErrors.message = 'Please enter a message';
      isValid = false;
    } else if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message must be ${MAX_MESSAGE_LENGTH} characters or less`;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned an invalid response. Please try again.');
      }

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        throw new Error('Failed to parse server response. Please try again.');
      }

      if (!response.ok) {
        // Handle rate limiting (429 status)
        if (response.status === 429) {
          const errorMessage = data.error || 'Too many requests. Please try again later.';
          setErrors(prev => ({ ...prev, message: errorMessage }));
          setIsSubmitting(false);
          return;
        }
        
        // Handle server-side validation errors
        const errorMessage = data.error || 'Failed to send message';
        
        // Try to match error to specific field
        if (errorMessage.toLowerCase().includes('name')) {
          setErrors(prev => ({ ...prev, name: errorMessage }));
        } else if (errorMessage.toLowerCase().includes('email')) {
          setErrors(prev => ({ ...prev, email: errorMessage }));
        } else if (errorMessage.toLowerCase().includes('message')) {
          setErrors(prev => ({ ...prev, message: errorMessage }));
        } else {
          // General error - show in message field
          setErrors(prev => ({ ...prev, message: errorMessage }));
        }
        
        setIsSubmitting(false);
        return;
      }

      // Success - redirect to success page
      router.push('/contact/success');
    } catch (error) {
      // Log error in development only
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error:', error);
      }
      // Show error message to user
      setErrors(prev => ({
        ...prev,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      }));
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navigation activePage="contact" fadeIn={true} />
      <PageTransition>

      {/* Contact Section */}
      <section className="pt-32 md:pt-48 px-5 md:px-8 relative min-h-screen" style={{ paddingBottom: '120px' }}>
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            {/* Contact Title */}
            <div>
              <h1 className="text-h1 text-white text-left">
                Let's chat!
              </h1>

            </div>

            {/* Contact Form */}
            <div className="max-w-2xl">
              <form onSubmit={handleSubmit} noValidate className="space-y-6 relative">
                {/* Name Field */}
                <Input
                  label="Name"
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  errorMessage={errors.name}
                  placeholder="Your name"
                />

                {/* Email Field */}
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  errorMessage={errors.email}
                  placeholder="your.email@example.com"
                />

                {/* Message Field */}
                <div>
                  <Textarea
                    label="Message"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    errorMessage={errors.message}
                    rows={4}
                    placeholder="Tell me about your project..."
                    maxLength={MAX_MESSAGE_LENGTH}
                  />
                  <div className="flex justify-end mt-1">
                    <span 
                      className={`text-body-sm ${
                        formData.message.length > MAX_MESSAGE_LENGTH * 0.9
                          ? 'text-error'
                          : formData.message.length > MAX_MESSAGE_LENGTH * 0.75
                          ? 'text-white'
                          : 'text-white/60'
                      }`}
                    >
                      {formData.message.length} / {MAX_MESSAGE_LENGTH}
                    </span>
                  </div>
                </div>

                {/* Honeypot field - hidden from users, bots will fill this */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    opacity: 0,
                    pointerEvents: 'none',
                    height: 0,
                    width: 0
                  }}
                  aria-hidden="true"
                />

                {/* Submit Button */}
                <div className="flex justify-start">
                  <ButtonPrimary type="submit" disabled={isSubmitting} style={{ width: '200px' }}>
                    {isSubmitting ? (
                      <>
                        Sending...
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 animate-spin">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="32" strokeDashoffset="8" strokeLinecap="round"/>
                        </svg>
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      </PageTransition>
      <Footer />
    </div>
  );
}

