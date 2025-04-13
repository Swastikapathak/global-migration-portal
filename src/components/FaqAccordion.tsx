
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

interface FaqAccordionProps {
  faqs: FAQItem[];
  className?: string;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs, className = "" }) => {
  return (
    <Accordion type="single" collapsible className={`w-full ${className}`}>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
          <AccordionTrigger className="text-left font-montserrat font-semibold text-lg py-5 hover:text-gold transition-colors [&[data-state=open]>div>svg]:rotate-180">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 pb-5">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
