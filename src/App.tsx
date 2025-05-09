import React from 'react';
import AppNavbar from './components/common/Navbar';
import Hero from './components/common/Hero';
import FeaturerCenterImage from './components/common/FeatureCenterImage';
import ClientLogoSwiper from './components/common/ClientLogoSwiper';
import Features from './components/common/Features';
import FeaturesList from './components/common/FeaturesList';
import Community from './components/common/Community';

const App: React.FC = () => {
  return (
    <>
      <AppNavbar />
      <Hero />
      <FeaturerCenterImage />
      <ClientLogoSwiper/>
      <Features />
      <FeaturesList />
      <Community />
    </>
  );
};

export default App;
