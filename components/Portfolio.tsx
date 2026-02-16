import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from '@phosphor-icons/react';

const projects = [
  {
    id: 1,
    title: "Emirates Training Ground",
    category: "Professional Sports",
    location: "Dubai, UAE",
    image: "https://picsum.photos/seed/soccer/1600/900",
    description: "A FIFA-certified hybrid turf installation designed for high-intensity training in arid climates."
  },
  {
    id: 2,
    title: "The Sky Garden Cafe",
    category: "Hospitality",
    location: "New York, USA",
    image: "https://picsum.photos/seed/garden/1600/900",
    description: "Luxury synthetic grass integration for a high-traffic rooftop lounge with drainage technology."
  },
  {
    id: 3,
    title: "Silver Creek Golf Club",
    category: "Leisure",
    location: "Scottsdale, USA",
    image: "https://picsum.photos/seed/course/1600/900",
    description: "Precision putting greens and fairway landscaping utilizing drought-resistant turf blends."
  }
];

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project-panel");
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (triggerRef.current?.offsetWidth || 0),
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="bg-charcoal overflow-hidden">
      <div ref={triggerRef} className="w-[300%] h-screen flex flex-nowrap">
        
        {/* Intro Panel (Part of the flow or separate? Let's make it part of the slide logic for simplicity or keep first slide as Intro) */}
        {/* Actually, let's just map the projects directly */}
        
        {projects.map((project, index) => (
          <div key={project.id} className="project-panel w-screen h-screen flex-shrink-0 relative flex items-center justify-center px-6 md:px-24 border-r border-white/5 bg-charcoal">
            
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-40">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center">
              {/* Text Content */}
              <div className="order-2 md:order-1 space-y-8">
                <div className="flex items-center gap-4 text-gold/80 text-sm tracking-widest uppercase font-medium">
                  <span>0{index + 1}</span>
                  <span className="w-12 h-[1px] bg-gold"></span>
                  <span>{project.category}</span>
                </div>
                
                <h2 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight">
                  {project.title}
                </h2>
                
                <p className="text-silver/70 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                  {project.description}
                </p>

                <div className="pt-4">
                   <button className="group flex items-center gap-3 text-white hover:text-emerald transition-colors pb-2 border-b border-white/20 hover:border-emerald">
                      <span className="uppercase tracking-wider text-sm">View Case Study</span>
                      <ArrowUpRight size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                </div>
              </div>

              {/* Decorative / Detail Image */}
              <div className="order-1 md:order-2 hidden md:block relative h-[500px] w-full overflow-hidden rounded-sm border border-white/10 group">
                <div className="absolute inset-0 bg-emerald/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out" 
                />
              </div>
            </div>

            {/* Location Label */}
            <div className="absolute bottom-12 right-12 md:right-24 text-right">
              <p className="text-gold font-serif italic text-2xl">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;