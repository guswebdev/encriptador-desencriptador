const d = document;

export function capturarLlaves() {
  let keys = [];
  const arrValue = d.querySelectorAll(".form-input");
  arrValue.forEach((item) => keys.push(item.value));
  //let keys = ["ai", "enter", "imes", "ober", "ufat"];
  d.addEventListener("submit", (e) => {
    e.preventDefault();
    keys.length = 0;
    const arrValue = d.querySelectorAll(".form-input");
    arrValue.forEach((item) => keys.push(item.value));
    console.log(keys);
  });
  return keys;
}
