import { daugyba } from "../daugyba/daugyba.js";

function atimtis(num) {
    const atimtiNuoNum = daugyba(num);
    const kiekis = num.length;

    const atimt = atimtiNuoNum - kiekis;

    return atimt;

}

export { atimtis };