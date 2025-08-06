import './App.css';
import { Cachorro } from './models/Cachorro';
import { Hamster } from './models/Hamster';
import React from 'react';

function App() {
  const rex = new Cachorro('Rex');
  const hams = new Hamster('Hams');

  return (
    <div className="container">
      <h2>Cachorro</h2>
      <button onClick={() => rex.emitirSom()}>Latir</button>
      <button onClick={() => alert(rex.correr())}>Correr</button>

      <h2>Hamster</h2>
      <button onClick={() => hams.emitirSom()}>Emitir Som</button>
      <button onClick={() => alert(hams.ComerSemente())}>Comer Semente</button>
    </div>
  );
}

export default App;
