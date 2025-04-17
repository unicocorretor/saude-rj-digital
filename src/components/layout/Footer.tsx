
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-blue">Corretora Saúde RJ</h3>
            <p className="mb-4">Seu plano de saúde com atendimento especializado no Rio de Janeiro.</p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-blue transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-blue">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-brand-blue transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="hover:text-brand-blue transition-colors">Serviços</Link></li>
              <li><Link to="/cotacao" className="hover:text-brand-blue transition-colors">Cotação</Link></li>
              <li><Link to="/contato" className="hover:text-brand-blue transition-colors">Contato</Link></li>
              <li><Link to="/corretores" className="hover:text-brand-blue transition-colors">Corretores</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-blue">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span><a href="https://wa.me/5521999999999" className="hover:text-brand-blue transition-colors">(21) 99999-9999</a></span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span><a href="mailto:contato@corretorasauderj.com.br" className="hover:text-brand-blue transition-colors">contato@corretorasauderj.com.br</a></span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Av. Rio Branco, 123, Centro<br />Rio de Janeiro - RJ, 20040-004</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} Corretora Saúde RJ. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
