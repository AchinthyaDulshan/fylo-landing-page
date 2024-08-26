import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import SignupSection from './components/SignupSection'
import Footer from './components/Footer'
import Attribution from './components/Attribution'

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <FeaturesSection/>
      <SignupSection/>
      <Footer/>
      <Attribution/>
    </div>
  )
}

export default App