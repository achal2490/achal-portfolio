import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://achal-gupta-data-ai.kanoknut-kj.chatgpt.site'),
  title: 'Achal Gupta | Data & AI Product Leader',
  description: 'Data and AI product leader turning enterprise capabilities into governed adoption, commercial outcomes, and global growth.',
  openGraph: {
    title: 'Achal Gupta | Data & AI Product Leader',
    description: 'Enterprise Data and AI leadership spanning governed adoption, commercial product ownership, and global growth.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Achal Gupta — Data & AI Product Leader' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achal Gupta | Data & AI Product Leader',
    description: 'Enterprise Data and AI leadership spanning governed adoption, commercial product ownership, and global growth.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/achal-portfolio/site.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
