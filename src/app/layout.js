import { GlobalContextProvider } from '@/content/globalContext'
import HeaderFooterLayout from './HeaderFooterLayout'
import './globals.css'
import { Roboto } from 'next/font/google'
import ScheduleDemo from '@/section/ScheduleDemo'

const inter = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'TechForing Workwise',
  description: 'Developed by TechForing Ltd.',
}
export default function RootLayout({ children }) {
  return (
    <GlobalContextProvider>
      <html lang="en">
        <body className={`${inter.className} bg-white mainBody`} suppressHydrationWarning={true}>
          <HeaderFooterLayout>
            {children}
          </HeaderFooterLayout>
          <ScheduleDemo />
        </body>
      </html>
    </GlobalContextProvider>
  )
}
