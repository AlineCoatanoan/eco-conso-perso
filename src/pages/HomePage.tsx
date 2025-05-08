import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { calculateScore } from '../utils/calculateScore';
import ScoreForm from '../components/ScoreForm';
import ScoreResult from '../components/ScoreResult';
import CO2Chart from '../components/CO2Chart';
import ShareButton from '../components/ShareButton';
import PDFExportButton from '../components/PDFExportButton';

const HomePage = () => {
  const [formData, setFormData] = useState({
    electricity: '',
    gas: '',
    water: '',
    internet: '',
    phone: '',
  });

  const [result, setResult] = useState<null | ReturnType<typeof calculateScore>>(null);

  const chartRef = useRef<HTMLDivElement>(null); // 🔥 Référence du graphe

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const calc = calculateScore(formData);
    setResult(calc);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto p-6 bg-[#66cbaf] rounded-2xl shadow-xl mt-10 mb-10"
    >
      <motion.h2
        className="text-3xl font-extrabold text-center mb-8"
        style={{ color: '#0d4729' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Calcule ton <span className="text-[#dce85b]">ÉcoScore</span>
      </motion.h2>

      <ScoreForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />

      {result && (
        <motion.div
          className="bg-[#f9fff9] p-6 rounded-xl shadow-lg mt-10 mb-10 space-y-6 border border-[#dce85b]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <ScoreResult result={result} />

          {/* Espacement du graphique avec ref */}
          <div className="mt-16 mb-8" ref={chartRef}>
            <CO2Chart data={result.chartData} />
          </div>

          <div className="!mt-20 !mb-2 flex flex-col sm:flex-row gap-4 justify-center">
            <ShareButton result={result} />
            <PDFExportButton result={result} chartRef={chartRef} />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HomePage;
