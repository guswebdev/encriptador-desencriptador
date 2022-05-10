const d = document;

export function cambiarLlaves(e,keys) {
  e.preventDefault();
  keys.length = 0;
  const arrValue = d.querySelectorAll(".form-input");
  arrValue.forEach((item) => keys.push(item.value));
}
