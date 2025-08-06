import './App.css'
import { Cachorro } from './models/Cachorro';

function App() {
  const rex = new Cachorro('Rex');

  return (
    <div>
      <p>{rex.emitirSom()}</p>
      <p>{rex.correr()}</p>
    </div>
  );
}

export default App