
import { Link } from "react-router-dom";

interface CallToActionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink 
}: CallToActionProps) => {
  return (
    <div className="bg-gradient-to-r from-brand-blue to-brand-green text-white py-12 md:py-16 px-4 sm:px-6 text-center rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      {description && <p className="text-lg md:max-w-2xl mx-auto mb-6 opacity-90">{description}</p>}
      <Link 
        to={buttonLink} 
        className="inline-block bg-white text-brand-blue font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-md"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default CallToAction;
