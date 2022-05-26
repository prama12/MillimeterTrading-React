import React from 'react'
import Footer from './Components/Layouts/Footer'
import Header from './Components/Layouts/Header'
import Navbar from './Components/Layouts/Navbar'
import Agent from './Components/Sections/Agent'
import Certified from './Components/Sections/Certified'
import Choose from './Components/Sections/Choose'
import Company from './Components/Sections/Company'
import CompoundIntrest from './Components/Sections/CompoundIntrest'
import ContactUs from './Components/Sections/ContactUs'
import Events from './Components/Sections/Events'
import ExpertAdvisor from './Components/Sections/ExpertAdvisor'
import Faq from './Components/Sections/Faq'
import Hero from './Components/Sections/Hero'
import History from './Components/Sections/History'
import ImageSlider from './Components/Sections/ImageSlider'
import Map from './Components/Sections/Map'
import Newspaper from './Components/Sections/Newspaper'
import PricePlans from './Components/Sections/PricePlans'
import TradingInstitutional from './Components/Sections/TradingInstitutional'
import VideoPaylist from './Components/Sections/VideoPaylist'

const App = () => {
  return (
    <>
      <div className='dark:bg-primary-dark_body'>
        <Header />
        <Navbar />
        <Hero />
        <TradingInstitutional />
        <Company />
        <ExpertAdvisor />
        <CompoundIntrest />
        <Choose />
        <Certified />
        <PricePlans />
        <Agent />
        <History />
        <Events />
        <VideoPaylist />
        <ImageSlider />
        <Newspaper />
        <Faq />
        <Map />
        <ContactUs />

        <Footer />

      </div>
    </>
  )
}

export default App
