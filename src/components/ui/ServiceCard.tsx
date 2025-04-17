
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  link?: string;
}

const ServiceCard = ({ title, description, icon, link = "/servicos" }: ServiceCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
      {icon && <div className="text-brand-green mb-4">{icon}</div>}
      <h3 className="text-xl font-bold mb-3 text-brand-blue">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-block text-brand-blue font-medium hover:text-brand-green transition-colors"
      >
        Saiba mais →
      </Link>
    </div>
  );
};

export default ServiceCard;
