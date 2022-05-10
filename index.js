import { capturarLlaves } from "./js/capturar-llaves.js";
import { copiar } from "./js/copiar.js";
import { desencriptar } from "./js/desencriptar.js";
import { encriptar } from "./js/encriptar.js";

const d = document;

const inicio = () => {
  const keys = capturarLlaves();
  encriptar(keys);
  desencriptar(keys);
  copiar();
}


d.addEventListener('DOMContentLoaded', inicio)