// src/pages/Home.jsx
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeContext.jsx"; 
import '../styles/Home.css';
import myPhoto from '../assets/myPhoto.jpg';


const Home = () => {
  const { siteMode } = useContext(ThemeContext); 
  const [particles, setParticles] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const nameAuthor = "Tharushi Kodithuwakku";

    useEffect(() => {
        // Create falling leaves
        const createLeaf = () => {
          const newLeaf = {
            id: Date.now() + Math.random(),
            x: Math.random() * 100,
            y: -10,
            size: Math.random() * 15 + 8,
            rotation: 0,
            speed: Math.random() * 2 + 1,
            drift: (Math.random() - 0.5) * 2,
          };
          
          setLeaves(prev => [...prev, newLeaf]);
        };
    
        const leafInterval = setInterval(createLeaf, 350);
    
        const animateLeaves = () => {
          setLeaves(prev => prev
            .map(leaf => {
              let newLeaf = { ...leaf };
              if (leaf.jumping) {
                const jumpDuration = 800;
                const elapsed = Date.now() - leaf.jumpStartTime;
                if (elapsed < jumpDuration) {
                  const progress = elapsed / jumpDuration;
                  const jumpHeight = Math.sin(progress * Math.PI) * 30;
                  newLeaf.jumpOffset = jumpHeight;
                  newLeaf.x = leaf.x + leaf.jumpDirection * progress;
                } else {
                  newLeaf.jumping = false;
                  newLeaf.jumpOffset = 0;
                  delete newLeaf.jumpStartTime;
                  delete newLeaf.jumpDirection;
                }
              }
              newLeaf.y = newLeaf.y + newLeaf.speed;
              if (!newLeaf.jumping) {
                newLeaf.x = newLeaf.x + newLeaf.drift * 0.1;
              }
              newLeaf.rotation = newLeaf.rotation + 2;
              return newLeaf;
            })
            .filter(leaf => leaf.y < window.innerHeight + 50)
          );
        };
    
        const animateDust = () => {
          setParticles(prev => prev
            .map(particle => ({
              ...particle,
              x: particle.x + particle.velocity.x,
              y: particle.y + particle.velocity.y,
              life: particle.life + 1,
              opacity: Math.max(0, particle.opacity * (1 - particle.life / particle.maxLife)),
              size: particle.size * (1 + particle.life / particle.maxLife * 0.5),
              velocity: {
                x: particle.velocity.x * 0.98,
                y: particle.velocity.y * 0.98 - 0.02,
              }
            }))
            .filter(particle => particle.life < particle.maxLife && particle.opacity > 0.01)
          );
        };
    
        const dustAnimationInterval = setInterval(animateDust, 16);
    
        const handleMouseMove = (e) => {
          const dustCount = 5;
          for (let i = 0; i < dustCount; i++) {
            const angle = (Math.PI * 2 * i) / dustCount;
            const radius = Math.random() * 25 + 5;
            const newParticle = {
              id: Date.now() + Math.random() + i,
              x: e.clientX + Math.cos(angle) * radius * Math.random(),
              y: e.clientY + Math.sin(angle) * radius * Math.random(),
              size: Math.random() * 4 + 1,
              opacity: Math.random() * 0.6 + 0.3,
              velocity: {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2
              },
              life: 0,
              maxLife: Math.random() * 60 + 40,
            };
            setParticles(prev => [...prev, newParticle]);
          }
    
          setParticles(prev => prev.filter(p => p.life < p.maxLife));
    
          setLeaves(prev => prev.map(leaf => {
            const leafCenterX = (leaf.x / 100) * window.innerWidth;
            const leafCenterY = leaf.y;
            const distance = Math.sqrt(
              Math.pow(e.clientX - leafCenterX, 2) + 
              Math.pow(e.clientY - leafCenterY, 2)
            );
            
            if (distance < 30 && !leaf.jumping) {
              return {
                ...leaf,
                jumping: true,
                jumpStartTime: Date.now(),
                jumpDirection: (Math.random() - 0.5) * 4,
              };
            }
            return leaf;
          }));
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        const animationInterval = setInterval(animateLeaves, 50);
    
        return () => {
          clearInterval(leafInterval);
          clearInterval(animationInterval);
          clearInterval(dustAnimationInterval);
          document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
  
    const MyName = 'Tharushi Kodithuwakku';
  
    return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-green-900/20 via-transparent to-transparent animate-pulse-slow"></div>

      {/* Leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute pointer-events-none z-10 transition-transform duration-100"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y - (leaf.jumpOffset || 0)}px`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            transform: `rotate(${leaf.rotation}deg) ${leaf.jumping ? 'scale(1.2)' : 'scale(1)'}`,
            background: leaf.jumping
              ? 'rgba(0, 200, 0, 0.7)'
              : 'rgba(0, 150, 0, 0.4)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            opacity: leaf.jumping ? 1 : 0.7,
            boxShadow: leaf.jumping ? '0 0 15px rgba(0, 255, 0, 0.5)' : 'none',
          }}
        />
      ))}

      {/* Dust particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute pointer-events-none z-20"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, 
              rgba(255, 255, 255, ${particle.opacity * 0.9}) 0%, 
              rgba(192, 192, 192, ${particle.opacity * 0.7}) 30%, 
              rgba(160, 160, 160, ${particle.opacity * 0.4}) 70%, 
              transparent 100%)`,
            borderRadius: '50%',
            filter: 'blur(0.5px)',
            boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, ${particle.opacity * 0.3})`,
            transform: `scale(${1 + Math.sin(particle.life * 0.1) * 0.2})`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
        <div className="mt-12 w-64 h-64 mx-auto overflow-hidden rounded-full shadow-xl relative animate-fade-in-up-delay-4 backdrop-filter backdrop-blur-md">
          <div className="absolute inset-0 border-4 border-transparent rounded-full"
              style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.25)',
              }}>
          </div>
          <img
              src={myPhoto}
              alt="Tharushi Kodithuwakku"
              className="w-full h-full object-cover"
          />
      </div>
      
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-green-600 animate-fade-in-up">
          {nameAuthor}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-silver animate-fade-in-up-delay-1">
          Where creativity meets technology.
        </h2>
        <p className="max-w-xl mx-auto mb-12 text-lg text-silver/80 animate-fade-in-up-delay-2">
          On a journey to become a skilled developer, combining academic learning and practical training.
        </p>

        {/* View My Work Button */}
        <div className="relative animate-fade-in-up-delay-3">
          <div
            className="absolute light-shine pointer-events-none rounded-full"
            style={{
              width: 'calc(100% + 30px)',
              height: 'calc(100% + 30px)',
              top: '-15px',
              left: '-15px',
              background:
                'radial-gradient(circle, rgba(0, 255, 0, 0.25) 0%, rgba(0, 255, 0, 0.12) 40%, rgba(255, 255, 255, 0.06) 60%, transparent 80%)',
              filter: 'blur(3px)',
              zIndex: -1,
            }}
          />
          <div
            className="absolute light-glow pointer-events-none rounded-full"
            style={{
              width: 'calc(100% + 60px)',
              height: 'calc(100% + 60px)',
              top: '-30px',
              left: '-30px',
              background:
                'radial-gradient(circle, rgba(0, 255, 0, 0.08) 0%, transparent 70%)',
              filter: 'blur(8px)',
              zIndex: -2,
            }}
          />
          <Link
            to="/projects"
            className="btn-view-work"
            style={{
              color: siteMode === "light" ? "#000" : "#fff", // ✅ text changes with theme
            }}
          >
            View My Work
          </Link>
          
        </div>

        

      </div>
    </div>
  );
};

export default Home;