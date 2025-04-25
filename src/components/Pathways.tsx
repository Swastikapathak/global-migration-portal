
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const pathwaysData = [
  {
    title: "Federal Skilled Worker Program (FSWP)",
    eligibility: [
      "Score at least 67 points on the selection factors",
      "At least 1 year of skilled work experience in NOC 0, A, or B",
      "Language proficiency (CLB 7)",
      "Sufficient funds to settle in Canada"
    ],
    process: "Apply through Express Entry. If eligible, enter the pool and wait for an Invitation to Apply (ITA) based on CRS score."
  },
  {
    title: "Federal Skilled Trades Program (FSTP)",
    eligibility: [
      "At least 2 years of full-time work experience in a skilled trade within 5 years before applying",
      "Meet the job requirements for that skilled trade as set by the NOC",
      "Language proficiency (CLB 5 for speaking and listening, CLB 4 for reading and writing)",
      "Have a valid job offer for at least 1 year or a certificate of qualification in your skilled trade"
    ],
    process: "Apply through Express Entry. Requirements are more focused on practical training and work experience than formal education."
  },
  {
    title: "Canadian Experience Class (CEC)",
    eligibility: [
      "At least 1 year of skilled work experience in Canada within 3 years of applying",
      "Gained experience while legally working in Canada",
      "Language proficiency depending on NOC level"
    ],
    process: "Apply through Express Entry. This pathway is designed for individuals who have already gained work experience in Canada."
  },
  {
    title: "Provincial Nominee Programs (PNPs)",
    eligibility: [
      "Requirements vary by province and specific program",
      "Many require a connection to the province (job offer, education, or work experience)",
      "Some streams are aligned with Express Entry, while others operate independently"
    ],
    process: "Apply directly to the province or through Express Entry (depending on the stream). If nominated, receive 600 additional CRS points in Express Entry or apply directly for permanent residence."
  }
];

const Pathways = () => {
  return (
    <section id="pathways" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">
          Immigration Pathways
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Explore the different pathways to immigrate to Canada as a skilled worker
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {pathwaysData.map((pathway, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-xl font-medium text-canada-blue">
                  {pathway.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <div className="space-y-4 py-2">
                    <div>
                      <h4 className="font-semibold mb-2">Eligibility Requirements:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {pathway.eligibility.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Application Process:</h4>
                      <p>{pathway.process}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Pathways;
