import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Business ee5ad0a7-b59a-46b3-a9e5-03b73d9cccaa - Professional business-ee5ad0a7-b59a-46b3-a9e5-03b73d9cccaa Services',
  description: 'Trusted business-ee5ad0a7-b59a-46b3-a9e5-03b73d9cccaa services with expertise you can rely on.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
