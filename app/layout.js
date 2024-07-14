import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WeMakeArt',
  description: 'Architecting the future',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-neutral-900 text-white`}>
        {children}
      </body>
    </html>
  )
}