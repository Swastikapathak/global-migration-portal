
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileCheck } from 'lucide-react';

const documents = [
  {
    title: "Identity Documents",
    items: ["Valid passport", "Birth certificate", "Marriage certificate (if applicable)"]
  },
  {
    title: "Educational Documents",
    items: ["Degree certificates", "Transcripts", "Educational credential assessment"]
  },
  {
    title: "Work Experience",
    items: ["Reference letters", "Employment contracts", "Pay stubs"]
  },
  {
    title: "Language Proficiency",
    items: ["IELTS or TEF test results", "Language certificates"]
  },
  {
    title: "Additional Documents",
    items: ["Police clearance certificates", "Medical examination results", "Proof of funds"]
  }
];

const Documentation = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
          Documentation Required for Skilled Worker Visa
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="text-canada-blue" />
                  <h3 className="text-xl font-semibold text-gray-800">{doc.title}</h3>
                </div>
                <ul className="space-y-2">
                  {doc.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-canada-blue rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documentation;
