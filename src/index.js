import { getRefs } from './js/getRefs';
import { fetchAllPokemon, fetchPokemon} from './js/pokemonAPI';
import { createPokemonItemsMarkup} from './js/renderFunction';


const refs = getRefs();

refs.buttonFetch.addEventListener('click', onButtonFetchClick);
refs.pokemonList.addEventListener('click', onBtnCardClickCreateCard);

console.log(refs.pokemonList);

function onButtonFetchClick(evt) {
    fetchAllPokemon().then(({ results, count }) => {
      createPokemonItemsMarkup(results);
  }).catch(error => console.log(error));
};

function onBtnCardClickCreateCard(e) {
  let id = e.target.dataset.toggleId;
  if (!id) return;
  let cardPocimon = document.getElementById(id);

  cardPocimon.hidden = !cardPocimon.hidden;
//   ?
  if( !cardPocimon.hidden){
  let pocimonName = e.target.id;
    refs.pokemonList.innerHTML = '';

console.log(pocimonName);

}





// function CreateCard(pocimonName){
//   fetchPokemon(pocimonName).then(({ results, count }) => {
//     createPokemonCardMarkup(results);
//      }).catch(error => console.log(error));
// }

// function fetchPokemon(pocimonName) {
//   return fetch('https://pokeapi.co/api/v2/pokemon/${pocimonName}')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Упс щось пішло не так');
//     }
//     return response.json();
//   }); 
// }

// function createPokemonCardMarkup(pokemon) {
//   const markup = pocemonCard(pokemon);
//   refs.pocemonCard.innerHTML = markup;
// }
