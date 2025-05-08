import React, { RefObject } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

type Result = {
  score: number;
  kgCO2: number;
  kmCar: number;
  chartData: {
    name: string;
    value: number;
    unit: string;
  }[];
};

type Props = {
  result: Result;
  chartRef: RefObject<HTMLDivElement | null>; // ← ici
};


const PDFExportButton = ({ result, chartRef }: Props) => {
  const handleExport = async () => {
    const element = chartRef.current;
    if (!element) return;
  
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
  
    // Centre le titre
    const title = 'éco-conso-perso';
    pdf.setFontSize(20);
    pdf.setTextColor(0, 128, 0); // vert
    const pageWidth = pdf.internal.pageSize.getWidth();
    const textWidth = pdf.getTextWidth(title);
    const x = (pageWidth - textWidth) / 2;
    pdf.text(title, x, 15);
  
    // Infos en noir
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0); // noir
    pdf.text(`Score : ${result.score}/100`, 10, 30);
    pdf.text(`Émissions : ${result.kgCO2} kg de CO₂/mois`, 10, 40);
    pdf.text(`Équivalent voiture : ${result.kmCar} km`, 10, 50);
  
    // Image
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = 180;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
    pdf.addImage(imgData, 'PNG', 10, 60, pdfWidth, pdfHeight);
    pdf.save('ecoscore.pdf');
  };
  
  

  return (
    <button
      onClick={handleExport}
      className="bg-[#0d4729] text-white font-semibold py-2 px-4 rounded hover:bg-[#0a3b22] transition duration-300"
      aria-label="Télécharger votre score écologique en PDF"
    >
      Télécharger en PDF
    </button>
  );
};

export default PDFExportButton;
