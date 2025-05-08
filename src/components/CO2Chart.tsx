import { PieChart, Pie, Cell, Tooltip, Legend, LegendProps } from 'recharts';
import { useState, useEffect } from 'react';

const COLORS = ['#22c55e', '#facc15', '#3b82f6', '#0d4729', '#f97316'];

type DataItem = {
  name: string;
  value: number;
};

type Props = {
  data: DataItem[];
};

// Composant de la légende personnalisée
const CustomLegend = (props: LegendProps) => {
  return (
    <div className="flex justify-center gap-4 mt-4 flex-wrap w-full max-w-[500px]"> 
      {props.payload?.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center space-x-2 w-1/2 sm:w-auto">
          <div
            className="w-3 h-3 rounded"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm sm:text-base">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const CO2Chart = ({ data }: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Met à jour la largeur de la fenêtre à chaque redimensionnement
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Nettoyage de l'événement à la destruction du composant
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ajuste le `outerRadius` en fonction de la largeur de l'écran
  const outerRadius = windowWidth <= 640 ? 60 : 80;

  return (
    <div className="flex justify-center mt-12 mb-12 px-4 sm:px-8">
      <div className="flex flex-col items-center space-y-8 w-full max-w-[500px] sm:max-w-[500px]">
        <PieChart width={500} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={outerRadius}  
            label={({ value }) => `${value} kg CO₂`}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="center"
            content={<CustomLegend />}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default CO2Chart;
