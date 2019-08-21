import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ListPokemons from './ListPokemons';
import Navegação from './Navegação';


function Main() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact component={Navegação}/>
        <Route path='/pokemons' exact component={ListPokemons}/>
      </div>
    </BrowserRouter>
  );
}

export default Main;
