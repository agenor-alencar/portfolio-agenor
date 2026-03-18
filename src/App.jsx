import React from 'react';
import {
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Database,
  Server,
  Zap,
  ArrowRight,
  Coffee,
  BookOpen,
  Briefcase,
  Globe,
  Cpu,
  Layers,
  Container,
  Smartphone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Mail,
  MessageCircle
} from 'lucide-react';
import profileImage from './assets/profile.jpg';
import dashboardAdmin from './assets/Win/Dashboard_Admin.jpg';
import dashboardLojista from './assets/Win/Dashboard_Lojista.jpg';
import carrinhoCliente from './assets/Win/Carrinho_Cliente.jpg';
import produtosLojista from './assets/Win/Produtos_Lojista.jpg';
import menuCliente from './assets/Win/Menu_Cliente.jpg';

// --- Sub-componentes de Estilo ---
const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-16">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
        {children}
      </span>
    </h2>
    {subtitle && <p className="text-gray-400 text-lg font-light">{subtitle}</p>}
  </div>
);

// --- Navigation Menu ---
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Agenor
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium text-sm uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-purple-500/20 bg-gray-950/95 backdrop-blur-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium uppercase tracking-wide py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section ---
const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />
    
    <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center">
      {/* Profile Photo - Centralizado no Rosto */}
      <div className="relative mb-16 group">
        <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full border-4 border-gray-700 overflow-hidden shadow-2xl">
          <img 
            src={profileImage}
            alt="Agenor - Software Engineer"
            className="w-full h-full object-cover object-center image-rendering-auto"
          />
        </div>
      </div>

      <div className="animate-fade-in">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-gray-400 mb-4 tracking-tighter">
          Agenor Alencar
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-purple-400 mb-6 tracking-widest uppercase">
          Software Engineer & Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Especialista em ecossistemas Java e Spring Boot. Transformo gargalos logísticos em soluções de alta disponibilidade e escala.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a href="https://github.com/agenor-alencar" target="_blank" className="flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105">
          <Github size={20} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/agenor-alencar-2410b9314/" target="_blank" className="flex items-center gap-2 px-8 py-3 bg-gray-900 border border-gray-700 text-white font-bold rounded-full hover:border-purple-500 transition-all transform hover:scale-105">
          <Linkedin size={20} /> LinkedIn
        </a>
      </div>
    </div>
  </section>
);

// --- About Section ---
const AboutSection = () => (
  <section id="sobre" className="py-24 px-6 max-w-6xl mx-auto">
    <SectionTitle subtitle="Conheça mais sobre minha trajetória e paixão por tecnologia">
      Sobre Mim
    </SectionTitle>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed">
          Sou um desenvolvedor fullstack apaixonado por resolver problemas complexos através da tecnologia. Com Sólida base técnica e experiência prática com o ecossistema <strong>Java, Spring Boot e React</strong>, especializo-me em criar sistemas que não apenas funcionam, mas que escalam e performam sob pressão.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Minha jornada começou com a curiosidade em entender como as coisas funcionam. Hoje, transformo essa curiosidade em soluções de software que impactam negócios reais, com foco em arquitetura robusta, clean code e experiência de usuário excepcional.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Como fundador do <strong>Win Marketplace</strong>, O WIN não nasceu em um escritório, mas no chão de loja. Ao enfrentar diariamente os desafios logísticos do varejo, decidi construir a tecnologia que faltava para integrar vendas e entregas em tempo real.
        </p>

        <div className="pt-4 flex gap-4">
          <a href="https://github.com/agenor-alencar" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all transform hover:scale-105">
            <Github size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/agenor-alencar/" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all transform hover:scale-105">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="backdrop-blur-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-all">
          <div className="text-4xl font-bold text-purple-400 mb-2">2+</div>
          <p className="text-gray-300">Anos de Experiência</p>
          <p className="text-gray-500 text-sm mt-2">Em desenvolvimento fullstack</p>
        </div>

        <div className="backdrop-blur-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-all">
          <div className="text-4xl font-bold text-blue-400 mb-2">1</div>
          <p className="text-gray-300">Software em Produção</p>
          <p className="text-gray-500 text-sm mt-2">Win Marketplace</p>
        </div>

        <div className="backdrop-blur-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6 hover:border-green-500/50 transition-all">
          <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
          <p className="text-gray-300">Paixão por Aprender</p>
          <p className="text-gray-500 text-sm mt-2">Sempre em busca do melhor</p>
        </div>

        <div className="backdrop-blur-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6 hover:border-orange-500/50 transition-all">
          <div className="text-4xl font-bold text-orange-400 mb-2">6</div>
          <p className="text-gray-300">Tecnologias Core</p>
          <p className="text-gray-500 text-sm mt-2">Java, Spring, React e mais</p>
        </div>
      </div>
    </div>
  </section>
);

