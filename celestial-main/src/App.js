import React from 'react'
import Home from './components/Home'
import ProductCard from './components/ProductCard'
import CheckOutPage from './components/CheckOutPage'
import ContactForm from './components/ContactForm'
import ProductCategories from './components/ProductCategories'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Shop from "./components/Shop.js"
import { FaAngleUp } from 'react-icons/fa'
import Review from './components/Review.js'

function App() 
{
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  return (
    <>
      <Home />
      <HeroSection />
      <ProductCategories />
      <Shop />
      <ProductCard />
      {/* <ProductCard /> */}
      {/* <ContactForm />
      {/* 
      <ContactForm />
      <CheckOutPage />
   
      <Shop/>

       {/* <ProductCard /> */}
      {/*<ContactForm />
      <CheckOutPage />


      {/* <ProductCard /> */}
      {/*<ContactForm />
      <CheckOutPage /> */}
         {/* <Shop/> */}
         <Review/>
      <Footer/>
      <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={scrollToTop}
        className="bg-black text-white tex-2xl p-4 rounded shadow-lg hover:bg-[#1a2d31] transition duration-300"
      >
        <FaAngleUp />

      </button>
    </div>
    </>
  )
}

export default App