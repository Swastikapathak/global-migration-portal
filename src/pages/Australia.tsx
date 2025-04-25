
import React from 'react';
import Header from '@/components/Navbar';
import Hero from '@/components/Hero-Aust';
import Programs from '@/components/Programs-Aust';
import PointsSystem from '@/components/PointsSystem-Aust';
import WhyChoose from '@/components/WhyChoose-Aust';
import Documentation from '@/components/Documentation-Aust';
import Pathways from '@/components/Pathways-Aust';


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
