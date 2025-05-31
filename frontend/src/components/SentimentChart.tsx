{/*import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentChart = ({ data }: { data: { labels: string[]; values: number[] } }) => {
  return (
    <Pie
      data={{
        labels: data.labels,
        datasets: [{
          data: data.values,
          backgroundColor: ['#2ecc71', '#e74c3c', '#3498db']
        }]
      }}
      options={{ responsive: true }}
    />
  );
};
export default SentimentChart;
*/}


import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface SentimentChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const SentimentChart: React.FC<SentimentChartProps> = ({ data }) => {
  return (
    <Pie
      data={{
        labels: data.labels,
        datasets: [{
          data: data.values,
          backgroundColor: ['#2ecc71', '#e74c3c', '#3498db'],
        }],
      }}
      options={{ responsive: true }}
    />
  );
};

export default SentimentChart;
