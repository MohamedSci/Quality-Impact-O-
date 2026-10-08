import type { Metadata, Viewport } from 'next';
import './globals.css';
import Script from 'next/script';
import React from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | QA-PaaS by Quality Impact OÜ',
    default: 'QA-PaaS - AI-Orchestrated Software Testing Platform',
  },
  description:
    'Quality Impact OÜ delivers enterprise-grade QA-PaaS platform available on AWS Marketplace, Azure DevOps, and Google Cloud. ISO 27001 & SOC2 compliant AI test orchestration.',
  keywords: [
    'QA-PaaS',
    'Quality Impact OÜ',
    'Software Testing SaaS',
    'AI Test Orchestration',
    'AWS Marketplace',
    'Azure DevOps',
    'Google Cloud',
    'Enterprise QA',
    'Test Automation',
  ],
  authors: [{ name: 'Quality Impact OÜ', url: 'https://www.qa-paas.com' }],
  creator: 'Quality Impact OÜ',
  publisher: 'Quality Impact OÜ',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.qa-paas.com',
    siteName: 'QA-PaaS by Quality Impact OÜ',
    title: 'QA-PaaS - AI-Orchestrated Software Testing',
    description: 'Enterprise QA platform available on AWS, Azure, and Google Cloud marketplaces.',
    images: [
      {
        url: 'https://www.qa-paas.com/brand/og-hero.png',
        width: 1200,
        height: 630,
        alt: 'Quality Impact OÜ - QA-PaaS Platform',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QA-PaaS by Quality Impact OÜ',
    description: 'Enterprise-grade software testing on AWS, Azure & Google Cloud',
    images: ['https://www.qa-paas.com/brand/og-hero.png'],
    creator: '@QualityImpactOÜ',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark',
  themeColor: '#0F172A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  // Structured Data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Quality Impact OÜ',
    legalName: 'Quality Impact Osakuyhtiö',
    url: 'https://www.qa-paas.com',
    logo: 'https://www.qa-paas.com/brand/logo.svg',
    description: 'Enterprise QA-PaaS platform provider',
    sameAs: [
      'https://www.linkedin.com/company/quality-impact',
      'https://twitter.com/qualityimpactou',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Harju maakond',
      addressLocality: 'Tallinn',
      postalCode: 'Estonia',
      addressCountry: 'EE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Technical Support',
      email: 'support@qa-paas.com',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/brand/favicon.ico" />
        <link rel="apple-touch-icon" href="/brand/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Organization Schema */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body className="antialiased">
        <div id="root">{children}</div>

        {/* Vercel Web Vitals (Optional) */}
        <Script
          src="https://va.vercel-scripts.com/v1/script.debug.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
