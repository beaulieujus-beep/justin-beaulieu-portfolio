'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ButtonPrimary } from './ButtonPrimary';
import { ButtonSecondary } from './ButtonSecondary';
import { openExternalLink } from '../lib/utils';

export default function ContactSection() {
  const router = useRouter();

  return (
    <section className="py-32 md:py-64 px-5 md:px-8">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-h1 text-white mb-8 md:mb-12">
          Let's Connect
        </h2>
        
        <div className="flex flex-wrap gap-4">
          <ButtonPrimary type="button" onClick={() => router.push('/contact')}>
            Contact Me
          </ButtonPrimary>
          <ButtonSecondary 
            type="button"
            onClick={() => openExternalLink('https://www.linkedin.com/in/justin-beaulieu-design')}
          >
            LinkedIn
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </ButtonSecondary>
        </div>
      </div>
    </section>
  );
}

