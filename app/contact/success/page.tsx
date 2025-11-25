"use client";

import Navigation from '../../components/Navigation';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { ButtonSecondary } from '../../components/ButtonSecondary';
import { ButtonIcon } from '../../components/ButtonIcon';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import { useRouter } from 'next/navigation';
import { openExternalLink } from '../../lib/utils';

export default function ContactSuccess() {
  const router = useRouter();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navigation activePage="contact" fadeIn={true} />
      <PageTransition>

      {/* Success Section */}
      <section className="px-5 md:px-8 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full text-left">
          <div>
            {/* Success Message */}
            <div>
              <h1 className="text-h1 font-medium text-white text-left mb-4 md:mb-8">
                Message Sent!
              </h1>
              
              <p className="max-w-lg lg:max-w-2xl text-body font-light text-left text-white">
                Thanks for your message. I'll respond as quickly as possible.
              </p>
              
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row flex-wrap gap-4 justify-start items-start mt-8 md:mt-12">
              <ButtonPrimary onClick={() => router.push('/')}>
                View More Work
              </ButtonPrimary>
              <ButtonSecondary onClick={() => router.push('/about')}>
                About Me
              </ButtonSecondary>
              <div className="flex gap-2 w-full sm:w-auto">
                <ButtonIcon onClick={() => openExternalLink('https://www.linkedin.com/in/justin-beaulieu-design')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="currentColor"/>
                  </svg>
                </ButtonIcon>
                <ButtonIcon onClick={() => openExternalLink('https://dribbble.com/jbeaulieu')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M12 0C5.375 0 0 5.375 0 12C0 18.625 5.375 24 12 24C18.625 24 24 18.625 24 12C24 5.375 18.625 0 12 0ZM19.75 5.55C21.075 7.25 21.9 9.35 21.975 11.65C21.65 11.575 18.6 10.925 15.525 11.325C15.45 11.15 15.4 10.975 15.325 10.775C15.125 10.275 14.9 9.75 14.675 9.25C18.125 7.775 19.55 5.825 19.75 5.55ZM12 2.05C14.475 2.05 16.725 2.975 18.45 4.5C18.275 4.75 17 6.575 13.65 7.9C12.025 4.925 10.225 2.475 9.975 2.15C10.625 2.075 11.3 2.05 12 2.05ZM7.9 2.85C8.125 3.15 9.9 5.6 11.55 8.525C7.125 9.75 3.175 9.725 2.725 9.725C3.325 6.625 5.3 4.025 7.9 2.85ZM2.025 12C2.025 11.9 2.025 11.8 2.025 11.7C2.45 11.7 7.075 11.775 11.85 10.275C12.125 10.85 12.375 11.45 12.625 12.05C12.475 12.1 12.325 12.125 12.175 12.175C7.275 13.85 4.65 18.05 4.425 18.45C2.9 16.7 2.025 14.45 2.025 12ZM12 21.975C9.725 21.975 7.625 21.2 5.95 19.9C6.125 19.525 8.075 16.025 13.4 14.05C13.425 14.05 13.45 14.025 13.475 14.025C14.875 17.525 15.45 20.45 15.6 21.275C14.5 21.7 13.275 21.975 12 21.975ZM17.55 20.375C17.45 19.825 16.925 17.05 15.625 13.6C18.5 13.125 21.025 13.9 21.35 14.025C20.95 16.825 19.525 19.275 17.55 20.375Z" fill="currentColor"/>
                  </svg>
                </ButtonIcon>
              </div>
            </div>
          </div>
        </div>
      </section>

      </PageTransition>
      <Footer />
    </div>
  );
}

