import { capturarLlaves } from "./js/capturar-llaves.js";
import { copiar } from "./js/copiar.js";
import { desencriptar } from "./js/desencriptar.js";
import { encriptar } from "./js/encriptar.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  const keys = capturarLlaves();
  //console.error(keys)
  /*
  aca tendria que validar las llaves
  tambien tengo que validar el otro formulario aca
  */
  encriptar(keys);
  desencriptar(keys);
  //desencriptar();
  //encriptar();
  copiar();
});