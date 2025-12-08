import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NicheBridge',
  description: 'NicheBridge connects small businesses to highly targeted online shoppers and professionals through tailored subscription boxes that evolve based on AI-driven insights, offering a unique blend of e-commerce, personalization, and community engagement.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
