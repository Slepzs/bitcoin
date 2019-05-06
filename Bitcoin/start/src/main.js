require('./styles/master.scss');
require("babel-core/register");
import Lasagne from './modules/Lasagne.js';

let lasagne = new Lasagne();


let element = document.querySelector("#update");
element.addEventListener("click", () => {

let clearElement = document.getElementsByClassName("dt");
Array.from(clearElement).forEach((el) => {
    el.innerHTML = '';
});
lasagne.listBitcoinData();
});