import React from 'react'
import Home from './components/Home'
import ProductCard from './components/ProductCard'
import CheckOutPage from './components/CheckOutPage'
import ContactForm from './components/ContactForm'
import ProductCategories from './components/ProductCategories'
import HeroSection from './components/HeroSection'
import Shop from "./components/Shop.js"

function App() {
  return (
    <>
      <Home />
      <HeroSection />
      <ProductCategories />
      <ProductCard />
      <ContactForm />
      <CheckOutPage />
      <Shop/>

    </>
  )
}

export default App