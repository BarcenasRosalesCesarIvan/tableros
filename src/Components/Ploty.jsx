import React from 'react';
import Plot from 'react-plotly.js';

const PlotyChars= ({data}) => {
    return(
    <Plot
        data={data}
        layout= {{
            title: 'GRAFICO DE EJEMPLO',
            xaxis: { title: 'Eje X'},
            yaxis: { title: 'Eje Y'},
        }}
        />
    );
};

export default PlotyChars