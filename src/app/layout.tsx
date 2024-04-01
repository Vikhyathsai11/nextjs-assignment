// src/app/layout.tsx
import { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <Head>
        <title>Your Application Title</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" />
        {/* Add any other meta tags, stylesheets, or scripts here */}
      </Head>
      <body className={`font-sans ${inter.className}`}>
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="bg-red-800 text-black w-1/4">
            <nav className="p-5">
              <ul>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
                <li>
                  <Link href="/patients">Patients</Link>
                </li>
                <li>
                  <Link href="/sample">Sample</Link>
                </li>
              </ul>
            </nav>
          </aside>
          {/* Main Content */}
          <main className="w-3/4 p-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
