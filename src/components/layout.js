import React from 'react'
import Footer from './footer'
import Header from './header'

function Layout({children}) {
  return (
    <div>
          <Header />
          <div style={{height:"90vh"}}>
          {children} 
          </div>
          <Footer/>
      </div>
  )
}

export default Layout