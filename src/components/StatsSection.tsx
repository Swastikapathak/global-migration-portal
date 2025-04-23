
import { useState, useEffect, useRef } from "react";
import { Users, Globe2, Award, Flag } from "lucide-react";

const stats = [
  {
    id: 1,
    value: 5000,
    label: "Successful Cases",
    icon: Users,
    prefix: ""
  },
  {
    id: 2,
    value: 50,
    label: "Destination Countries",
    icon: Globe2,
    prefix: ""
  },
  {
    id: 3,
    value: 15,
    label: "Years of Experience",
    icon: Award,
    prefix: ""
  },
  {
    id: 4,
    value: 98,
    label: "Success Rate",
    icon: Flag,
    prefix: "%"
  }
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const updateCount = (index: number, target: number) => {
      const duration = 2000; // animation duration in ms
      const frameRate = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(progress * target);

        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = currentCount;
          return newCounts;
        });

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameRate);

      return () => clearInterval(counter);
    };

    const timers = stats.map((stat, index) => updateCount(index, stat.value));
    return () => timers.forEach(timer => timer());
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-mocha py-20"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="bg-gold/10 p-4 rounded-full mb-4">
                <stat.icon size={28} className="text-mocha" />
              </div>
              <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900">
                {counts[index]}{stat.prefix}
              </h3>
              <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
