import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Eswar College of Engineering | UGC Autonomous | NAAC B++ Accredited',
  description: 'Eswar College of Engineering - A premier UGC Autonomous, NAAC B++ accredited engineering institution established in 2008. Offering B.Tech, MBA programs with world-class infrastructure in Kesanupalli Village, Narasaraopet, Guntur District, Andhra Pradesh.',
  keywords: ['Eswar College', 'Engineering College', 'Narasaraopet', 'Guntur', 'B.Tech', 'MBA', 'NAAC B++', 'UGC Autonomous', 'Andhra Pradesh', 'Kesanupalli'],
  authors: [{ name: 'Eswar College of Engineering' }],
  openGraph: {
    title: 'Eswar College of Engineering',
    description: 'UGC Autonomous | NAAC B++ Accredited | Shaping Tomorrow\'s Engineers Since 2008',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: '/eswar_college.jpeg',
    apple: '/eswar_college.jpeg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0A1628' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1628' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
