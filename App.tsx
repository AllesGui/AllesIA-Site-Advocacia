import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Briefcase, Scale, User, Quote, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// Dados das imagens fornecidas (adaptados para o contexto)
const IMAGES = [
  { url: "https://images.pexels.com/photos/8623278/pexels-photo-8623278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Escritório de advocacia moderno e minimalista", w: 940, h: 529 },
  { url: "https://images.pexels.com/photos/8623281/pexels-photo-8623281.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Tecnologia e eficiência na advocacia", w: 940, h: 529 },
  { url: "https://images.pexels.com/photos/16005007/pexels-photo-16005007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Foco e precisão legal", w: 940, h: 627 },
  { url: "https://images.pexels.com/photos/16004978/pexels-photo-16004978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Inovação jurídica e modernidade", w: 940, h: 627 },
  { url: "https://images.pexels.com/photos/3098764/pexels-photo-3098764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Análise de dados jurídicos", w: 940, h: 627 },
  { url: "https://images.pexels.com/photos/12015532/pexels-photo-12015532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Conectividade legal", w: 940, h: 627 },
];

// Helper para classes condicionais e merge
const cn = (...inputs: clsx.ClassValue[]) => twMerge(clsx(inputs));

// Componente para o Cabeçalho
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-neutral-900/50"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Scale className="h-8 w-8 text-neutral-300 mr-2" />
          <a href="#" className="text-2xl font-bold tracking-tight text-neutral-100 hover:text-neutral-50 transition-colors">
            Woloczyn & Schmidt <span className="text-neutral-300">Advogados</span>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {['Início', 'Sobre Nós', 'Áreas de Atuação', 'Equipe', 'Depoimentos', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-neutral-300 text-lg font-light hover:text-neutral-100 transition-colors relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-neutral-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-300 focus:outline-none">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-neutral-900/90 pb-4 border-t border-white/5"
        >
          <div className="flex flex-col items-center space-y-4 pt-4">
            {['Início', 'Sobre Nós', 'Áreas de Atuação', 'Equipe', 'Depoimentos', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-neutral-300 text-lg font-light hover:text-neutral-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

// Componente para a Seção Hero
const HeroSection: React.FC = () => (
  <section
    id="início"
    className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-neutral-950"
  >
    <div className="absolute inset-0 z-0">
      <img
        src={IMAGES[0].url}
        alt={IMAGES[0].alt}
        className="w-full h-full object-cover opacity-10"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
    </div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative z-10 p-8 max-w-4xl mx-auto bg-neutral-900/60 backdrop-blur-md rounded-3xl border border-white/5 shadow-2xl shadow-neutral-900/30"
    >
      <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-neutral-100 mb-6 leading-tight">
        Sua Justiça, Nossa Prioridade.
      </h1>
      <p className="text-lg md:text-xl text-neutral-300 mb-8 font-light">
        Experiência, dedicação e resultados em todas as áreas do direito. Woloczyn & Schmidt: a sua defesa legal.
      </p>
      <motion.a
        href="#contato"
        className="inline-flex items-center px-8 py-4 bg-neutral-700 text-neutral-100 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out transform hover:bg-neutral-600"
        whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(163, 163, 163, 0.3)" }}
        whileTap={{ scale: 0.98 }}
      >
        Fale Conosco
        <ChevronRight className="ml-2 h-5 w-5" />
      </motion.a>
    </motion.div>
  </section>
);

// Componente para a Seção Sobre Nós
const AboutSection: React.FC = () => (
  <section id="sobre-nós" className="py-20 bg-neutral-900 text-neutral-100">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold tracking-tight text-center mb-12 text-neutral-100"
      >
        Sobre Woloczyn & Schmidt
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 text-lg font-light text-neutral-300"
        >
          <p>
            Fundado com a visão de oferecer excelência e inovação no cenário jurídico, o escritório Woloczyn & Schmidt Advogados se destaca pela abordagem estratégica e personalizada a cada caso. Nossa equipe é composta por profissionais altamente qualificados e dedicados, comprometidos em buscar as melhores soluções para nossos clientes.
          </p>
          <p>
            Acreditamos que a advocacia moderna exige não apenas conhecimento profundo da lei, mas também empatia, transparência e uma comunicação clara. Trabalhamos incansavelmente para proteger os interesses de nossos clientes, sejam eles indivíduos ou empresas, garantindo um suporte jurídico de alta qualidade e confiança.
          </p>
          <p>
            Nossa trajetória é marcada por sucessos e pela construção de relacionamentos duradouros, baseados na ética e na busca incessante pela justiça.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl shadow-neutral-900/30 aspect-video"
        >
          <img
            src={IMAGES[1].url}
            alt={IMAGES[1].alt}
            className="w-full h-full object-cover opacity-80 transform hover:scale-105 transition-transform duration-500 ease-in-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Componente para Áreas de Atuação
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    className="bg-neutral-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center space-y-4 hover:shadow-xl hover:shadow-neutral-900/20 transition-all duration-300 ease-out transform hover:-translate-y-1 group"
  >
    <div className="p-4 rounded-full bg-neutral-700 text-neutral-100 shadow-lg group-hover:scale-110 transition-transform duration-300">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="text-2xl font-semibold tracking-tight text-neutral-100 group-hover:text-neutral-50 transition-colors">
      {title}
    </h3>
    <p className="text-neutral-300 font-light text-base">{description}</p>
  </motion.div>
);

const ServicesSection: React.FC = () => (
  <section id="áreas-de-atuação" className="py-20 bg-neutral-950 text-neutral-100">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold tracking-tight text-center mb-16 text-neutral-100"
      >
        Nossas Áreas de Atuação
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={Briefcase}
          title="Direito Empresarial"
          description="Assessoria jurídica completa para empresas, desde a constituição até a resolução de litígios e contratos."
          delay={0}
        />
        <ServiceCard
          icon={Scale}
          title="Direito Cível"
          description="Representação em disputas contratuais, responsabilidade civil, direitos do consumidor e questões de família."
          delay={0.1}
        />
        <ServiceCard
          icon={User}
          title="Direito Trabalhista"
          description="Defesa de direitos de empregados e empregadores, consultoria e representação em processos trabalhistas."
          delay={0.2}
        />
        <ServiceCard
          icon={Mail}
          title="Direito Contratual"
          description="Elaboração e revisão de contratos, garantindo segurança jurídica e protegendo os interesses de nossos clientes."
          delay={0.3}
        />
        <ServiceCard
          icon={Phone}
          title="Direito Digital"
          description="Orientação em questões de privacidade de dados, e-commerce, crimes cibernéticos e propriedade intelectual digital."
          delay={0.4}
        />
        <ServiceCard
          icon={MapPin}
          title="Direito Imobiliário"
          description="Assessoria em compra e venda de imóveis, locação, regularização fundiária e questões condominiais."
          delay={0.5}
        />
      </div>
    </div>
  </section>
);

// Componente para a Seção Nossa Equipe
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
  delay: number;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, image, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    className="bg-neutral-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl hover:shadow-neutral-900/20 transition-all duration-300 ease-out transform hover:scale-[1.02]"
  >
    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-neutral-600 shadow-lg">
      <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <h3 className="text-2xl font-semibold tracking-tight text-neutral-100 mb-1">{name}</h3>
    <p className="text-neutral-300 text-base font-light mb-3">{role}</p>
    <p className="text-neutral-400 font-extralight text-sm">{description}</p>
  </motion.div>
);

const TeamSection: React.FC = () => (
  <section id="equipe" className="py-20 bg-neutral-900 text-neutral-100">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold tracking-tight text-center mb-16 text-neutral-100"
      >
        Nossa Equipe
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TeamMemberCard
          name="Dr. Lucas Woloczyn"
          role="Sócio Fundador | Direito Empresarial"
          image={IMAGES[2].url}
          description="Especialista em fusões e aquisições, contratos e litígios comerciais. Com mais de 15 anos de experiência."
          delay={0}
        />
        <TeamMemberCard
          name="Dra. Sofia Schmidt"
          role="Sócio Fundadora | Direito Cível e Família"
          image={IMAGES[3].url}
          description="Expert em direito de família, sucessões e responsabilidade civil, com foco em soluções humanizadas."
          delay={0.1}
        />
        <TeamMemberCard
          name="Dr. Gabriel Silva"
          role="Advogado Associado | Direito Trabalhista"
          image={IMAGES[4].url}
          description="Atua na defesa de trabalhadores e empresas, com vasta experiência em negociações e processos judiciais."
          delay={0.2}
        />
      </div>
    </div>
  </section>
);

// Componente para Depoimentos
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    className="bg-neutral-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 space-y-6 shadow-xl hover:shadow-2xl hover:shadow-neutral-900/20 transition-all duration-300 ease-out transform hover:scale-[1.02]"
  >
    <Quote className="h-10 w-10 text-neutral-400 opacity-70 mb-4" />
    <p className="text-neutral-200 text-lg italic font-light leading-relaxed">"{quote}"</p>
    <div>
      <p className="text-neutral-100 font-semibold text-xl">{name}</p>
      <p className="text-neutral-300 text-sm font-light">{title}</p>
    </div>
  </motion.div>
);

const TestimonialsSection: React.FC = () => (
  <section id="depoimentos" className="py-20 bg-neutral-950 text-neutral-100">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold tracking-tight text-center mb-16 text-neutral-100"
      >
        O Que Nossos Clientes Dizem
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          quote="A equipe Woloczyn & Schmidt superou minhas expectativas. Profissionais competentes e atenciosos, resolveram meu caso com agilidade e excelência."
          name="Ana Paula Santos"
          title="Empresária"
          delay={0}
        />
        <TestimonialCard
          quote="Desde o primeiro contato, senti total confiança. A Dra. Sofia Schmidt demonstrou um profundo conhecimento e uma dedicação ímpar. Recomendo!"
          name="Carlos Eduardo Lima"
          title="Cliente Individual"
          delay={0.1}
        />
        <TestimonialCard
          quote="O Dr. Lucas Woloczyn nos deu todo o suporte necessário para a reestruturação da nossa empresa. Serviço impecável e resultados concretos."
          name="Mariana Costa"
          title="CEO, Tech Solutions"
          delay={0.2}
        />
      </div>
    </div>
  </section>
);

// Componente para Contato
const ContactSection: React.FC = () => (
  <section id="contato" className="py-20 bg-neutral-900 text-neutral-100">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold tracking-tight text-center mb-16 text-neutral-100"
      >
        Entre em Contato
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 bg-neutral-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-xl shadow-neutral-900/20"
        >
          <h3 className="text-3xl font-semibold tracking-tight text-neutral-100 mb-4">Informações de Contato</h3>
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-neutral-400" />
            <a href="mailto:contato@woloczynschmidt.com" className="text-lg text-neutral-300 hover:text-neutral-100 transition-colors font-light">
              contato@woloczynschmidt.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-neutral-400" />
            <a href="tel:+5511987654321" className="text-lg text-neutral-300 hover:text-neutral-100 transition-colors font-light">
              +55 (11) 98765-4321
            </a>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-neutral-400 flex-shrink-0 mt-1" />
            <p className="text-lg text-neutral-300 font-light">
              Av. Paulista, 1000 - 15º Andar <br />
              Bela Vista, São Paulo - SP, 01310-100
            </p>
          </div>
          <div className="flex space-x-6 mt-6">
            <a href="#" aria-label="Facebook" className="text-neutral-500 hover:text-neutral-300 transition-colors">
              <Facebook className="h-7 w-7" />
            </a>
            <a href="#" aria-label="Instagram" className="text-neutral-500 hover:text-neutral-300 transition-colors">
              <Instagram className="h-7 w-7" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-neutral-500 hover:text-neutral-300 transition-colors">
              <Linkedin className="h-7 w-7" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-neutral-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-xl shadow-neutral-900/20"
        >
          <h3 className="text-3xl font-semibold tracking-tight text-neutral-100 mb-6">Envie uma Mensagem</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-neutral-300 text-sm font-light mb-2">Nome Completo</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-neutral-300 text-sm font-light mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all"
                placeholder="seu.email@exemplo.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-neutral-300 text-sm font-light mb-2">Mensagem</label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all"
                placeholder="Sua mensagem..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-neutral-700 text-neutral-100 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out transform hover:bg-neutral-600"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(163, 163, 163, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensagem
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

// Componente para o Rodapé
const Footer: React.FC = () => (
  <footer className="bg-neutral-950 border-t border-white/5 py-10 text-neutral-500 text-sm font-light">
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center mb-4">
        <Scale className="h-6 w-6 text-neutral-400 mr-2" />
        <p className="text-lg font-semibold text-neutral-100">Woloczyn & Schmidt Advogados</p>
      </div>
      <p className="mb-2">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      <p>Desenvolvido com paixão por AllesIA</p>
    </div>
  </footer>
);

// Componente Principal
export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}