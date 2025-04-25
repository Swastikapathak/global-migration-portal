
import React from 'react';
import Header from '@/components/Navbar';
import Hero from '@/components/Hero-Euro';
import Programs from '@/components/Programs-Euro';
import PointsSystem from '@/components/PointsSystem-Euro';
import WhyChoose from '@/components/WhyChoose-Euro';
import Documentation from '@/components/Documentation-Euro';
import Pathways from '@/components/Pathways-Euro';


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Programs />
        <WhyChoose />
        <PointsSystem />
        <Documentation />
        <Pathways />
        
      </main>
     
    </div>
  );
};

export default Index;
