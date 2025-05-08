import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0d4729] text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        {/* Texte des sources */}
        <p className="text-xs sm:text-sm md:text-base">
          Sources : ADEME - Base Carbone v23.0 - EcoInfo CNRS
        </p>
        {/* Copyright */}
        <p className="text-xs sm:text-sm md:text-base mt-2">
          Tous droits réservés &copy; 2025 - Aline Coatanoan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
