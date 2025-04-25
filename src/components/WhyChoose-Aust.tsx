
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCheck } from 'lucide-react';

const reasons = [
  "High Quality of Life - Australia consistently ranks among the top countries for quality of life",
  "Strong Economy - Access to numerous job opportunities across various sectors",
  "Healthcare Benefits - Universal healthcare system for permanent residents",
  "Education System - World-class education institutions and opportunities",
  "Multicultural Society - Welcoming environment with diverse communities",
  "Path to Citizenship - Clear pathway to Canadian citizenship",
];

const WhyChoose = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Why Choose Skilled Worker Immigration To Australia?
            </h2>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCheck className="text-canada-blue mt-1" />
                  <p className="text-gray-600">{reason}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop"
              alt="People working in Australia"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
