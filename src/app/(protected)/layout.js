import { Inter } from 'next/font/google'
import '@/app/globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dash',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="light">
      <body className={inter.className}>
      <main className='w-full flex flex-col'>
          {children}
        </main>
        
      </body>
    </html>
  
  )
}
