"use client";

import Navigation from './components/Navigation';
import { ButtonPrimary } from './components/ButtonPrimary';
import { ButtonSecondary } from './components/ButtonSecondary';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navigation activePage={undefined} fadeIn={true} />
      <PageTransition>

      {/* Error Section */}
      <section className="px-5 md:px-8 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full text-left">
          <div>
            {/* Error Message */}
            <div>
              <h1 className="text-h1 max-w-6xl text-white text-left mb-4 md:mb-8">
                Houston, we have a problem.
              </h1>
              
              <p className="max-w-lg lg:max-w-2xl text-body font-light text-left text-white">
                An unexpected error occurred while processing your request. Please try again or return to work.
              </p>
              
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row gap-4 justify-start items-start mt-8 md:mt-12">
              <ButtonPrimary onClick={() => reset()}>
                Try Again
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


