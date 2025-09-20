import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GlyphLink } from '../components/GlyphLink';

const HomePage: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [relativeMouse, setRelativeMouse] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const interactiveAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);

    const handleMouseMove = (event: MouseEvent) => {
      setCoords({ x: event.clientX, y: event.clientY });
      if (interactiveAreaRef.current) {
        const rect = interactiveAreaRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        setRelativeMouse({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateTransform = (depth: number) => {
    if (typeof window === 'undefined') return {};
    const x = (coords.x - window.innerWidth / 2) * depth;
    const y = (coords.y - window.innerHeight / 2) * depth;
    return {
      transform: `translate3d(${x}px, ${y}px, 0)`,
      transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
    };
  };

  const title = "PRINCE JONA";
  const orbs = [
    { id: 'listen', text: 'Listen', x: -160, y: 0, size: 90, color: 'emerald', href: '#' },
    { id: 'watch', text: 'Watch', x: 0, y: 20, size: 90, color: 'gold', href: '#' },
    { id: 'work', text: 'Work with Me', x: 160, y: 0, size: 110, color: 'gray', href: '#' },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-surface-bg perspective-1000">
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              ...calculateTransform(Math.random() * 0.03 + 0.01),
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 flex"
          style={{...calculateTransform(0.05)}}
        >
          {title.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block"
              style={isMounted ? {
                '--start-x': `${(Math.random() - 0.5) * 500}px`,
                '--start-y': `${(Math.random() - 0.5) * 500}px`,
                '--start-rotate': `${(Math.random() - 0.5) * 720}deg`,
                animation: `assemble 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards`,
                animationDelay: `${0.5 + index * 0.05}s`,
                opacity: 0,
              } as React.CSSProperties : { opacity: 0 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <div style={{...calculateTransform(0.04)}}>
            <p 
              className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
              style={isMounted ? {
                  animation: `fadeIn 1s ease-out 2s forwards`,
                  opacity: 0,
              }: {opacity: 0}}
            >
              Weaving narratives through sound, sight, and symbol.
            </p>
        </div>
        
        <div 
          ref={interactiveAreaRef}
          className="interactive-nebula mt-16 w-full max-w-2xl h-64"
          style={{
            ...calculateTransform(0.03),
            ...(isMounted ? {
                animation: `fadeIn 1s ease-out 2.5s forwards`,
                opacity: 0,
            } : {opacity: 0})
          }}
        >
          {orbs.map(orb => {
            const dx = orb.x - relativeMouse.x;
            const dy = orb.y - relativeMouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const repulsionRadius = 150;
            const hoverRadius = orb.size / 2;
            let tx = 0, ty = 0, scale = 1;

            if (distance < hoverRadius) {
              scale = 1.1;
            }

            if (distance < repulsionRadius) {
                const force = (repulsionRadius - distance) / repulsionRadius;
                const strength = 40;
                tx = (dx / distance) * force * strength;
                ty = (dy / distance) * force * strength;
            }
            
            return (
              <a
                key={orb.id}
                href={orb.href}
                className={`interactive-orb orb-glow-${orb.color}`}
                style={{
                  width: `${orb.size}px`,
                  height: `${orb.size}px`,
                  transform: `translate(calc(-50% + ${orb.x + tx}px), calc(-50% + ${orb.y + ty}px)) scale(${scale})`,
                }}
              >
                {orb.text}
              </a>
            );
          })}
        </div>
        
        <div 
          className="absolute -bottom-24"
          style={{
            ...calculateTransform(0.06),
            ...(isMounted ? {
                animation: `fadeIn 1s ease-out 3s forwards`,
                opacity: 0,
            }: {opacity: 0})
          }}
        >
            <div style={{ animation: 'pulse 3s infinite ease-in-out' }}>
              <GlyphLink isSurface={true} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;