import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0d4729] text-white shadow-md"
      style={{
        backgroundImage: 'url("/fond.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center sm:justify-start relative">
        
        {/* Logo cliquable vers Home */}
        <Link to="/" className="absolute left-0 sm:left-0 md:left-0 lg:left-80">
          <motion.img
            src="/home.png"
            alt="Logo de Eco-Conso-Perso"
            className="w-12 h-12 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        </Link>

        {/* Titre, flèche et lien "À propos" décalés à droite sur grands écrans */}
        <div className="flex items-center space-x-4 sm:space-x-8 ml-auto sm:ml-auto md:ml-56 lg:ml-96">
          <Link to="/">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D4729] drop-shadow-lg font-gaegu text-center sm:ml-4">
              Eco-Conso-Perso
            </h1>
          </Link>

          <img
            src="/fleche2.png"
            alt="Flèche décorative"
            className="w-8 h-8 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-16 lg:h-16 object-contain"
          />

          {/* Affichage "À propos" en grand écran */}
          <Link
            to="/a-propos"
            className="text-[#0D4729] font-gaegu text-lg sm:text-xl md:text-2xl lg:text-3xl hover:underline hidden sm:block"
          >
            À propos
          </Link>

          {/* Affichage de l'image info.png en version mobile */}
          <Link
            to="/a-propos"
            className="sm:hidden"
          >
            <img
              src="/info.png"
              alt="À propos"
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 sm:ml-8 object-contain"
            />
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
