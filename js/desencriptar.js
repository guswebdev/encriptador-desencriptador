const d = document;

export function desencriptar(e, keys) {
  e.preventDefault();
  let newArr = [];
  let cadena = d.querySelector(".textarea").value;
  let array = cadena.toLowerCase().split("");
  let regExp = /[A-Z\u00C0-\u017F]/g;
  if (!regExp.test(cadena)) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "a") {
        newArr.push(array[i]);
        i = i + (keys[0].length - 1);
      } else if (array[i] === "e") {
        newArr.push(array[i]);
        i = i + (keys[1].length - 1);
      } else if (array[i] === "i") {
        newArr.push(array[i]);
        i = i + (keys[2].length - 1);
      } else if (array[i] === "o") {
        newArr.push(array[i]);
        i = i + (keys[3].length - 1);
      } else if (array[i] === "u") {
        newArr.push(array[i]);
        i = i + (keys[4].length - 1);
      } else {
        newArr.push(array[i]);
      }
    }
    let result = newArr.join("");
    d.querySelector(".output-message").classList.remove("hide");
    d.querySelector(".output-init").classList.add("hide");
    d.querySelector(".output-textarea").value = `${result}`;
    d.querySelector(".info-text").classList.remove("color-red");
    d.querySelector(".form").reset();
  } else {
    d.querySelector(".info-text").classList.add("color-red");
  }
}
