import { copiar } from "./js/copiar.js";
import { desencriptar } from "./js/desencriptar.js";
import { encriptar } from "./js/encriptar.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  encriptar();
  desencriptar();
  copiar();
});