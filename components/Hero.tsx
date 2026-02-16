import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from '@phosphor-icons/react';
import MagneticButton from './ui/MagneticButton';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image Zoom Out Effect
      gsap.fromTo(imageRef.current, 
        { scale: 1.3, filter: 'brightness(0.4)' },
        { 
          scale: 1, 
          filter: 'brightness(0.6)',
          duration: 2.5, 
          ease: "power2.out" 
        }
      );

      // Text Stagger In
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"
      })
      .from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5");

      // Scroll Parallax for Image
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src="https://picsum.photos/seed/golf/1920/1080" 
          alt="Pristine Green Field" 
          className="w-full h-full object-cover origin-center"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30 opacity-90" />
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 container mx-auto px-6 text-center">
        <p className="hero-line text-gold text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-6">
          Premium Turf Solutions
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-semibold text-white leading-none mb-8 tracking-tight">
          <div className="overflow-hidden"><span className="hero-line block">Engineering</span></div>
          <div className="overflow-hidden"><span className="hero-line block text-emerald-glow/90">Nature's</span></div>
          <div className="overflow-hidden"><span className="hero-line block">Perfection</span></div>
        </h1>
        
        <div className="hero-cta flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <MagneticButton>
            Request Consultation <ArrowRight weight="bold" />
          </MagneticButton>
          <p className="text-silver/60 text-xs md:text-sm max-w-xs text-center md:text-left leading-relaxed font-light hidden md:block border-l border-gold/30 pl-4">
            Specializing in FIFA-grade soccer fields <br/> and luxury hospitality landscapes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;