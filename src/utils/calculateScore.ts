type FormData = {
  electricity: string;
  gas: string;
  water: string;
  internet: string;
  phone: string;
};

export const calculateScore = (data: FormData) => {
  const electricity = parseFloat(data.electricity) || 0;
  const gas = parseFloat(data.gas) || 0;
  const water = parseFloat(data.water) || 0;
  const internet = (parseFloat(data.internet) || 0) * 30; // convert h/day → h/month
  const phone = (parseFloat(data.phone) || 0) * 30;

  const co2 = {
    electricity: electricity * 0.06,
    gas: gas * 0.234,
    water: water * 0.00018,
    internet: internet * 0.15,
    phone: phone * 0.17,
  };

  const totalKg = Object.values(co2).reduce((sum, val) => sum + val, 0);
  const kmCar = Math.round(totalKg / 0.2);
  const score = Math.max(0, 100 - Math.round(totalKg)); // score sur 100

  return {
    score,
    kgCO2: parseFloat(totalKg.toFixed(2)), // Arrondir à 2 décimales
    kmCar,
    chartData: [
      { name: 'Électricité', value: parseFloat(co2.electricity.toFixed(2)), unit: 'kg CO₂' },
      { name: 'Gaz', value: parseFloat(co2.gas.toFixed(2)), unit: 'kg CO₂' },
      { name: 'Eau', value: parseFloat(co2.water.toFixed(2)), unit: 'kg CO₂' },
      { name: 'Internet', value: parseFloat(co2.internet.toFixed(2)), unit: 'kg CO₂' },
      { name: 'Téléphone', value: parseFloat(co2.phone.toFixed(2)), unit: 'kg CO₂' },
    ],
  };
};
