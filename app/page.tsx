import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Ryoka',
  description: 'Hybrid investment firm, studio, and operator.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        {children}
      </body>
    </html>
  )
}
