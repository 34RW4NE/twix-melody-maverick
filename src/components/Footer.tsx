
import React from 'react';
import { Music, Github, Twitter, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-twix-gold/20 flex items-center justify-center">
                <Music size={16} className="text-twix-gold" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Twix<span className="text-twix-gold">Bot</span>
              </span>
            </div>
            
            <p className="text-slate-400 mb-6 max-w-md">
              Twix Bot enhances your Discord server with a premium music experience. 
              Crystal-clear audio, intuitive controls, and powerful features make it the perfect 
              companion for your community.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-twix-gold/20 transition-colors">
                <MessageCircle size={18} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-twix-gold/20 transition-colors">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-twix-gold/20 transition-colors">
                <Github size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Features', 'Commands', 'Stats', 'FAQ', 'Pricing', 'Support'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-twix-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Cookies', 'License'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-slate-400 hover:text-twix-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Twix Bot. All rights reserved.
          </p>
          
          <p className="text-slate-500 text-sm flex items-center">
            Made with <Heart size={14} className="text-twix-gold mx-1" /> for Discord communities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
