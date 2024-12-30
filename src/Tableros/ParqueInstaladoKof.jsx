import React from 'react';
import Plotly from 'plotly.js-dist';

const ParqueInstaladoCoca = () => {
  React.useEffect(() => {
    const data = [
      { labels: ['A', 'B', 'C'], values: [20, 30, 50], type: 'pie' },
    ];
    const layout = { title: 'Parque Instalado de Coca', height: 400, width: 600 };
    Plotly.newPlot('chart', data, layout);
  }, []);

  return <div id="chart"></div>;
};

export default ParqueInstaladoCoca;
