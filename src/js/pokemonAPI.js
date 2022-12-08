
import { createPokemonCardMarkup } from "./renderFunction";


const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';
export function fetchAllPokemon() {
  return fetch(URL_BASE).then(response => {
  
    if (!response.ok) {
      throw new Error('Упс щось пішло не так');
    }
    return response.json();
  }); 
}

// export function fetchPokemon(pocimonName) {
//   return fetch('https://pokeapi.co/api/v2/pokemon/${pocimonName}')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Упс щось пішло не так');
//     }
//     return response.json();
//   }); 
// }
