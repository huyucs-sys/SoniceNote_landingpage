import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductAdvantages from './components/ProductAdvantages';
import UsageGuide from './components/UsageGuide';
import Comparison from './components/Comparison';
import Specs from './components/Specs';
import AiDemo from './components/AiDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductAdvantages />
        <UsageGuide />
        <Comparison />
        <Specs />
        <AiDemo />
      </main>
      <Footer />
    </div>
  );
};

export default App;