import '@fontsource-variable/rubik';
import './globals.css';

import ScrollToTopButton from '@/components/Buttons/ScrollToTopButton';
import Navbar from '@/components/Navbar/Navbar';
import Providers from './providers';

import { Metadata } from 'next';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Muhammad Amir - Gabuters Developer',
  description:
    "Hello, world! My name is Muhammad Amir. I'm a Production Operator, Technician, Automotive Engineering, Gabuters Developer, and AOSP/Linux Kernel Enthusiast.",
  authors: {
    name: 'Muhammad Amir',
  },
  creator: 'Muhammad Amir',
  twitter: {
    creator: 'Muhammad Amir',
    title: 'Muhammad Amir - Gabuters Developer',
    description:
      "Hello, world! My name is Muhammad Amir. I'm a Production Operator, Technician, Automotive Engineering, Gabuters Developer, and AOSP/Linux Kernel Enthusiast.",
    card: 'summary',
    site: 'https://mhmmdamir.biz.id',
  },
  keywords: [
    'Muhammad Amir',
    'mhmmdamir',
    'Gabuters Developer',
    'Production Operator',
    'Technician',
    'Automotive',
    'Engineering',
  ],
  openGraph: {
    description:
      "Hello, world! My name is Muhammad Amir. I'm a Production Operator, Technician, Automotive Engineering, Gabuters Developer, and AOSP/Linux Kernel Enthusiast.",
    title: 'Muhammad Amir - Gabuters Developer',
    url: 'https://mhmmdamir.biz.id',
    type: 'website',
  },
  metadataBase: new URL('https://mhmmdamir.biz.id'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' id='html' className='dark'>
      <body className='bg-light-bg-primary text-light-fg-primary dark:bg-dark-bg-primary dark:text-dark-fg-primary'>
        <Providers>
          <Navbar />
          <div className='relative py-6 px-8 mx-auto mt-16 md:px-16 md:mt-14 lg:container lg:px-32 xl:px-72'>
            <NextAuthWrapper>
              <NextTopLoader showSpinner={false} color='#98971a' />
              {children}
              <Toaster
                position='bottom-right'
                reverseOrder={false}
              />
            </NextAuthWrapper>
            <ScrollToTopButton />
          </div>
        </Providers>
        <Script
          async
          src='https://analytics.umami.is/script.js'
          data-website-id='c306b611-d27b-4966-b6f1-a4ac7f51fdc9'
        />
      </body>
    </html>
  );
}
