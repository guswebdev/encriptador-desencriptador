const d = document;

export function capturarLlaves() {
  let keys = [];
  const arrValue = d.querySelectorAll(".form-input");
  arrValue.forEach((item) => keys.push(item.value));
  return keys;
}
