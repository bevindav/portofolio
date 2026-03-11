import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { portfolioData } from '@/lib/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: portfolioData.title,
  description: `${portfolioData.name} - Computer Science Student at ITB specializing in Cybersecurity and Algorithm Design`,
  authors: [{ name: portfolioData.name }],
  keywords: ['Bevinda Vivian', 'ITB', 'Computer Science', 'Cybersecurity', 'Portfolio', 'Developer'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
