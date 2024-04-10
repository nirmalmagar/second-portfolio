import React from 'react';
import Home from './components/Home';
import HomeSection from './components/HomeSection';
import About from './components/About';
import Portfolio from './components/Portfolio';
import PortfolioSection from './components/PortfolioSection';
import Service from './components/Service';
import ServiceSection from './components/ServiceSection';
import ServiceGrid from './components/ServiceGrid';

const App = () => {
  return (
    <>
      <Home />
      <HomeSection />
      <About />
      <Portfolio />
      <PortfolioSection />
      <Service />
      <ServiceSection />
      <ServiceGrid />
    </>
  )
}

export default App