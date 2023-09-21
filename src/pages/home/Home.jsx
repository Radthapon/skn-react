import React from 'react'
import Hero from '../../components/Home/Hero/Hero'
import Welcome from '../../components/Home/Welcome/Welcome'
import ProductsFeatures from '../../components/Home/ProductsFeatures/ProductsFeatures'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Welcome/>
        <ProductsFeatures/>
    </div>
  )
}

export default Home