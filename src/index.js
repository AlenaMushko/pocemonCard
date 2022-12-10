import { getRefs } from './js/getRefs';
import { fetchAllPokemon, fetchPokemonCard} from './js/pokemonAPI';
import { createPokemonItemsMarkup, createPokemonCardMarkup} from './js/renderFunction';

const refs = getRefs();

refs.buttonFetch.addEventListener('click', onButtonFetchClick);
refs.pokemonList.addEventListener('click', onBtnCardClickCreateCard);

function onButtonFetchClick() {
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
      createPokemonCardMarkup(results)       
  }).catch(error => console.log(error));
  }
}


