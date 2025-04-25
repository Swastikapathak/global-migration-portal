
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const programsData = [
  {
    title: "Express Entry",
    description: "Fast-track immigration system for skilled workers with work experience.",
    details: "Express Entry is an online system that Australia uses to manage immigration applications from skilled workers. It includes three federal programs: Federal Skilled Worker Program, Federal Skilled Trades Program, and Canadian Experience Class.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop"
  },
  {
    title: "Provincial Nominee Program (PNP)",
    description: "Provinces and territories nominate candidates based on local needs.",
    details: "Each province and territory has its own Provincial Nominee Program (PNP) that targets immigrants who have the skills, education and work experience to contribute to the economy and who want to become permanent residents.",
    image: "https://images.unsplash.com/photo-1604697976842-b18f38b4d84c?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Atlantic Immigration Program",
    description: "Program to attract and retain skilled immigrants in Atlantic Australia.",
    details: "The Atlantic Immigration Program helps employers in Atlantic Canada hire foreign skilled workers who want to immigrate to Atlantic Canada and international graduates who want to stay in Atlantic Canada after graduation.",
    image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Rural and Northern Immigration Pilot",
    description: "Community-driven program designed to spread economic immigration benefits to smaller communities.",
    details: "This pilot helps smaller communities attract foreign skilled workers to meet their economic development and labor market needs. Communities partner with local economic development organizations to identify candidates.",
    image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=1470&auto=format&fit=crop"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">
          Australia's Skilled Immigration Programs
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Australia offers several pathways for skilled workers to immigrate and become permanent residents.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programsData.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-canada-blue">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{program.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
