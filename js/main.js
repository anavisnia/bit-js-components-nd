import { numData } from '../js/data/data.js'
import { daugyba } from '../js/components/daugyba/daugyba.js';
import { atimtis } from '../js/components/atimtis/atimtis.js';

const daug = daugyba(numData);
console.log(daug);

const rez = atimtis(numData);
console.log(rez);

// "Is pateiktu 7 skaiciu, galutinis rezultatas po daugybos ir atimties gaunasi: 23,513."

console.log(`Is pateiktu ${numData.length} skaiciu, galutinis rezultatas po daugybos ir atimties gaunasi: ${rez}.`);

const rezToStr = `Is pateiktu ${numData.length} skaiciu, galutinis rezultatas po daugybos ir atimties gaunasi: ${rez}.`;

// Itraukymas i HTML
const rezToDOM = document.querySelector('p');

rezToDOM.innerText = rezToStr;