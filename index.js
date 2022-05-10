import { capturarLlaves } from "./js/capturar-llaves.js";
import { copiar } from "./js/copiar.js";
import { desencriptar } from "./js/desencriptar.js";
import { encriptar } from "./js/encriptar.js";

const d = document;
let keys;

const inicio = () => {
  keys = capturarLlaves();
  //encriptar(keys);
  //desencriptar(keys);
  //copiar();
}


d.addEventListener('DOMContentLoaded', inicio)

const click = (e) => {

  if (e.target.matches(".btn-encriptar")){
    encriptar(e,keys);
  }

  desencriptar(keys);
  copiar();
}

d.addEventListener('click', click)