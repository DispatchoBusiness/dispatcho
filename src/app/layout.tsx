// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PreHeader from './components/PreHeader';
import PostFooter from './components/PostFooter';

export const metadata: Metadata = {
  title: 'My App',
};

export default function RootLayout({ children }: { children: any }) { // Simple 'any' type
  return (
    <html lang="en">
      <body>
        <PreHeader />
        <Header />
        <main className="flex-grow">
          {children} {/* This will render your current page */}
        </main>
        <Footer />
        <PostFooter />
      </body>
    </html>
  );
}