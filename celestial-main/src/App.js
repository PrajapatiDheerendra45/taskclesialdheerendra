import React from 'react'
import Home from './components/Home'
import ProductCard from './components/ProductCard'
import CheckOutPage from './components/CheckOutPage'
import ContactForm from './components/ContactForm'
import ProductCategories from './components/ProductCategories'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Home />
      <HeroSection />
      <ProductCategories />
      <ProductCard />
      {/* <ContactForm />
      <CheckOutPage /> */}
      <Footer/>
    </>
  )
}

export default App