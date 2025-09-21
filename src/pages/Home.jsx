import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  // Define animation variants for smooth transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2, // Animate children with a delay
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-silver"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // You will add the dark forest background here with CSS
    >
      <motion.h1
        className="text-6xl font-bold mb-4 text-dark-green"
        variants={itemVariants}
      >
        Tharushi Kodithuwakku
      </motion.h1>
      <motion.h2
        className="text-2xl font-semibold mb-8 text-silver"
        variants={itemVariants}
      >
        Where creativity meets technology.
      </motion.h2>
      <motion.p
        className="max-w-xl mx-auto mb-12 text-sm text-gray-400"
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
    </motion.div>
  );
};

export default Home;