import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nave.css';

class Navegação extends Component{
    render() {
        return(
        	
            <div className='container'>
                <Link to='/pokemons'><button className='botão'><h3>Pokemons</h3></button></Link>
            </div>
        );
    }
}
export default Navegação;
