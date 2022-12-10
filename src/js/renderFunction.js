import { getRefs } from './getRefs';
import { pocemonList, pocemonCard } from './templates';

const refs = getRefs();

export function createPokemonItemsMarkup(pokemons) {
  const markup = pokemons.map(pokemon => pocemonList(pokemon)).join('');
  refs.pokemonList.innerHTML = markup;
}


export function createPokemonCardMarkup(pokemon) {
  const markup = pocemonCard(pokemon);
  refs.pocemonCard.innerHTML = markup;
}

