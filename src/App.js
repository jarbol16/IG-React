import React from 'react';
import './App.css';
import Encabezado from './componentes/Encabezado'
import PiePagina from './componentes/PiePagina'
import Principal from './paginas/Principal'

function App() {
  return (
    <div className="App">
      <Encabezado proyecto="React IG"/>
      <Principal />
      <PiePagina company="Intergrupo"/>
    </div>
  );
}

export default App;
