import React from 'react';
import Home from './components/Home';
import HomeSection from './components/HomeSection';
import About from './components/About';
import Portfolio from './components/Portfolio';
import PortfolioSection from './components/PortfolioSection';
import Service from './components/Service';
import ServiceSection from './components/ServiceSection';
import ServiceGrid from './components/ServiceGrid';
import Blog from './components/Blog';
import BlogSubscribe from './components/BlogSubscribe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUpBtn from './components/ScrollUpBtn';

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
      <Blog />
      <BlogSubscribe />
      <Contact />
      <Footer />
      <ScrollUpBtn />
    </>
  )
}

export default App