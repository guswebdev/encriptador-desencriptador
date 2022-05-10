import { cambiarLlaves } from "./js/cambiar-llaves.js";
import { capturarLlaves } from "./js/capturar-llaves.js";
import { copiar } from "./js/copiar.js";
import { desencriptar } from "./js/desencriptar.js";
import { encriptar } from "./js/encriptar.js";

const d = document;
let keys;

//EVENTO CARGA DEL DOM

const inicio = () => {
  keys = capturarLlaves();
};

d.addEventListener("DOMContentLoaded", inicio);

//EVENTO CLICK

const click = (e) => {
  if (e.target.matches(".btn-encriptar")) {
    encriptar(e, keys);
  }

  if (e.target.matches(".btn-desencriptar")) {
    desencriptar(e, keys);
  }

  if(e.target.matches('.btn-copy')){
    copiar(e);       
  }

};

d.addEventListener("click", click);


//EVENTO SUBMIT
const submit = (e) => {
  keys = cambiarLlaves(e,keys)
}

d.addEventListener("submit", submit);