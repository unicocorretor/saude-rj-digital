
interface TestimonialCardProps {
  content: string;
  name: string;
  role?: string;
  image?: string;
}

const TestimonialCard = ({ content, name, role, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <p className="mb-6 text-gray-600 italic">"{content}"</p>
      <div className="flex items-center">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full mr-4 bg-brand-blue flex items-center justify-center text-white font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-brand-blue">{name}</h4>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
