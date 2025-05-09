// Composant pour afficher un graphique circulaire (pie chart) des émissions de CO2

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

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const outerRadius = windowWidth <= 640 ? 60 : 80;
  const chartHeight = windowWidth <= 640 ? 360 : 320;
  const pieCy = windowWidth <= 640 ? 90 : 140; // 🔼 Remonté ici

  return (
    <div className="flex justify-center px-4 sm:px-8">
      <div className="flex flex-col items-center space-y-4 w-full max-w-[500px]">
        <PieChart width={500} height={chartHeight}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={outerRadius}
            cx={250}
            cy={pieCy}
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
