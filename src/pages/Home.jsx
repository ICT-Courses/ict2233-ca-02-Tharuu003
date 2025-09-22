import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {

    const createLeaf = () => {
      const leaf = document.createElement('div');
      leaf.className = 'leaf-animation';
      
      const size = Math.random() * 20 + 10;
      leaf.style.width = `${size}px`; 
      leaf.style.height = `${size}px`;
      
      const position = Math.random() * 100;
      leaf.style.left = `${position}%`;
      
      const delay = Math.random() * 5;
      leaf.style.animationDelay = `${delay}s`;
      
      document.body.appendChild(leaf);
      
      setTimeout(() => {
        leaf.remove();
      }, 10000); 
    };

    const interval = setInterval(createLeaf, 500);

    const handleMouseMove = (e) => {
      const newParticle = {
        id: Date.now(),
        x: e.clientX +(Math.random() -0.5)*50,
        y: e.clientY +(Math.random() -0.5)*50,
        size: Math.random()*4*3
      }
      setParticles((prevParticles) => [...prevParticles, newParticle]);

      setTimeout(() =>{
        setParticles((prevParticles) =>
          prevParticles.filter((p) => p.id !==newParticle.id)
      );
      },1000);
    };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const myName = 'Tharushi Kodithuwakku';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-6xl font-bold mb-4 text-dark-green"
        variants={itemVariants}
      >
        {myName}
      </motion.h1>
      <motion.h2
        className="text-2xl font-semibold mb-8 text-silver"
        variants={itemVariants}
      >
        Where creativity meets technology.
      </motion.h2>
      <motion.p
        className="max-w-xl mx-auto mb-12 text-sm text-silver"
        variants={itemVariants}
      >
        On a journey to become a skilled developer, combining academic learning and practical training.
      </motion.p>
      <motion.a
        href="#projects"
        className="bg-dark-green text-black font-bold py-2 px-6 rounded-full hover:bg-silver transition-colors duration-300"
        variants={itemVariants}
      >
        View My Work
      </motion.a>

      {particles.map((particle) => (
        <svg
          key = {particle.id}
          className='star-particle absolute'
          style={{
            left : particle.x,
            top : particle.y,
            height:particle.size,
            width : particle.size.Date,
            fill: 'silver',
            pointerEvents:  'none',
            opacity:0.8,
            animation:'fade-out 0.5s forwards',
          }}
          viewBox='0 0 51 48'
        >
          <path d="M25.5 0l6.19 19.34L51 19.34l-15.65 11.36L41.31 48 25.5 36.64 9.69 48l4.96-17.3L0 19.34l19.31 0.00z" />
        </svg>
      ))}
    </motion.div>
  );
};

export default Home;



  // // Define animation variants for smooth transitions
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       delay: 0.5,
  //       staggerChildren: 0.2, // Animate children with a delay
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: { y: 0, opacity: 1 },
  // };

  // return (
  //   <motion.div
  //     className="relative flex flex-col items-center justify-center min-h-screen text-center text-silver"
  //     variants={containerVariants}
  //     initial="hidden"
  //     animate="visible"
  //     // You will add the dark forest background here with CSS
  //   >
  //     <motion.h1
  //       className="text-6xl font-bold mb-4 text-dark-green"
  //       variants={itemVariants}
  //     >
  //       Tharushi Kodithuwakku
  //     </motion.h1>
  //     <motion.h2
  //       className="text-2xl font-semibold mb-8 text-silver"
  //       variants={itemVariants}
  //     >
  //       Where creativity meets technology.
  //     </motion.h2>
  //     <motion.p
  //       className="max-w-xl mx-auto mb-12 text-sm text-gray-400"
  //       variants={itemVariants}
  //     >
  //       On a journey to become a skilled developer, combining academic learning and practical training.
  //     </motion.p>
  //     <motion.a
  //       href="#projects"
  //       className="bg-dark-green text-black font-bold py-2 px-6 rounded-full hover:bg-silver transition-colors duration-300"
  //       variants={itemVariants}
  //     >
  //       View My Work
  //     </motion.a>
  //   </motion.div>
  // );
// };

// export default Home;