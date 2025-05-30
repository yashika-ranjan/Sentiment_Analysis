import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const EmotionChart = ({ data }: { data: { labels: string[]; values: number[]; highlight: string } }) => {
  return (
    <Bar
      data={{
        labels: data.labels,
        datasets: [{
          label: 'Emotions',
          data: data.values,
          backgroundColor: data.labels.map(label =>
            label === data.highlight ? '#f39c12' : '#00a8ff'
          )
        }]
      }}
      options={{
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }}
    />
  );
};

export default EmotionChart;
