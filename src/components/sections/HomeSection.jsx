import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HomeSection({ scrollToSection }) {
  const [displayedLetters, setDisplayedLetters] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const name = "Abdelouafi  Oubenali";
  
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
    
    return () => {
      clearInterval(intervalId);
    };
  }, [name]);

  return (
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
              src="https://intranet.youcode.ma/storage/users/profile/thumbnail/1139-1727859974.JPG" 
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
  );
}