import { CircularProgressbar } from 'react-circular-progressbar'; // Import du composant
import 'react-circular-progressbar/dist/styles.css'; // Import des styles nécessaires

type Result = {
  score: number;
  kgCO2: number;
  kmCar: number;
};

type Props = {
  result: Result;
};

// Fonction pour déterminer la couleur en fonction du score
const getCircleColor = (score: number) => {
  if (score >= 70) return '#22c55e'; // Vert : Impact faible (score élevé)
  if (score >= 40) return '#f59e0b'; // Orange : Impact modéré
  return '#ef4444'; // Rouge : Impact élevé (score faible)
};

const ScoreResult = ({ result }: Props) => {
  const circleColor = getCircleColor(result.score); // Déterminer la couleur du cercle

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-bold mb-6 text-center">Plus ton score est élevé, plus ton logement est écologiquement équilibré.</h3>
      <div className="w-32 h-32 mb-8">
        <CircularProgressbar 
          value={result.score} // Valeur du score
          maxValue={100} // Maximum à 100
          text={`${result.score}%`} // Affichage du score à l'intérieur du cercle
          styles={{
            path: { stroke: circleColor }, // Appliquer la couleur dynamique
            text: { fill: circleColor, fontSize: '24px', fontWeight: 'bold' }, // Couleur du texte
          }}
        />
      </div>

      <p className="mb-8 text-center">
        Votre logement émet environ <strong>{result.kgCO2} kg de CO₂/mois</strong>, soit
        l'équivalent de <strong>{result.kmCar} km</strong> en voiture.
      </p>
    </div>
  );
};

export default ScoreResult;
