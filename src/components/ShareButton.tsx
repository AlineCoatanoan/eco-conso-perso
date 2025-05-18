// Composant permettant de partager le score éco conso

interface Result {
    score: number;
    kgCO2: number;
    kmCar: number;
  };
  
  interface Props {
    result: Result;
  };
  
  const ShareButton = ({ result }: Props) => {
    const handleCopy = () => {
      const text = `Mon score éco conso : ${result.score}/100, soit ${result.kgCO2} kg CO₂/mois = ${result.kmCar} km en voiture 🚗`;
      navigator.clipboard.writeText(text);
      alert('Score copié dans le presse-papiers !');
    };
  
    return (
      <button onClick={handleCopy} className="bg-[#0d4729] text-white px-4 py-2 rounded hover:bg-green-700">
        📋 Partager mon ÉcoScore
      </button>
    );
  };
  
  export default ShareButton;
  