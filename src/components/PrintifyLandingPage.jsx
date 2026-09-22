import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Pillars  from './Pillars';
import { ProductShowcase } from './ProductShowcase';
import HowItWorks  from './HowItWorks';
import Integrations from './Integrations';
import CtaBanner  from './CtaBanner';
import Footer  from './Footer';

const PrintifyLandingPage = () => {
    return (
      <>
      <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col justify-between selection:bg-[#39b54a] selection:text-white">
        {/* 1. Header Navigation */}
        <Navbar />

        {/* 2. Main Page Sections */}
        <main className="flex-1 w-full">
          <Hero />
          <Pillars />
          <ProductShowcase />
          <HowItWorks />
          <Integrations />
          <CtaBanner />
        </main>

        {/* 3. Global Footer */}
        <Footer />
      </div>
      </>
    );
  }
export default PrintifyLandingPage;