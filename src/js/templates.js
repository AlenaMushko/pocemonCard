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
 <div class='pocemon-card'>
   <div class="pocemon-wrap">
      <img class='pocemon-img'  src="${sprites.back_default}" alt="${name}" width="150"/>
      <img class='pocemon-img'  src="${sprites.front_shiny}" alt="${name}" width="150"/>
      <p class="pocemon-title">${name}</p>
    </div>
        <p class="pocemon-text">Height:<span class="pocemon-span">${height}m</span></p>
        <p class="pocemon-text">Weight:<span class="pocemon-span">${weight}kg</span></p>
        <p class="pocemon-text">Abilities:
        <span class="pocemon-span">${Object.entries(...abilities)}
        </span></p>
  </div>
  `
}