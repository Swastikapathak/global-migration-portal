
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AnimationContextType {
  isAnimated: boolean;
  setIsAnimated: (value: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};

interface AnimationProviderProps {
  children: ReactNode;
}

const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Set animation state to true after initial load
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimationContext.Provider value={{ isAnimated, setIsAnimated }}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
