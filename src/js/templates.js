import { createPokemonCard } from "..";
export function pocemonList({ name }) {
  return `
  <li class="pocemon-item" >
    <p id="${name}" class="pocemon-link" data-toggle-id="card-pocimon" >${name}</p>
  </li>
  `;
};

export function pocemonCard({name, sprites, height, weight, abilities}) {
  return `
 <div >
   <div class="pocemon-wrap">
      <img class='pocemon-img'  src="${sprites.back_default}" alt="${name}" width="80"/>
      <img class='pocemon-img'  src="${sprites.front_default}" alt="${name}" width="80"/>
      <p class="pocemon-title">${name}</p>
    </div>
        <p class="pocemon-text"><span class="pocemon-span">Height:</span>${height}</p>
        <p class="pocemon-text"><span class="pocemon-span">Weight:</span>${weight}</p>
        <p class="pocemon-text"><span class="pocemon-span">Abilities:
        </span>${Object.entries(...abilities)}</p>
  </div>
  `
}