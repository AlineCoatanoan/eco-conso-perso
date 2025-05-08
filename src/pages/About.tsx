import React from 'react';

const About = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-[#0d4729]">
      <h1 className="text-3xl font-bold mb-6">À propos</h1>

      <section className="mb-6">
        <p>
          <strong>Eco-Conso-Perso</strong> est un outil éducatif qui permet d'estimer votre impact environnemental
          mensuel basé sur votre consommation d'énergie et vos usages numériques.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Méthodologie</h2>
        <p>
          Les émissions de CO₂ sont estimées à partir des données que vous fournissez. Chaque type de consommation est
          multiplié par un facteur d’émission basé sur des sources reconnues.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Électricité : 0,06 kg CO₂ / kWh</li>
          <li>Gaz : 0,234 kg CO₂ / kWh</li>
          <li>Eau : 0,00018 kg CO₂ / litre</li>
          <li>Internet : 0,15 kg CO₂ / heure</li>
          <li>Téléphone : 0,17 kg CO₂ / heure</li>
        </ul>
        <p className="mt-2">
          Les équivalents CO₂ sont arrondis à deux décimales, et l’équivalent voiture est calculé sur la base de
          200g CO₂/km.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Sources</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://base-empreinte.ademe.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              ADEME – Base Carbone v23.0
            </a>
          </li>
          <li>
            <a
              href="https://ecoinfo.cnrs.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              EcoInfo – CNRS
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default About;
