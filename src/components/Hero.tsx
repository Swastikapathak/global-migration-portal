
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-cover bg-center h-[800px] text-charcoal" style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' 
    }}>
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl">
          Your Path to Canada Through Skilled Immigration
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Discover how you can immigrate to Canada through various skilled worker programs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-mocha text-canada-blue hover:bg-gray-100">
            <a href="#contact">Get Expert Advice</a>
          </Button>
          <Button size="lg" variant="outline" className="text-white hover:bg-white/10 bg-mocha">
            <a href="#programs">Explore Programs</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
