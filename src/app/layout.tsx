import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Modern Landing Page',
  description: 'Built with Next.js and Tailwind CSS v4',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased bg-white`}>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
