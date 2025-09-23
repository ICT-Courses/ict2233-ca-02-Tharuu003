import React, { useEffect, useState } from 'react';

// Navbar Component (Completely Frozen - NO animations)
const Navbar = () => {
  const MyName = 'Tharushi Kodithuwakku';

  return (
    <nav className="fixed w-full top-0 bg-black text-silver p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold font-serif text-green-600">
          {}
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="text-silver">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-silver">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-silver">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Home Component
const Home = () => {
  const [particles, setParticles] = useState([]);
  const [leaves, setLeaves] = useState([]);

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

    // Create leaves periodically
    const leafInterval = setInterval(createLeaf, 800);

    // Animate leaves with jump effect
    const animateLeaves = () => {
      setLeaves(prev => prev
        .map(leaf => {
          let newLeaf = { ...leaf };
          
          // Handle jumping animation
          if (leaf.jumping) {
            const jumpDuration = 800; // Jump lasts 800ms
            const elapsed = Date.now() - leaf.jumpStartTime;
            
            if (elapsed < jumpDuration) {
              // Create jump arc using sine wave
              const progress = elapsed / jumpDuration;
              const jumpHeight = Math.sin(progress * Math.PI) * 30; // 30px jump height
              newLeaf.jumpOffset = jumpHeight;
              newLeaf.x = leaf.x + leaf.jumpDirection * progress;
            } else {
              // Jump finished
              newLeaf.jumping = false;
              newLeaf.jumpOffset = 0;
              delete newLeaf.jumpStartTime;
              delete newLeaf.jumpDirection;
            }
          }
          
          // Continue normal falling motion
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

    // Animate dust particles
    const animateDust = () => {
      setParticles(prev => prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.velocity.x,
          y: particle.y + particle.velocity.y,
          life: particle.life + 1,
          opacity: Math.max(0, particle.opacity * (1 - particle.life / particle.maxLife)),
          size: particle.size * (1 + particle.life / particle.maxLife * 0.5), // Slight size increase
          velocity: {
            x: particle.velocity.x * 0.98, // Slow down over time
            y: particle.velocity.y * 0.98 - 0.02, // Add slight upward drift
          }
        }))
        .filter(particle => particle.life < particle.maxLife && particle.opacity > 0.01)
      );
    };

    const dustAnimationInterval = setInterval(animateDust, 16); // ~60fps

    // Handle mouse move for creative silver dust effect
    const handleMouseMove = (e) => {
      // Create a sophisticated dust cloud with varying sizes and opacities
      const dustCount = 5; // Number of particles per mouse move
      
      for (let i = 0; i < dustCount; i++) {
        const angle = (Math.PI * 2 * i) / dustCount; // Circular distribution
        const radius = Math.random() * 25 + 5; // Random distance from cursor
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
          life: 0, // Age of particle
          maxLife: Math.random() * 60 + 40, // Random lifespan
        };
        
        setParticles(prev => [...prev, newParticle]);
      }

      

      // Clean up old particles
      setParticles(prev => prev.filter(p => p.life < p.maxLife));

      // Check for leaf jumping (keep existing code)
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
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-radial from-green-900/20 via-transparent to-transparent animate-pulse-slow"></div>
      
      {/* Falling Leaves with Jump Effect */}
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

      {/* Professional Silver Dust Effect */}
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
            transform: `scale(${1 + Math.sin(particle.life * 0.1) * 0.2})`, // Subtle pulsing
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-green-600 animate-fade-in-up">
          {MyName}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-silver animate-fade-in-up-delay-1">
          Where creativity meets technology.
        </h2>
        <p className="max-w-xl mx-auto mb-12 text-lg text-silver/80 animate-fade-in-up-delay-2">
          On a journey to become a skilled developer, combining academic learning and practical training.
        </p>
        
        {/* View My Work Button with Shining Light Around */}
        <div className="relative">
          {/* Shining Light Around Button */}
          <div 
            className="absolute light-shine pointer-events-none rounded-full"
            style={{
              width: 'calc(100% + 30px)',
              height: 'calc(100% + 30px)',
              top: '-15px',
              left: '-15px',
              background: 'radial-gradient(circle, rgba(0, 255, 0, 0.25) 0%, rgba(0, 255, 0, 0.12) 40%, rgba(255, 255, 255, 0.06) 60%, transparent 80%)',
              filter: 'blur(3px)',
              zIndex: -1,
            }}
          />
          
          {/* Additional Glow Effect */}
          <div 
            className="absolute light-glow pointer-events-none rounded-full"
            style={{
              width: 'calc(100% + 60px)',
              height: 'calc(100% + 60px)',
              top: '-30px',
              left: '-30px',
              background: 'radial-gradient(circle, rgba(0, 255, 0, 0.08) 0%, transparent 70%)',
              filter: 'blur(8px)',
              zIndex: -2,
            }}
          />
          
          <a
            href="#projects"
            className="bg-green-600/30 border border-green-600 text-green-400 font-bold py-3 px-8 rounded-full animate-fade-in-up-delay-3 relative z-10"
            style={{
              boxShadow: '0 0 15px rgba(0, 255, 0, 0.3), 0 0 25px rgba(0, 255, 0, 0.2)',
            }}
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* CSS Styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes lightning-flash {
          0%, 90%, 100% { 
            opacity: 0; 
            transform: scale(1);
          }
          5%, 10% { 
            opacity: 0.8; 
            transform: scale(1.1);
          }
          15%, 20% { 
            opacity: 0.4; 
            transform: scale(1.05);
          }
          25% { 
            opacity: 0.9; 
            transform: scale(1.15);
          }
        }

        /* DISABLE ALL ZOOM/SCALE ANIMATIONS ON ENTIRE PAGE */
        *, *:before, *:after {
          transform: none !important;
          transition: none !important;
          animation: none !important;
        }

        /* Allow only specific animations we want */
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.5s both !important;
        }

        .animate-fade-in-up-delay-1 {
          animation: fade-in-up 0.8s ease-out 0.7s both !important;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.9s both !important;
        }

        .animate-fade-in-up-delay-3 {
          animation: fade-in-up 0.8s ease-out 1.1s both !important;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite !important;
        }

        .lightning-effect {
          animation: lightning-flash 3s ease-in-out infinite !important;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, rgba(0, 150, 0, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
        }

        body {
          margin: 0;
          font-family: 'Arial', sans-serif;
          background-color: #000;
          color: #C0C0C0;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="w-full bg-black text-silver text-center py-4 z-40">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; ${new Date().getFullYear()} ඔබේ නම. සියලුම හිමිකම් ඇවිරිණි.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    // 'min-h-screen' 
    <div className="min-h-screen">
      <Home />
      <Footer />
    </div>
  );
};


export default App;