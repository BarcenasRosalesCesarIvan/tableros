import React from 'react';
import Plotly from 'plotly.js-dist';


const RutasCoca = () => {
  React.useEffect(() => {
    const data = [
      {
        x: [1, 2, 3],
        y: [10, 20, 30],
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'red' },
      },
    ];
    const layout = { title: 'Rutas de Coca', height: 400, width: 600 };
    Plotly.newPlot('chart', data, layout);
  }, []);

  return <div id="chart"></div>;
};

export default RutasCoca;
