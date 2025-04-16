import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

export default function GreenThemedPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayedLetters, setDisplayedLetters] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const name = "Thomas Dupont";
  
  useEffect(() => {
    // Animation du nom lettre par lettre
    const letters = name.split('');
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      if (currentIndex < letters.length) {
        setDisplayedLetters(prev => [...prev, letters[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setShowImage(true);
          setTimeout(() => {
            setAnimationComplete(true);
          }, 500);
        }, 300);
      }
    }, 100);
    
    // Détection de la section active lors du défilement
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [name]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden font-sans bg-green-50">
      {/* Arrière-plan avec dégradé vert */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-800 via-green-900 to-emerald-900 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,252,231,0.1)_0,transparent_70%)]"></div>
      </div>
      
      {/* Header avec navigation */}
      <header className="fixed top-0 left-0 right-0 bg-green-900 bg-opacity-90 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-20">
          <div className="flex items-center">
            <div onClick={() => scrollToSection('home')} className="cursor-pointer">
              {/* Logo ou nom */}
              <span className="text-xl font-bold text-white">TD<span className="text-green-300">.</span></span>
            </div>
          </div>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              active={activeSection === 'home'} 
              onClick={() => scrollToSection('home')}
            >
              Accueil
            </NavLink>
            <NavLink 
              active={activeSection === 'about'} 
              onClick={() => scrollToSection('about')}
            >
              À propos
            </NavLink>
            <NavLink 
              active={activeSection === 'projects'} 
              onClick={() => scrollToSection('projects')}
            >
              Projets
            </NavLink>
            <NavLink 
              active={activeSection === 'skills'} 
              onClick={() => scrollToSection('skills')}
            >
              Compétences
            </NavLink>
            <NavLink 
              active={activeSection === 'contact'} 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </NavLink>
          </nav>
          
          {/* Bouton menu mobile */}
          <button 
            className="md:hidden text-white hover:text-green-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-900 bg-opacity-95 backdrop-blur-md shadow-lg">
            <div className="container mx-auto px-4 py-2 flex flex-col">
              <MobileNavLink 
                active={activeSection === 'home'} 
                onClick={() => scrollToSection('home')}
              >
                Accueil
              </MobileNavLink>
              <MobileNavLink 
                active={activeSection === 'about'} 
                onClick={() => scrollToSection('about')}
              >
                À propos
              </MobileNavLink>
              <MobileNavLink 
                active={activeSection === 'projects'} 
                onClick={() => scrollToSection('projects')}
              >
                Projets
              </MobileNavLink>
              <MobileNavLink 
                active={activeSection === 'skills'} 
                onClick={() => scrollToSection('skills')}
              >
                Compétences
              </MobileNavLink>
              <MobileNavLink 
                active={activeSection === 'contact'} 
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* Section d'accueil avec animation du nom et image */}
        <section id="home" className="flex flex-col items-center justify-center min-h-screen px-4 py-20 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animation du nom lettre par lettre */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200">
              <div className="inline-flex flex-wrap justify-center">
                {displayedLetters.map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block"
                    style={{
                      marginRight: letter === ' ' ? '0.5rem' : '0.05rem'
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </h1>
            
            {/* Image qui apparaît une fois le nom affiché */}
            <div className={`mb-8 transition-all duration-500 ${showImage ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-green-300 border-opacity-60 shadow-2xl">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Texte et boutons qui apparaissent après */}
            <p className={`text-lg md:text-xl text-green-100 mb-8 transition-opacity duration-1000 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
              Développeur Web & Designer d'Expériences Numériques
            </p>
            
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-300 ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-green-500 text-white hover:bg-green-600 shadow-lg"
              >
                Découvrir mes projets <ArrowRight size={20} className="ml-2" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-transparent text-white hover:bg-white hover:bg-opacity-10 border border-green-300 border-opacity-50"
              >
                Me contacter
              </button>
            </div>
          </div>
          
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${animationComplete ? 'opacity-70' : 'opacity-0'}`}>
            <button onClick={() => scrollToSection('about')} className="flex flex-col items-center text-green-300 hover:text-green-200 transition-colors">
              <span className="text-sm mb-2">En savoir plus</span>
              <ChevronDown size={20} className="animate-bounce" />
            </button>
          </div>
        </section>
        
        {/* Section À propos */}
        <section id="about" className="py-20 px-4 bg-green-50 bg-opacity-10 backdrop-blur-lg">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-12 text-center">À propos de moi</h2>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img src="/api/placeholder/400/400" alt="Photo professionnelle" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-white mb-4 leading-relaxed">
                    Je suis un développeur web créatif avec plus de 5 ans d'expérience dans la conception et le développement d'applications web modernes. Ma passion est de créer des expériences numériques à la fois fonctionnelles et esthétiques.
                  </p>
                  <p className="text-white mb-8 leading-relaxed">
                    Spécialisé en React, JavaScript, et UI/UX design, je m'efforce toujours de rester à jour avec les dernières technologies et tendances du développement web.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-green-600 hover:bg-green-700 text-white">
                      <Download size={18} className="mr-2" /> Télécharger mon CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Projets */}
        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-12 text-center">Mes projets récents</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="Application E-commerce"
                description="Plateforme de vente en ligne avec panier d'achat et paiement sécurisé"
                tags={["React", "Node.js", "MongoDB"]}
              />
              <ProjectCard 
                title="Dashboard Analytics"
                description="Interface d'analyse de données avec visualisations interactives"
                tags={["React", "D3.js", "Firebase"]}
              />
              <ProjectCard 
                title="Portfolio Artiste"
                description="Galerie d'art responsive avec effets de transitions fluides"
                tags={["React", "Tailwind CSS", "Netlify"]}
              />
            </div>
          </div>
        </section>
        
        {/* Section Compétences */}
        <section id="skills" className="py-20 px-4 bg-green-50 bg-opacity-10 backdrop-blur-lg">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-12 text-center">Mes compétences</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SkillCategory 
                title="Développement Frontend" 
                skills={[
                  { name: "React", level: 90 },
                  { name: "JavaScript", level: 85 },
                  { name: "TypeScript", level: 75 },
                  { name: "HTML/CSS", level: 95 },
                  { name: "Tailwind CSS", level: 80 }
                ]} 
              />
              
              <SkillCategory 
                title="Développement Backend" 
                skills={[
                  { name: "Node.js", level: 80 },
                  { name: "Express", level: 75 },
                  { name: "MongoDB", level: 70 },
                  { name: "GraphQL", level: 65 },
                  { name: "Firebase", level: 70 }
                ]} 
              />
            </div>
          </div>
        </section>
        
        {/* Section Contact */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-12 text-center">Me contacter</h2>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-semibold text-white mb-4">Mes coordonnées</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail size={20} className="text-green-300 mt-1" />
                      <div>
                        <p className="text-white">email@exemple.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-6">
                      <SocialButton icon={<Github size={20} />} href="#" />
                      <SocialButton icon={<Linkedin size={20} />} href="#" />
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-white mb-4">Envoyez-moi un message</h3>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-green-200 mb-1">Nom</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 bg-white bg-opacity-10 border border-green-300 border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-green-200 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 bg-white bg-opacity-10 border border-green-300 border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                          placeholder="Votre email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-green-200 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 bg-white bg-opacity-10 border border-green-300 border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                        placeholder="Votre message"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button 
                        type="submit" 
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        Envoyer le message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 bg-opacity-95 text-white py-12 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold flex items-center">
                Thomas Dupont<span className="text-green-300 ml-1">.</span>
              </h3>
              <p className="text-green-200 mt-2">Développeur Web & Designer UI/UX</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-4 mb-4">
                <SocialLink icon={<Github size={20} />} href="#" />
                <SocialLink icon={<Linkedin size={20} />} href="#" />
                <SocialLink icon={<Mail size={20} />} href="mailto:email@exemple.com" />
              </div>
              <button className="text-green-300 hover:text-white transition-colors flex items-center" onClick={() => scrollToSection('home')}>
                Retour en haut
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-green-800 text-center text-green-300">
            <p>&copy; {new Date().getFullYear()} Thomas Dupont. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Composants réutilisables
function NavLink({ active, onClick, children }) {
  return (
    <button 
      onClick={onClick}
      className={`font-medium transition-colors ${
        active 
          ? 'text-green-300' 
          : 'text-white hover:text-green-200'
      }`}
    >
      {children}
    </button>
  );
}

function MobileNavLink({ active, onClick, children }) {
  return (
    <button 
      onClick={onClick}
      className={`py-3 px-4 border-b border-green-800 transition-colors text-left ${
        active 
          ? 'text-green-300 font-medium' 
          : 'text-white hover:text-green-200'
      }`}
    >
      {children}
    </button>
  );
}

function ProjectCard({ title, description, tags }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:translate-y-[-5px]">
      <div className="h-48 bg-green-800 bg-opacity-50"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-green-100 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-green-800 bg-opacity-40 text-green-200 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-green-100">{skill.name}</span>
              <span className="text-green-300">{skill.level}%</span>
            </div>
            <div className="h-2 bg-green-900 rounded-full">
              <div 
                className="h-full bg-green-400 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialLink({ icon, href }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 flex items-center justify-center rounded-full bg-green-800 hover:bg-green-700 transition-colors"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function SocialButton({ icon, href }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 flex items-center justify-center rounded-full bg-green-800 hover:bg-green-700 text-white transition-colors"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}