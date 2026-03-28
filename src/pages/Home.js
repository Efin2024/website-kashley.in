import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyChoose from '../components/WhyChoose';
import EmergencyCTA from '../components/EmergencyCTA';

const Home = () => {
  return (
    <div className="page-enter">
      <Hero />
      <Features />
      <WhyChoose />
      <EmergencyCTA />
    </div>
  );
};

export default Home;
