!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;function i(){return{buttonFetch:document.querySelector(".fetch-pokemon"),pokemonList:document.querySelector(".pokemon-list"),pocemonCard:document.querySelector(".pocemon"),btnCard:document.querySelector(".pocemon-item")}}null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return o.default(e)};var n,o=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}})),r.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),r.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o.default(e,t)};var n,o=(n=r("8NIkP"))&&n.__esModule?n:{default:n}}));var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return a.default(e)||s.default(e)||l.default(e)||u.default()};var a=p(r("kMC0W")),s=p(r("7AJDX")),u=p(r("8CtQK")),l=p(r("auk6i"));function p(e){return e&&e.__esModule?e:{default:e}}var d=i();var f=i();f.buttonFetch.addEventListener("click",(function(e){fetch("https://pokeapi.co/api/v2/pokemon/").then((function(e){if(!e.ok)throw new Error("Упс щось пішло не так");return e.json()})).then((function(e){var t,n=e.results;e.count;t=n.map((function(e){return t=e.name,'\n  <li class="pocemon-item" >\n    <p id="'.concat(t,'" class="pocemon-link" data-toggle-id="card-pocimon" >').concat(t,"</p>\n  </li>\n  ");var t})).join(""),d.pokemonList.innerHTML=t})).catch((function(e){return console.log(e)}))})),f.pokemonList.addEventListener("click",(function(t){var n=t.target.dataset.toggleId;if(!n)return;var o=document.getElementById(n);if(o.hidden=!o.hidden,!o.hidden){var r=t.target.id;f.pokemonList.innerHTML="",fetch("https://pokeapi.co/api/v2/pokemon/wartortle").then((function(e){if(!e.ok)throw new Error("Упс щось пішло не так");return e.json()})).then((function(t){console.log(t);var n,o,r,i,a,s,u,l=(r=(n=t).name,i=n.sprites,a=n.height,s=n.weight,u=n.abilities,'\n <div >\n   <div class="pocemon-wrap">\n      <img class=\'pocemon-img\'  src="'.concat(i.back_default,'" alt="').concat(r,'" width="150"/>\n      <img class=\'pocemon-img\'  src="').concat(i.front_shiny,'" alt="').concat(r,'" width="150"/>\n      <p class="pocemon-title">').concat(r,'</p>\n    </div>\n        <p class="pocemon-text">Height:<span class="pocemon-span">').concat(a,'m</span></p>\n        <p class="pocemon-text">Weight:<span class="pocemon-span">').concat(s,'kg</span></p>\n        <p class="pocemon-text">Abilities:\n        <span class="pocemon-span">').concat((o=Object).entries.apply(o,e(c)(u)),"\n        </span></p>\n  </div>\n  "));f.pocemonCard.innerHTML=l})).catch((function(e){return console.log(e)})),console.log(r)}})),console.log(f.pokemonList)}();
//# sourceMappingURL=index.dc80820c.js.map
