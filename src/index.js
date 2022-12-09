import { getRefs } from './js/getRefs';
import { fetchAllPokemon, fetchPokemon} from './js/pokemonAPI';
import { createPokemonItemsMarkup} from './js/renderFunction';
import { pocemonCard, pocemonList } from './js/templates';

const refs = getRefs();



    fetch('https://pokeapi.co/api/v2/pokemon/charmeleon')
      .then(response => {
        if (!response.ok) {
          throw new Error('Упс щось пішло не так');
        }
        return response.json()})
      .then((results) => {
        console.log(results);
        const markup = pocemonCard(results);
          refs.pokemonList.innerHTML = markup;
             }).catch(error => console.log(error));



// refs.buttonFetch.addEventListener('click', onButtonFetchClick);
// refs.pokemonList.addEventListener('click', onBtnCardClickCreateCard);

// console.log(refs.pokemonList);

// function onButtonFetchClick(evt) {
//     fetchAllPokemon().then(({ results, count }) => {
//       createPokemonItemsMarkup(results);
//   }).catch(error => console.log(error));
// };

// function onBtnCardClickCreateCard(e) {
//   let id = e.target.dataset.toggleId;
//   if (!id) return;
//   let cardPocimon = document.getElementById(id);

//   cardPocimon.hidden = !cardPocimon.hidden;
// //   ?
//   if( !cardPocimon.hidden){
//   let pocimonName = e.target.id;
//     refs.pokemonList.innerHTML = '';

//     fetch('https://pokeapi.co/api/v2/pokemon/charmeleon')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Упс щось пішло не так');
//         }
//         return response.json();
//       })
//       .then(({ results, count }) => {
//         const markup = pocemonCard(results);
//           refs.pocemonCard.innerHTML = markup;
//              }).catch(error => console.log(error));

// console.log(pocimonName);
//   }
// }





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
