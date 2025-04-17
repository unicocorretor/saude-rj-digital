
import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Corretores = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go the authentication logic
    console.log("Login attempt with:", formData);
    window.open("https://www.appsheet.com", "_blank");
  };

  const appFeatures = [
    {
      title: "Gerenciamento de Clientes",
      description: "Acompanhe seus clientes, status de propostas e renovações em um só lugar."
    },
    {
      title: "Calculadora de Comissões",
      description: "Calcule automaticamente suas comissões com base nas vendas realizadas."
    },
    {
      title: "Cotação Rápida",
      description: "Gere cotações para seus clientes em segundos e compartilhe facilmente."
    },
    {
      title: "Comparativo de Planos",
      description: "Compare diferentes planos e operadoras lado a lado para encontrar a melhor opção."
    },
    {
      title: "Dashboard de Desempenho",
      description: "Visualize seu desempenho, metas e progresso em um dashboard intuitivo."
    },
    {
      title: "Materiais de Vendas",
      description: "Acesse materiais de vendas exclusivos das operadoras parceiras."
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-green text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Portal do Corretor
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Acesse nossa plataforma exclusiva para corretores parceiros e potencialize suas vendas com nossas ferramentas especializadas
              </p>
              <Link 
                to="#login" 
                className="inline-block bg-white text-brand-blue font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Acessar Portal
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920" 
                alt="Corretor trabalhando" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Ferramentas para potencializar suas vendas" 
            subtitle="Tudo o que você precisa para ser um corretor de sucesso"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {appFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-green mr-2" />
                  <h3 className="text-xl font-bold text-brand-blue">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Access Section */}
      <section id="login" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Acesse o Portal" 
                subtitle="Entre com seus dados para acessar a plataforma exclusiva para corretores"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                    required
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      className="h-4 w-4 text-brand-blue focus:ring-brand-blue border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Lembrar-me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-brand-blue hover:underline">
                      Esqueceu a senha?
                    </a>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-3 px-4 bg-brand-blue text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    <span>Acessar Portal</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </form>
              
              <p className="mt-6 text-center text-sm text-gray-600">
                Não tem acesso?{" "}
                <a href="/contato" className="text-brand-blue hover:underline font-medium">
                  Solicite seu cadastro
                </a>
              </p>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?q=80&w=1920" 
                alt="Corretor com cliente" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Benefícios para Corretores Parceiros" 
            subtitle="Por que se tornar um corretor parceiro da Corretora Saúde RJ"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-brand-blue">
              <h3 className="text-xl font-bold mb-4 text-brand-blue">Comissões Diferenciadas</h3>
              <p className="text-gray-600">
                Oferecemos as melhores comissões do mercado para nossos corretores parceiros, com pagamento pontual e transparente.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-brand-green">
              <h3 className="text-xl font-bold mb-4 text-brand-blue">Treinamentos Exclusivos</h3>
              <p className="text-gray-600">
                Acesso a treinamentos e capacitações exclusivas sobre produtos, técnicas de vendas e atendimento ao cliente.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-brand-green">
              <h3 className="text-xl font-bold mb-4 text-brand-blue">Suporte Especializado</h3>
              <p className="text-gray-600">
                Conte com nossa equipe de backoffice para ajudar em todas as etapas da venda, desde a cotação até a implantação.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-brand-blue">
              <h3 className="text-xl font-bold mb-4 text-brand-blue">Ferramentas de Vendas</h3>
              <p className="text-gray-600">
                Acesso a materiais exclusivos, sistema de cotação online e aplicativo móvel para agilizar suas vendas.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/contato" 
              className="inline-flex items-center bg-brand-green text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300 shadow-lg"
            >
              Torne-se um Corretor Parceiro
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Corretores;
