
import RutasCoca from './Tableros/RutasKof.jsx';
import ParqueInstaladoCoca from './Tableros/ParqueInstaladoKof.jsx'

const App = () => {
  const path = window.location.pathname; // Obtén la ruta actual
  const [_, consola, solkos, cliente, tablero] = path.split('/'); // Divide la URL


  if (cliente === 'coca' && tablero === 'rutas') return <RutasCoca />
  if (cliente === 'coca' && tablero === 'parqueInstalado') return <ParqueInstaladoCoca />
  
  return (<h1>Tablero no encontrado</h1> );
};

export default App;

