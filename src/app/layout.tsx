// src/app/layout.tsx
import { ReactNode } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className={inter.className}>
      <body>
        <div className="flex">
      
          <div className="bg-gray-800 text-white w-1/4 h-screen p-5">
            <nav>
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
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
