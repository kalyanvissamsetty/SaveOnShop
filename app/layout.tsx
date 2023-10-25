import type { Metadata } from 'next'
import { Inter,Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({subsets:['latin'],
weight:['400','500','600','700']
})
export const metadata: Metadata = {
  title: "SaveOnShop",
  description:
    "Real-Time Price Alerts - Stay in the loop with instant price change notifications. Save money and time while shopping for your favorite products online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-10xl mx-auto'>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
