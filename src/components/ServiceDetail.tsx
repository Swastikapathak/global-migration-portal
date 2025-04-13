
import { Check } from "lucide-react";

interface ServiceDetailProps {
  title: string;
  description: string;
  requirements: string[];
  process: string[];
  eligibility: string[];
  icon?: React.ReactNode;
  className?: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  description,
  requirements,
  process,
  eligibility,
  icon,
  className = "",
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-gold">{icon}</div>}
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-700 mb-6">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-3 flex items-center">
            <span className="w-10 h-1 bg-gold mr-3"></span>
            Key Requirements
          </h4>
          <ul className="space-y-2">
            {requirements.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check size={18} className="text-gold mt-1 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-3 flex items-center">
            <span className="w-10 h-1 bg-gold mr-3"></span>
            Process Overview
          </h4>
          <ul className="space-y-2">
            {process.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-gold text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-medium">
                  {index + 1}
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-3 flex items-center">
            <span className="w-10 h-1 bg-gold mr-3"></span>
            Eligibility
          </h4>
          <ul className="space-y-2">
            {eligibility.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check size={18} className="text-gold mt-1 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
