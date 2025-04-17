
import { FormEvent, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircle2 } from "lucide-react";

const Cotacao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    tipoPlano: "individual",
    vidas: "",
    idades: "",
    horarioContato: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setIsLoading(false);
      // Reset form data
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        tipoPlano: "individual",
        vidas: "",
        idades: "",
        horarioContato: "",
      });
    }, 1500);

    // In a real implementation, you would send the form data to a server or webhook
    // Example with Google Sheets via webhook:
    // 
    // try {
    //   const response = await fetch('YOUR_WEBHOOK_URL', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   
    //   if (response.ok) {
    //     setSubmitted(true);
    //   } else {
    //     console.error('Form submission failed');
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Solicite uma Cotação
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Preencha o formulário abaixo e nossa equipe entrará em contato com as melhores opções para você
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Cotação Solicitada com Sucesso!</h2>
                  <p className="text-gray-600 mb-6">
                    Obrigado por entrar em contato conosco. Um de nossos consultores entrará em contato em breve com as melhores opções de planos de saúde para você.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="inline-block bg-brand-blue text-white font-medium py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Fazer Nova Cotação
                  </button>
                </div>
              ) : (
                <>
                  <SectionTitle 
                    title="Formulário de Cotação" 
                    subtitle="Preencha com seus dados para receber uma cotação personalizada"
                  />
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail *
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
                      <label htmlFor="tipoPlano" className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de Plano *
                      </label>
                      <select
                        id="tipoPlano"
                        name="tipoPlano"
                        value={formData.tipoPlano}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                        required
                      >
                        <option value="individual">Individual</option>
                        <option value="familiar">Familiar</option>
                        <option value="empresarial">Empresarial</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="vidas" className="block text-sm font-medium text-gray-700 mb-1">
                          Quantidade de Vidas *
                        </label>
                        <input
                          type="number"
                          id="vidas"
                          name="vidas"
                          value={formData.vidas}
                          onChange={handleChange}
                          min="1"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="idades" className="block text-sm font-medium text-gray-700 mb-1">
                          Idades (separadas por vírgula) *
                        </label>
                        <input
                          type="text"
                          id="idades"
                          name="idades"
                          value={formData.idades}
                          onChange={handleChange}
                          placeholder="Ex: 35, 30, 5, 2"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="horarioContato" className="block text-sm font-medium text-gray-700 mb-1">
                        Melhor horário para contato
                      </label>
                      <select
                        id="horarioContato"
                        name="horarioContato"
                        value={formData.horarioContato}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                      >
                        <option value="">Selecione</option>
                        <option value="manha">Manhã (8h às 12h)</option>
                        <option value="tarde">Tarde (12h às 18h)</option>
                        <option value="noite">Noite (após 18h)</option>
                        <option value="qualquer">Qualquer horário</option>
                      </select>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 px-4 bg-brand-green text-white font-medium rounded-md hover:bg-opacity-90 transition-colors ${
                          isLoading ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isLoading ? 'Enviando...' : 'Solicitar Cotação'}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-brand-blue">Por que fazer uma cotação?</h3>
                <ul className="space-y-4">
                  {[
                    "Acesso aos melhores preços do mercado",
                    "Comparativo entre diferentes operadoras",
                    "Assessoria personalizada e gratuita",
                    "Atendimento humanizado e exclusivo",
                    "Suporte durante toda a vigência do plano"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-brand-blue text-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-4">Preferência por Contato Direto?</h3>
                <p className="mb-4 opacity-90">
                  Se preferir, entre em contato direto com nossa equipe através dos canais abaixo:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span><a href="https://wa.me/5521999999999" className="hover:underline">(21) 99999-9999</a></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.026 24l11.974-11.607 11.974 11.607h-23.948zm11.964-23.961l-11.99 8.725v12.476l11.99-11.604 11.99 11.604v-12.476l-11.99-8.725zm12.01 6.187l-12.01-5.764-12.01 5.764 12.01 8.753 12.01-8.753z"/>
                    </svg>
                    <span><a href="mailto:contato@corretorasauderj.com.br" className="hover:underline">contato@corretorasauderj.com.br</a></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cotacao;
