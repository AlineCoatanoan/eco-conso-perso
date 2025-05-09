// Formulaire pour le calcul du score écologique
// Avec des champs pour l'électricité, le gaz, l'eau, l'internet et le téléphone
// Et inputs pour chaque champ avec des valeurs par défaut


import React from 'react';

type Props = {
  formData: {
    electricity: string;
    gas: string;
    water: string;
    internet: string;
    phone: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

const ScoreForm = ({ formData, onChange, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit} className="grid gap-4 mb-2">
      <div className="flex flex-col">
        <label htmlFor="electricity" className="text-sm mb-2">Électricité (kWh/mois)</label>
        <input
          id="electricity"
          type="number"
          name="electricity"
          value={formData.electricity}
          onChange={onChange}
          placeholder="0"
          className="p-2 border rounded text-center"
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="gas" className="text-sm mb-2">Gaz naturel (kWh/mois)</label>
        <input
          id="gas"
          type="number"
          name="gas"
          value={formData.gas}
          onChange={onChange}
          placeholder="0"
          className="p-2 border rounded text-center"
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="water" className="text-sm mb-2">Eau potable (L/mois)</label>
        <input
          id="water"
          type="number"
          name="water"
          value={formData.water}
          onChange={onChange}
          placeholder="0"
          className="p-2 border rounded text-center"
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="internet" className="text-sm mb-2">Internet (heures/jour)</label>
        <input
          id="internet"
          type="number"
          name="internet"
          value={formData.internet}
          onChange={onChange}
          placeholder="0"
          className="p-2 border rounded text-center"
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-sm mb-2">Téléphone (heures/jour)</label>
        <input
          id="phone"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          placeholder="0"
          className="p-2 border rounded text-center"
        />
      </div>

      <button
        type="submit"
        className="bg-[#0d4729] text-white py-2 rounded hover:bg-green-700"
        aria-label="Calculer votre score écologique"
      >
        Calculer
      </button>

    </form>
  );
};

export default ScoreForm;
