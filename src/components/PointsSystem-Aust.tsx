
import React from 'react';
import { Progress } from '@/components/ui/progress';

const factors = [
  { name: "Age", maxPoints: 110, description: "Candidates between 20-29 years receive maximum points" },
  { name: "Education", maxPoints: 150, description: "Higher levels of education receive more points" },
  { name: "Language Proficiency", maxPoints: 160, description: "Proficiency in English and/or French" },
  { name: "Work Experience", maxPoints: 80, description: "Skilled work experience in Canada or abroad" },
  { name: "Adaptability", maxPoints: 100, description: "Factors that help you adapt to life in Canada" }
];

const PointsSystem = () => {
  return (
    <section id="points-system" className="py-16 bg-canada-light-blue">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop" 
              alt="Points System Illustration"
              className="rounded-lg shadow-xl mb-8 md:mb-0"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
              The Comprehensive Ranking System (CRS)
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              The Express Entry system uses the Comprehensive Ranking System (CRS) to assess and score candidates. The maximum score is 1,200 points.
            </p>
            
            <div className="space-y-6">
              {factors.map((factor, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">{factor.name}</h4>
                    <span className="text-canada-blue font-medium">Up to {factor.maxPoints} points</span>
                  </div>
                  <Progress value={(factor.maxPoints / 160) * 100} className="h-2 mb-2" />
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PointsSystem;
