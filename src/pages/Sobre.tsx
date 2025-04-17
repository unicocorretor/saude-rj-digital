
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import CallToAction from "@/components/ui/CallToAction";
import { Award, Users, Clock, ShieldCheck } from "lucide-react";

const Sobre = () => {
  const values = [
    {
      title: "Excelência",
      description: "Buscamos sempre a excelência em nossos serviços, oferecendo as melhores opções de planos de saúde.",
      icon: <Award className="w-10 h-10 text-brand-green" />,
    },
    {
      title: "Cliente no centro",
      description: "Colocamos as necessidades dos nossos clientes em primeiro lugar, oferecendo soluções personalizadas.",
      icon: <Users className="w-10 h-10 text-brand-green" />,
    },
    {
      title: "Agilidade",
      description: "Entendemos a importância da saúde e trabalhamos para oferecer soluções rápidas e eficientes.",
      icon: <Clock className="w-10 h-10 text-brand-green" />,
    },
    {
      title: "Segurança",
      description: "Garantimos que você e sua família estarão bem protegidos com os melhores planos do mercado.",
      icon: <ShieldCheck className="w-10 h-10 text-brand-green" />,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sobre a Corretora Saúde RJ
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Somos especialistas em planos de saúde no Rio de Janeiro, comprometidos com o bem-estar das pessoas e empresas
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Nossa História" 
                subtitle="Comprometimento com sua saúde desde o primeiro dia"
              />
              <p className="text-gray-600 mb-6">
                A Corretora Saúde RJ nasceu da visão de profissionais com vasta experiência no mercado de saúde suplementar, que identificaram a necessidade de um serviço especializado de consultoria em planos de saúde no Rio de Janeiro.
              </p>
              <p className="text-gray-600 mb-6">
                Desde nossa fundação, nos dedicamos a entender as necessidades específicas de cada cliente, seja ele uma pessoa física buscando proteção para si e sua família, ou uma empresa que deseja oferecer benefícios de qualidade para seus colaboradores.
              </p>
              <p className="text-gray-600">
                Nossa equipe é formada por profissionais altamente capacitados, em constante atualização sobre as mudanças no mercado de saúde suplementar, para oferecer sempre as melhores opções e o suporte contínuo que nossos clientes merecem.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1920" 
                alt="Equipe da Corretora Saúde RJ" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossos Valores" 
            subtitle="Princípios que orientam nosso trabalho diariamente"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-blue">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">Nossa Missão</h3>
              <p className="text-gray-600">
                Proporcionar acesso à saúde de qualidade através de soluções personalizadas em planos de saúde, garantindo o melhor atendimento e suporte contínuo aos nossos clientes.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a principal corretora de planos de saúde no Rio de Janeiro, referência em excelência de serviço, inovação e compromisso com o bem-estar dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CallToAction 
            title="Conheça melhor nossos serviços" 
            description="Descubra como podemos ajudar você a encontrar o plano de saúde ideal para suas necessidades."
            buttonText="Ver Nossos Serviços"
            buttonLink="/servicos"
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default Sobre;
