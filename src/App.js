import React from 'react'
import Home from './components/Home'
import ProductCard from './components/ProductCard'
import ContactForm from './components/ContactForm'
import ProductCategories from './components/ProductCategories'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <>
    <Home/>
    <HeroSection/>
    <ProductCategories/>
    <ProductCard/>
    <ContactForm/>
    </>
  )
}

export default App