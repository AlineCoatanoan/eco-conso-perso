// Fonction permettant de calculer le score d'éco-consommation
// à partir des données saisies par l'utilisateur.
// Elle s'appuie sur des coefficients de conversion CO₂ issus
// des sources suivantes :
// - ADEME : https://www.ademe.fr/particuliers-eco-citoyens/consommer-autrement/eco-conso/eco-conso-1-0
// - CNRS EcoInfo : https://ecoinfo.cnrs.fr

interface FormData {
  electricity: string; // en kWh/mois
  gas: string;         // en kWh/mois
  water: string;       // en litres/mois
  internet: string;    // en heures/jour
  phone: string;       // en heures/jour
};

export const calculateScore = (data: FormData) => {
  // Conversion des valeurs saisies (string → number)
  const electricity = parseFloat(data.electricity) || 0;
  const gas = parseFloat(data.gas) || 0;
  const water = parseFloat(data.water) || 0;

  // Conversion des heures/jour en heures/mois (approx. 30 jours)
  const internet = (parseFloat(data.internet) || 0) * 30;
  const phone = (parseFloat(data.phone) || 0) * 30;

  // Application des facteurs d’émission (en kg CO₂) pour chaque poste de consommation
  const co2 = {
    electricity: electricity * 0.06,   // 1 kWh = 0.06 kg CO₂
    gas: gas * 0.234,                 // 1 kWh = 0.234 kg CO₂
    water: water * 0.00018,           // 1 L = 0.00018 kg CO₂
    internet: internet * 0.15,        // 1h = 0.15 kg CO₂
    phone: phone * 0.17,              // 1h = 0.17 kg CO₂
  };

  // Calcul du total des émissions mensuelles en kg de CO₂
  const totalKg = Object.values(co2).reduce((sum, val) => sum + val, 0);

  // Conversion en kilomètres voiture (1 km = 0.2 kg CO₂)
  const kmCar = Math.round(totalKg / 0.2);

  // Calcul du score (sur 100), en retranchant les kg de CO₂ au max possible (100),
  // avec un minimum de 0 pour éviter les scores négatifs
  const score = Math.max(0, 100 - Math.round(totalKg));

  return {
    score, // Score final sur 100
    kgCO2: parseFloat(totalKg.toFixed(2)), // Total d’émissions mensuelles en kg (arrondi à 2 décimales)
    kmCar, // Équivalent en kilomètres voiture
    chartData: [ // Données structurées pour un graphique (par exemple avec Recharts)
      { name: 'Électricité', value: parseFloat(co2.electricity.toFixed(2)), unit: 'kg CO₂' },
      { name: 'Gaz', value: parseFloat(co2.gas.toFixed(2)), unit: 'kg CO₂' },
      { name: 'Eau', value: parseFloat(co2.water.toFixed(2)), unit: 'kg CO₂' },
      { name: 'Internet', value: parseFloat(co2.internet.toFixed(2)), unit: 'kg CO₂' },
      { name: 'Téléphone', value: parseFloat(co2.phone.toFixed(2)), unit: 'kg CO₂' },
    ],
  };
};
