import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Drop, Trophy } from '@phosphor-icons/react';

const features = [
  {
    icon: Trophy,
    title: "Unrivaled Durability",
    text: "Engineered to withstand over 50,000 hours of high-impact usage, our turf maintains its structural integrity and aesthetic appeal year-round."
  },
  {
    icon: Drop,
    title: "HydroFlow Technology",
    text: "Our proprietary drainage sub-base ensures 100% water permeability, eliminating puddles and ensuring playability even during monsoon seasons."
  },
  {
    icon: Leaf,
    title: "Bio-Mimicry Aesthetic",
    text: "Using 5-tone color blending and varied blade textures, we create surfaces indistinguishable from natural grass at a microscopic level."
  }
];

const WhyUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax text scrolling up while image stays pinned or moves slower
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      
      // Reveal cards
      gsap.from(".feature-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="why-us" className="relative py-32 bg-charcoal border-t border-white/5 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img 
          ref={imageRef}
          src="https://picsum.photos/seed/grass/1000/1000" 
          alt="Macro Grass Texture" 
          className="w-full h-[120%] object-cover" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Header Section */}
          <div>
            <span className="text-emerald text-sm tracking-[0.2em] uppercase font-bold mb-4 block">The Lawn Standard</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-medium mb-8 leading-tight">
              Where Science <br/> Meets <span className="italic text-gold">Serenity</span>.
            </h2>
            <p className="text-silver/60 text-lg leading-relaxed max-w-md mb-12">
              We don't just lay turf; we architect landscapes. Our laboratory-tested surfaces bridge the gap between high-performance athletic requirements and visual luxury.
            </p>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card group flex gap-6 p-6 rounded-sm bg-white/5 border border-white/5 backdrop-blur-sm hover:border-gold/50 transition-colors duration-500">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-emerald/30 flex items-center justify-center text-emerald group-hover:bg-emerald group-hover:text-charcoal transition-all duration-300">
                    <feature.icon size={24} weight="light" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                  <p className="text-silver/60 text-sm leading-relaxed font-light">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;