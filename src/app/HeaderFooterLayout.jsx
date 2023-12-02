import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeaderTop from '@/components/HeaderTop'
import React from 'react'

const HeaderFooterLayout = ({ children }) => {
  return (
    <main>
       <HeaderTop />
       {/* <Header /> */}
      {children}
      <Footer />
    </main>
  )
}

export default HeaderFooterLayout