// --- WIN Project (O Carro-Chefe) ---
const WINProject = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    { image: dashboardAdmin, title: "Dashboard Admin", desc: "Visão geral e controle" },
    { image: dashboardLojista, title: "Dashboard Lojista", desc: "Panel operacional" },
    { image: produtosLojista, title: "Gestão de Produtos", desc: "Controle de inventário" },
    { image: carrinhoCliente, title: "Carrinho de Compras", desc: "Experiência de checkout" },
    { image: menuCliente, title: "Interface Cliente", desc: "Navegação intuitiva" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Ecossistema autoral de alta complexidade para logística e vendas.">
        Projeto Win Marketplace
      </SectionTitle>

      <div className="grid lg:grid-cols-2 gap-12 items-start backdrop-blur-sm bg-gray-900/30 border border-purple-500/20 rounded-3xl p-8 md:p-12 hover:border-purple-500/40 transition-all">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold rounded-full uppercase">Em Produção</span>
            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold rounded-full uppercase">Arquitetura Multi-tenant</span>
          </div>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Idealizado para resolver falhas de inventário no setor varejista, o Win integra logística 24h com um motor de sincronização em tempo real.
          </p>
          
          <ul className="space-y-3 mb-8 text-gray-400">
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 size={18} className="text-purple-500 shrink-0" />
              Otimização de performance: Resolvido gargalo de 100% de CPU via tuning de PostgreSQL. 
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 size={18} className="text-purple-500 shrink-0" />
              Integração Last-mile: Automação logística via API Uber Flash. 
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 size={18} className="text-purple-500 shrink-0" />
              Sincronização ERP: Implementação de Pattern Factory para consistência de dados. 
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 mb-8">
            {['Java 17', 'Spring Boot', 'PostgreSQL', 'DigitalOcean', 'React', 'Docker'].map(t => (
              <span key={t} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700">{t}</span>
            ))}
          </div>

          <a href="https://winmarketplace.com.br/" target="_blank" className="inline-flex items-center gap-2 text-purple-400 font-bold hover:text-purple-300 transition-colors">
            Acessar Plataforma <ExternalLink size={18} />
          </a>
        </div>
        
        {/* Carousel */}
        <div className="relative group order-first lg:order-last">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 backdrop-blur-lg bg-gray-900/30 aspect-video">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent pointer-events-none" />

            {/* Image Info */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <h3 className="text-xl font-bold text-white mb-2">{slides[currentSlide].title}</h3>
              <p className="text-gray-200 text-sm">{slides[currentSlide].desc}</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-purple-600/80 hover:bg-purple-500 text-white transition-all transform hover:scale-110 backdrop-blur-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-purple-600/80 hover:bg-purple-500 text-white transition-all transform hover:scale-110 backdrop-blur-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'bg-purple-500 w-8 h-2'
                    : 'bg-gray-600 hover:bg-gray-500 w-2 h-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-3 mt-8 overflow-x-auto pb-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 relative overflow-hidden rounded-lg border-2 transition-all ${
                  index === currentSlide
                    ? 'border-purple-500 ring-2 ring-purple-500/50'
                    : 'border-gray-700 hover:border-purple-500/50'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-20 h-20 object-cover"
                />
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-purple-500/20 pointer-events-none" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



// --- Outros Projetos (Ecograna) ---
const ProjectsSection = () => {
  const otherProjects = [
    {
      title: "Ecograna",
      desc: "Colaboração no desenvolvimento do frontend para sistema de gestão sustentável via LabTec. ",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://app.ecograna.com.br/login"
    },
    {
      title: "Genesis Display Hub",
      desc: "Sistema completo de gerenciamento de painéis de display com backend Spring Boot e frontend React.",
      tech: ["Java", "Spring Boot", "GitHub"],
      link: "https://github.com/agenor-alencar/Genesis-software"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Outras colaborações e projetos relevantes.">Experiência Complementar</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {otherProjects.map(p => (
          <div key={p.title} className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-6">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map(t => <span key={t} className="text-[10px] uppercase tracking-widest bg-gray-800 px-2 py-1 rounded text-gray-400">{t}</span>)}
            </div>
            <a href={p.link} target="_blank" className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-white">
              Ver Detalhes <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Tech Stack ---
const TechStack = () => {
  const stack = [
    { name: "Backend", items: "Java 17+, Spring Boot (Security, JPA, JWT), Schedulers", icon: <Server className="text-orange-400" /> },
    { name: "Frontend", items: "React.js, TypeScript, Tailwind CSS, Vite", icon: <Code2 className="text-blue-400" /> },
    { name: "Database", items: "PostgreSQL (Tuning, Query Optimization, I/O)", icon: <Database className="text-purple-400" /> },
    { name: "Infrastructure", items: "DigitalOcean (Droplets, Spaces), Docker, Nginx", icon: <Container className="text-cyan-400" /> },
    { name: "Engineering", items: "Multi-tenant, Factory Pattern, Product Discovery", icon: <Layers className="text-green-400" /> }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="Minha caixa de ferramentas técnica consolidada.">Competências</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stack.map(s => (
            <div key={s.name} className="flex gap-4 p-4">
              <div className="mt-1">{s.icon}</div>
              <div>
                <h4 className="font-bold text-gray-200 mb-1">{s.name}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{s.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Carreira e Educação ---
const CareerSection = () => (
  <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
    <SectionTitle>Trajetória</SectionTitle>
    <div className="space-y-12">
      <div className="relative pl-8 border-l border-purple-500/30">
        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-purple-500" />
        <h3 className="text-xl font-bold">Analista de Sistemas & Fundador | Win Marketplace </h3>
        <p className="text-purple-400 text-sm mb-2">2024 - Presente</p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Atuo como líder técnico e arquiteto da solução, cuidando desde o Product Discovery até a infraestrutura cloud na DigitalOcean.
        </p>
      </div>

      <div className="relative pl-8 border-l border-blue-500/30">
        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-500" />
        <h3 className="text-xl font-bold">Analista de Negócios | JC Ferragens</h3>
        <p className="text-blue-400 text-sm mb-2">2022 - Presente</p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Ponte estratégica entre dores operacionais e soluções de TI. Validação de requisitos práticos para o software Win.
        </p>
      </div>

      <div className="relative pl-8 border-l border-gray-700">
        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gray-700" />
        <h3 className="text-xl font-bold text-gray-300 italic">Formação Acadêmica</h3>
        <p className="text-gray-500 text-sm mb-2">Conclusão: 06/2026</p>
        <p className="text-gray-400 text-sm">Graduação em Análise e Desenvolvimento de Sistemas - UniProjeção.</p>
      </div>
    </div>
  </section>
);

// --- Contact Section ---
const ContactSection = () => (
  <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
    <SectionTitle subtitle="Vamos conversar sobre o próximo projeto!">
      Entre em Contato
    </SectionTitle>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Email */}
      <div className="backdrop-blur-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/60 transition-all group">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
            <Mail size={32} className="text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">E-mail</h3>
        </div>
        <p className="text-gray-400 mb-6">Envie um email para conversar sobre oportunidades</p>
        <a 
          href="mailto:agenoralencaar@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all transform hover:scale-105"
        >
          <Mail size={20} />
          agenoralencaar@gmail.com
        </a>
      </div>

      {/* WhatsApp */}
      <div className="backdrop-blur-lg bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-2xl p-8 hover:border-green-500/60 transition-all group">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
            <MessageCircle size={32} className="text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">WhatsApp</h3>
        </div>
        <p className="text-gray-400 mb-6">Envie uma mensagem para conversa rápida</p>
        <a 
          href="https://wa.me/5561995334141"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all transform hover:scale-105"
        >
          <MessageCircle size={20} />
          (61) 99533-4141
        </a>
      </div>

      {/* GitHub */}
      <div className="backdrop-blur-lg bg-gradient-to-br from-gray-500/10 to-gray-600/10 border border-gray-500/30 rounded-2xl p-8 hover:border-gray-500/60 transition-all group">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-gray-500/20 group-hover:bg-gray-500/30 transition-colors">
            <Github size={32} className="text-gray-300" />
          </div>
          <h3 className="text-2xl font-bold text-white">GitHub</h3>
        </div>
        <p className="text-gray-400 mb-6">Veja meus projetos no GitHub</p>
        <a 
          href="https://github.com/agenor-alencar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-all transform hover:scale-105"
        >
          <Github size={20} />
          github.com/agenor-alencar
        </a>
      </div>

      {/* LinkedIn */}
      <div className="backdrop-blur-lg bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/60 transition-all group">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
            <Linkedin size={32} className="text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">LinkedIn</h3>
        </div>
        <p className="text-gray-400 mb-6">Conecte-se comigo na rede profissional</p>
        <a 
          href="https://www.linkedin.com/in/agenor-alencar-2410b9314/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all transform hover:scale-105"
        >
          <Linkedin size={20} />
          Agenor Alencar
        </a>
      </div>
    </div>
  </section>
);

// --- App Principal ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-purple-500/30">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WINProject />
      <TechStack />
      <ProjectsSection />
      <CareerSection />
      <ContactSection />
      
      <footer className="py-12 border-t border-gray-900 text-center">
        <p className="text-gray-500 text-sm mb-4 italic">Foco atual: Engenharia de Software e Governança de TI (Preparação Cebraspe). </p>
        <div className="flex justify-center gap-6 text-gray-400">
          <a href="mailto:agenoralencaar@gmail.com" className="hover:text-white transition-colors">agenoralencaar@gmail.com</a>
          <span>|</span>
          <span>Brasília - DF</span>
        </div>
      </footer>
    </div>
  );
}