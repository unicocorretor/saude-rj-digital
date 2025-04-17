
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import PartnerLogo from "@/components/ui/PartnerLogo";
import CallToAction from "@/components/ui/CallToAction";
import { Users, HomeIcon, Building2 } from "lucide-react";

const Index = () => {
  // Sample services
  const services = [
    {
      title: "Planos Individuais",
      description: "Soluções personalizadas para cuidar da sua saúde com o melhor custo-benefício.",
      icon: <HomeIcon size={36} />,
      link: "/servicos",
    },
    {
      title: "Planos Familiares",
      description: "Proteção completa para toda a família com cobertura abrangente e rede diferenciada.",
      icon: <Users size={36} />,
      link: "/servicos",
    },
    {
      title: "Planos Empresariais",
      description: "Benefício de saúde para sua equipe com condições especiais e atendimento dedicado.",
      icon: <Building2 size={36} />,
      link: "/servicos",
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      content: "A Corretora Saúde RJ me ajudou a encontrar o plano perfeito para minha família. Atendimento excelente e suporte contínuo.",
      name: "Ana Silva",
      role: "Cliente Plano Familiar",
    },
    {
      content: "Como empresário, precisava de uma solução de saúde para meus funcionários. A equipe foi extremamente profissional e encontrou o plano ideal.",
      name: "Carlos Oliveira",
      role: "Diretor Comercial",
    },
    {
      content: "Já tive problemas com outros planos antes, mas com a orientação da Corretora Saúde RJ, encontrei um plano que realmente atende minhas necessidades.",
      name: "Márcia Santos",
      role: "Cliente Plano Individual",
    },
  ];

  // Sample partners
  const partners = [
    { name: "Amil", logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Logo_amil.svg" },
    { name: "Bradesco Saúde", logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/Bradesco_Sa%C3%BAde_logo.png" },
    { name: "SulAmérica", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/SulAm%C3%A9rica_logo.svg/1200px-SulAm%C3%A9rica_logo.svg.png" },
    { name: "Unimed", logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_UNIMED.svg" },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-blue to-slate-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div 
          className="min-h-[80vh] flex items-center bg-no-repeat bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1920')",
            backgroundBlendMode: "overlay" 
          }}
        >
          <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Seu plano de saúde com atendimento especializado no Rio de Janeiro
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Atendimento personalizado para indivíduos, famílias e empresas
              </p>
              <Link 
                to="/cotacao" 
                className="inline-block bg-brand-green text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300 shadow-lg"
              >
                Solicite uma Cotação
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossos Serviços" 
            subtitle="Soluções completas em planos de saúde para todos os perfis"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossas Operadoras Parceiras" 
            subtitle="Trabalhamos com as melhores operadoras do mercado"
            center
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <PartnerLogo
                key={index}
                name={partner.name}
                logo={partner.logo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="O que nossos clientes dizem" 
            subtitle="A satisfação de quem confia em nosso trabalho"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CallToAction 
            title="Pronto para encontrar o plano ideal?" 
            description="Nossa equipe está pronta para ajudar você a encontrar a melhor opção para suas necessidades."
            buttonText="Solicitar Cotação Agora"
            buttonLink="/cotacao"
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
