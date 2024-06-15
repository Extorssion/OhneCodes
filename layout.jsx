// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Fira_Mono } from 'next/font/google'
import { Chivo } from 'next/font/google'
import './styles.css'

const fira_mono = Fira_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira_mono',
})
const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={fira_mono.variable + ' ' + chivo.variable}>
        {children}
      </body>
    </html>
  )
}