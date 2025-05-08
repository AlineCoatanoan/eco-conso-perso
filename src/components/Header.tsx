import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0d4729] text-white shadow-md"
      style={{
        backgroundImage: 'url("/fond.png")', // Chemin vers l'image de fond
        backgroundSize: 'cover', // Couvre toute la surface
        backgroundPosition: 'center', // Centre l'image de fond
      }}
    >
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative">
        {/* Image home.png qui effectue une bascule */}
        <motion.img
          src="/home.png"
          alt="Logo de Eco-Conso-Perso"
          className="absolute left-2 sm:left-10 md:left-16 lg:left-72 w-12 h-12 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"
          animate={{
            rotate: [0, 10, -10, 0],  // Bascule de 10° vers la gauche, puis -10° à droite et retour à 0°
          }}
          transition={{
            duration: 2,  // Durée du mouvement (2 secondes)
            repeat: Infinity,  // Répéter indéfiniment
            repeatType: 'loop',  // Recommencer après chaque cycle
            ease: 'easeInOut',  // Mouvement fluide
          }}
        />

        {/* Titre centré avec la police Gaegu */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#dce85b] drop-shadow-lg text-center font-gaegu">
          Eco-Conso-Perso
        </h1>
      </div>
    </motion.header>
  );
};

export default Header;
