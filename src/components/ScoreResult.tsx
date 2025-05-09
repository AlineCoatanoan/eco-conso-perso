// composant permettant d'afficher le score de l'utilisateur

type Result = {
  score: number;
  kgCO2: number;
  kmCar: number;
};

type Props = {
  result: Result;
};

const ScoreResult = ({ result }: Props) => {
  return (
    <>
      <h3 className="text-lg font-bold mb-6 text-center">Score : {result.score}/100</h3>
      <p className="mb-8 text-center">
        Votre logement émet environ <strong>{result.kgCO2} kg de CO₂/mois</strong>, soit
        l'équivalent de <strong>{result.kmCar} km</strong> en voiture.
      </p>
    </>
  );
};

export default ScoreResult;
