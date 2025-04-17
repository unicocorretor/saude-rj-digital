
import { FormEvent, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircle2, Mail, MapPin, Phone, Clock } from "lucide-react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
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
        email: "",
        telefone: "",
        mensagem: "",
      });
    }, 1500);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Estamos à disposição para ajudar você com qualquer dúvida sobre nossos serviços
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Informações de Contato" 
                subtitle="Diversas formas de entrar em contato com a nossa equipe"
              />
              
              <div className="space-y-8 mt-8">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefone / WhatsApp</h3>
                    <p className="text-gray-600">
                      <a href="https://wa.me/5521999999999" className="hover:text-brand-blue transition-colors">
                        (21) 99999-9999
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">E-mail</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contato@corretorasauderj.com.br" className="hover:text-brand-blue transition-colors">
                        contato@corretorasauderj.com.br
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      Av. Rio Branco, 123, Centro<br />
                      Rio de Janeiro - RJ, 20040-004
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Siga-nos nas Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Mensagem Enviada com Sucesso!</h2>
                  <p className="text-gray-600 mb-6">
                    Obrigado por entrar em contato conosco. Um de nossos consultores responderá sua mensagem em breve.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="inline-block bg-brand-blue text-white font-medium py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <>
                  <SectionTitle 
                    title="Envie uma Mensagem" 
                    subtitle="Preencha o formulário abaixo e entraremos em contato o mais breve possível"
                  />
                  
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensagem *
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                        required
                      />
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 px-4 bg-brand-blue text-white font-medium rounded-md hover:bg-opacity-90 transition-colors ${
                          isLoading ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossa Localização" 
            subtitle="Venha nos visitar no Centro do Rio de Janeiro"
            center
          />
          
          <div className="mt-8 rounded-lg overflow-hidden shadow-md h-96">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2961756397156!2d-43.179139224559334!3d-22.908328384871513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5fd24e0bdd%3A0x99447fc2d8ae03db!2sAv.%20Rio%20Branco%2C%20123%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020040-004!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Corretora Saúde RJ"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contato;
