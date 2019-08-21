import React from 'react'
import axios from 'axios'
import './Lista.css'

class ListPokemons extends React.Component {
  state = {
    pokemons: []
  }

  async componentDidMount() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    this.setState({
      pokemons: response.data.results
      
    }) 

    console.log(response.data.results)
  }  

  render() {
    return(
      <div className="menu" >        
      <h1>NOME DE POKÉMONS</h1>
        { this.state.pokemons.length !== 0 ?
          this.state.pokemons.map(poke => 
          (
            <div className="lista" key={poke.name}>
              <h2>Nome: {poke.name}</h2>
              <h4><a href={poke.url}>Ver Mais</a></h4>
              
            </div>
          )) 
          :
          <h2>Carregando...</h2>
        }
        </div>
      
    )
  }
}

export default ListPokemons