
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import CallToAction from "@/components/ui/CallToAction";
import { Home, Users, Building2, CheckCircle2, Heart, TrendingUp } from "lucide-react";

const Servicos = () => {
  const services = [
    {
      title: "Planos Individuais",
      description: "Soluções personalizadas para cuidar da sua saúde com o melhor custo-benefício. Atendemos todas as suas necessidades com planos que oferecem cobertura completa.",
      icon: <Home size={48} className="text-brand-green" />,
      features: [
        "Ampla rede de hospitais e clínicas",
        "Cobertura para consultas e exames",
        "Opções com e sem coparticipação",
        "Telemedicina e atendimento online"
      ]
    },
    {
      title: "Planos Familiares",
      description: "Proteção completa para toda a família com cobertura abrangente e rede diferenciada. Cuide de quem você mais ama com segurança e tranquilidade.",
      icon: <Users size={48} className="text-brand-green" />,
      features: [
        "Valor diferenciado por dependente",
        "Cobertura para todas as faixas etárias",
        "Opções de planos com obstetrícia",
        "Desconto progressivo por dependente"
      ]
    },
    {
      title: "Planos Empresariais",
      description: "Benefício de saúde para sua equipe com condições especiais e atendimento dedicado. Aumente a satisfação e produtividade de seus colaboradores.",
      icon: <Building2 size={48} className="text-brand-green" />,
      features: [
        "Planos para empresas de todos os portes",
        "Atendimento corporativo exclusivo",
        "Gestão simplificada do benefício",
        "Relatórios de utilização e análise de perfil"
      ]
    },
  ];

  const benefits = [
    {
      title: "Atendimento Personalizado",
      description: "Analisamos o seu perfil para encontrar o plano que melhor atende suas necessidades.",
      icon: <Heart className="w-8 h-8 text-brand-blue" />,
    },
    {
      title: "Suporte Contínuo",
      description: "Oferecemos assistência completa durante toda a vigência do seu plano.",
      icon: <CheckCircle2 className="w-8 h-8 text-brand-blue" />,
    },
    {
      title: "Melhores Condições",
      description: "Negociamos diretamente com as operadoras para garantir os melhores preços e condições.",
      icon: <TrendingUp className="w-8 h-8 text-brand-blue" />,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Soluções completas em planos de saúde para indivíduos, famílias e empresas no Rio de Janeiro
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {services.map((service, index) => (
        <section 
          key={index} 
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
              <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4 text-brand-blue">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-lg overflow-hidden shadow-lg ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                <img 
                  src={`https://images.unsplash.com/photo-${
                    index === 0 ? '1576091160550-2173dba999ef' : index === 1 ? '1577962917302-cd874c4a31f2' : '1600880292089-90a455bb6dbf'
                  }?q=80&w=1920`} 
                  alt={service.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Por que escolher a Corretora Saúde RJ?" 
            subtitle="Diferenciais que nos tornam a melhor escolha para seu plano de saúde"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-blue">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operadoras Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Operadoras Parceiras" 
            subtitle="Trabalhamos com as melhores operadoras do mercado"
            center
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/8/81/Logo_amil.svg",
              "https://upload.wikimedia.org/wikipedia/commons/8/86/Bradesco_Sa%C3%BAde_logo.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/SulAm%C3%A9rica_logo.svg/1200px-SulAm%C3%A9rica_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_UNIMED.svg",
              "https://portalbr.info/uploads/salutar/5400/noticias/125/20210106103007_notredame-intermedica.png"
            ].map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={logo} 
                  alt={`Operadora parceira ${index + 1}`} 
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CallToAction 
            title="Pronto para encontrar o plano ideal para você?" 
            description="Entre em contato conosco e nossa equipe especializada irá ajudar você a escolher o melhor plano."
            buttonText="Solicitar Cotação"
            buttonLink="/cotacao"
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default Servicos;
