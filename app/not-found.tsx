"use client";

import Navigation from './components/Navigation';
import { ButtonPrimary } from './components/ButtonPrimary';
import { ButtonSecondary } from './components/ButtonSecondary';
import { ButtonIcon } from './components/ButtonIcon';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navigation activePage={undefined} fadeIn={true} />
      <PageTransition>

      {/* 404 Section */}
      <section className="px-5 md:px-8 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full text-left">
          <div>
            {/* 404 Message */}
            <div>
              <h1 className="text-h1 max-w-7xl text-white text-left mb-4 md:mb-8">
                Oops, this page exists beyond our reach.
              </h1>
              
              <p className="max-w-lg lg:max-w-2xl text-body font-light text-left text-white">
                This page may have been moved or deleted. Try going back to the last checkpoint.
              </p>
              
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row flex-wrap gap-4 justify-start items-start mt-8 md:mt-12">
              <ButtonPrimary onClick={() => router.back()}>
                Last Checkpoint
              </ButtonPrimary>
              <ButtonSecondary onClick={() => router.push('/')}>
                View Work
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </section>

      </PageTransition>
      <Footer />
    </div>
  );
}

