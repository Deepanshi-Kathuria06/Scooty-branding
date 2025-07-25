// components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="floating"
        >
          Ride The Thunder
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="delay-1"
        >
          Experience the raw power and unmatched craftsmanship of Thunderbolt Motorcycles - where American heritage meets modern performance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-buttons delay-2"
        >
          <a href="#" className="btn btn-primary">Build Your Bike</a>
          <a href="#" className="btn btn-secondary">Explore Models</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;