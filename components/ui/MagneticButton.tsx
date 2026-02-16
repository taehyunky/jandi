import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'outline',
  className = '' 
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    setPosition({ x: x * 0.1, y: y * 0.1 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-8 py-4 text-sm uppercase tracking-widest font-medium transition-colors duration-300 rounded-sm overflow-hidden group";
  const variantStyles = variant === 'primary' 
    ? "bg-emerald text-white border border-emerald hover:bg-emerald-dark"
    : "border border-silver/30 text-silver hover:border-gold";

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
      
      {/* Fill Effect */}
      <div className={`absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 ${variant === 'outline' ? 'bg-emerald' : 'bg-charcoal'}`} />
    </motion.button>
  );
};

export default MagneticButton;