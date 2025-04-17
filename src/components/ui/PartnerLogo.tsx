
interface PartnerLogoProps {
  name: string;
  logo: string;
}

const PartnerLogo = ({ name, logo }: PartnerLogoProps) => {
  return (
    <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
      <img 
        src={logo} 
        alt={`${name} logo`} 
        className="max-h-16 max-w-full object-contain"
      />
    </div>
  );
};

export default PartnerLogo;
