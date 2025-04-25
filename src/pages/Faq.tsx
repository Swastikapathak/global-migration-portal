
import FaqAccordion from "@/components/FaqAccordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const generalFaqs = [
  {
    question: "How long does the immigration process typically take?",
    answer: "Immigration processing times vary significantly depending on the country, visa type, and individual circumstances. For example, Canada's Express Entry can take 6-8 months, while family sponsorship might take 12-24 months. During your consultation, we'll provide estimated timeframes based on current processing times for your specific situation."
  },
  {
    question: "What are the costs involved in the immigration process?",
    answer: "Immigration costs include government application fees, medical examination fees, language testing fees, document translation/certification, and professional consultation fees. These vary by country and visa type. We provide transparent fee information during your initial consultation, with no hidden costs."
  },
  {
    question: "Do I need to hire an immigration consultant?",
    answer: "While not mandatory, professional guidance significantly increases your chances of success. Immigration processes are complex and constantly changing. Our consultants stay updated on policy changes and help you avoid costly mistakes that could lead to delays or refusals."
  },
  {
    question: "What is the difference between permanent residence and citizenship?",
    answer: "Permanent residence grants the right to live and work indefinitely in a country, but with some limitations (no voting rights, possible travel restrictions). Citizenship offers full rights including a passport, voting rights, and freedom from deportation. Most countries require several years of permanent residence before citizenship eligibility."
  },
  {
    question: "Can my family join me when I immigrate?",
    answer: "Most immigration programs allow for the inclusion of immediate family members (spouse/partner and dependent children). Some programs also have separate family sponsorship options for other relatives. We can help you understand family immigration options for your specific situation."
  },
  {
    question: "What happens if my immigration application is refused?",
    answer: "If your application is refused, you may have options to appeal the decision, reapply with improved documentation, or pursue alternative immigration pathways. Our consultants can help assess the refusal reasons and recommend the best course of action."
  }
];

const canadaFaqs = [
  {
    question: "What is the Express Entry system?",
    answer: "Express Entry is Canada's online application management system for skilled immigrants. It's a points-based system that ranks candidates based on factors like age, education, work experience, and language ability. The highest-scoring candidates are invited to apply for permanent residence through regular draws."
  },
  {
    question: "What is the minimum CRS score needed for Express Entry?",
    answer: "There is no fixed minimum Comprehensive Ranking System (CRS) score, as cutoff scores vary with each draw. Generally, scores above 470 have been competitive, but Provincial Nominee Program candidates with lower scores may still receive invitations. Our team monitors trends to help maximize your score."
  },
  {
    question: "Can I immigrate to Canada without a job offer?",
    answer: "Yes, several Canadian immigration pathways don't require a job offer, including Express Entry (though having one adds points), Provincial Nominee Programs with specific streams for candidates without job offers, and the Start-up Visa Program for entrepreneurs."
  },
  {
    question: "What is the difference between IELTS General and Academic for Canadian immigration?",
    answer: "For most Canadian immigration programs (including Express Entry), IELTS General Training is accepted. IELTS Academic is typically required for students or certain professionals like doctors and nurses. We'll advise on which test is appropriate for your specific immigration pathway."
  }
];

const australiaFaqs = [
  {
    question: "What is SkillSelect?",
    answer: "SkillSelect is Australia's online system for managing skilled migration applications. Prospective migrants submit an Expression of Interest (EOI), are ranked based on points, and may receive invitations to apply for visas. It's used for several skilled visa subclasses including independent, state-nominated, and business visas."
  },
  {
    question: "What is the points requirement for Australian skilled migration?",
    answer: "Currently, the minimum points threshold is 65, but the actual points needed to receive an invitation are typically much higher due to competition. Recent invitation rounds have required 85-95 points for many occupations. We help clients identify strategies to maximize their points score."
  },
  {
    question: "What are regional visas in Australia?",
    answer: "Regional visas are designed to encourage migration to areas outside major cities like Sydney, Melbourne, and Brisbane. These visas often have lower requirements and offer pathways to permanent residence. The definition of 'regional' areas has expanded and now includes cities like Perth, Adelaide, and Gold Coast."
  },
  {
    question: "Can I apply for Australian PR while studying in Australia?",
    answer: "Yes, studying in Australia can create pathways to permanent residence. After completing eligible studies, you can apply for a Post-Study Work visa and then transition to permanent residency through skilled migration programs. Australian education provides additional points for skilled migration applications."
  }
];

const europeFaqs = [
  {
    question: "What is the EU Blue Card?",
    answer: "The EU Blue Card is a work and residence permit for highly qualified non-EU nationals. It offers a streamlined process for skilled professionals to work in EU countries, with benefits including family reunification rights and a path to permanent residence. Requirements and implementation vary between participating EU countries."
  },
  {
    question: "Which European countries offer Golden Visa programs?",
    answer: "Several European countries offer residence-by-investment (Golden Visa) programs, including Portugal, Spain, Greece, Malta, and Cyprus. Investment thresholds and qualifying investments vary, ranging from property purchases to capital transfers and business investments. Some programs offer paths to citizenship after a qualifying period."
  },
  {
    question: "Do I need to learn the local language to immigrate to Europe?",
    answer: "Language requirements vary by country and visa type. Some countries require basic language proficiency for certain visa types or for permanent residence/citizenship applications. Others may waive requirements for highly skilled workers or investors. We advise on specific requirements for your target country."
  },
  {
    question: "How can I work in Europe as a non-EU citizen?",
    answer: "Non-EU citizens typically need a work permit or visa to work legally in Europe. Options include employer-sponsored work permits, EU Blue Card for highly qualified professionals, self-employment visas for entrepreneurs, and special schemes for digital nomads in some countries. Requirements vary significantly between countries."
  }
];

const FaqPage = () => {
  useEffect(() => {
    document.title = "FAQs - Global Migration Portal";
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in hover:text-gold transition-all duration-500 ease-in-out">
              Frequently Asked <span className="text-mocha">Questions</span>
            </h1>
            <p className="text-lg opacity-90 mb-8 animate-fade-in">
              Find answers to common questions about immigration processes, requirements, and our services. If you don't see your question here, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 animate-on-scroll hover:text-gold transition-all duration-500 ease-in-out">General Immigration Questions</h2>
            <FaqAccordion faqs={generalFaqs} className="animate-on-scroll" />
          </div>
        </div>
      </section>

      {/* Country-Specific FAQs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-10 animate-on-scroll hover:text-gold transition-all duration-500 ease-in-out">Canada Immigration FAQs</h2>
            <FaqAccordion faqs={canadaFaqs} className="animate-on-scroll" />
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-10 animate-on-scroll hover:text-gold transition-all duration-500 ease-in-out">Australia Migration FAQs</h2>
            <FaqAccordion faqs={australiaFaqs} className="animate-on-scroll" />
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 animate-on-scroll hover:text-gold transition-all duration-500 ease-in-out">European Immigration FAQs</h2>
            <FaqAccordion faqs={europeFaqs} className="animate-on-scroll" />
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 md:py-24 bg-mocha">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-black animate-on-scroll">Still Have Questions?</h2>
            <p className="text-black/80 mb-8 animate-on-scroll">
              Our immigration experts are ready to answer your questions and provide personalized guidance based on your specific situation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
              <Button asChild size="lg" className="bg-black hover:bg-black/90 text-white transition-all duration-300 ease-in-out">
                <Link to="/booking">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black/10 transition-all duration-300 ease-in-out">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;