
import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <span className={`font-montserrat font-bold ${sizeClasses[size]} gold-text`}>
        Global Migration Portal
      </span>
    </Link>
  );
};

export default Logo;
