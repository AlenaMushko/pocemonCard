import { getRefs } from './js/getRefs';
import { fetchAllPokemon, fetchPokemon} from './js/pokemonAPI';
import { createPokemonItemsMarkup} from './js/renderFunction';
import { pocemonCard, pocemonList } from './js/templates';

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
const pocimonName = e.target.id;
    refs.pokemonList.innerHTML = '';

 fetchPokemonCard(pocimonName)
  .then((results) => {
        console.log(results);
        const markup = pocemonCard(results);
          refs.pocemonCard.innerHTML = markup;
  }).catch(error => console.log(error));
    
    
console.log(pocimonName);
  }
}

function fetchPokemonCard(pocimonName) {
 return fetch('https://pokeapi.co/api/v2/pokemon/wartortle')
      .then(response => {
        if (!response.ok) {
          throw new Error('Упс щось пішло не так');
        }
        return response.json()})
}

