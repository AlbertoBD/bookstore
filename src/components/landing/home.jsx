import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Info from './info'
import What from './what'
import Clienti from './clienti'
import Footer from './footer'
import Contact from './contact'


export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Info />
        <What />
        <Clienti />
        <Contact />
        <Footer />
    </>
  )
}
