import React from 'react';
import MagneticButton from './ui/MagneticButton';
import { EnvelopeSimple, InstagramLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-black pt-32 pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <p className="text-emerald text-sm tracking-widest uppercase mb-6">Ready to Transform Your Space?</p>
          <h2 className="font-serif text-5xl md:text-8xl text-white font-medium mb-12 tracking-tight">
            Let's Shape the <br/> <span className="text-stroke-1 text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/50" style={{WebkitTextStroke: '1px rgba(255,255,255,0.2)'}}>Ground Beneath</span>
          </h2>
          <MagneticButton variant="primary">
            Start Your Project
          </MagneticButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl text-white font-bold mb-4">THE LAWN.</h3>
            <p className="text-silver/50 text-sm max-w-xs leading-relaxed">
              Premium B2B turf installation services for the world's most demanding environments.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-silver/60 text-sm font-light">
              <li className="hover:text-emerald transition-colors cursor-pointer flex items-center gap-2">
                 <EnvelopeSimple size={16} /> hello@thelawn.global
              </li>
              <li>+1 (555) 012-3456</li>
              <li>1200 Highland Ave, <br/> Los Angeles, CA 90028</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-silver hover:bg-emerald hover:border-emerald hover:text-white transition-all duration-300">
                <InstagramLogo size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-silver hover:bg-emerald hover:border-emerald hover:text-white transition-all duration-300">
                <LinkedinLogo size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-silver hover:bg-emerald hover:border-emerald hover:text-white transition-all duration-300">
                <TwitterLogo size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-silver/20 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} The Lawn Global. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;