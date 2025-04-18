import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import SocialButton from '../ui/SocialButton';

export default function ContactSection() {
  return (
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
  );
}