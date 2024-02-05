import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Oswald } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'xsuve - Seeing solutions where others just see problems.',
  description: 'Seeing solutions where others just see problems.',
};

const MabryProFont = localFont({
  src: [
    {
      path: './fonts/MabryPro-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/MabryPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MabryPro-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/MabryPro-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/MabryPro-Black.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mabry-pro',
});

const OswaldFont = Oswald({
  variable: '--font-oswald',
  weight: ['300', '400'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsx(MabryProFont.variable, OswaldFont.variable)}>
        {children}
      </body>
    </html>
  );
}
