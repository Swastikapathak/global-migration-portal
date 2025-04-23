
import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-36 h-36",
  };

  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img
        src="images/logo.jpeg" // Make sure your image is in the public folder
        alt="Global Migration Portal Logo"
        className={`${sizeClasses[size]} object-contain`}
      />
    </Link>
  );
};

export default Logo;
