
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle = ({ title, subtitle, center = false }: SectionTitleProps) => {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-brand-blue">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
