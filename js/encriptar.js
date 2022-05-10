const d = document;

export function encriptar(e, keys) {
  e.preventDefault();
  let newArr = [];
  let cadena = d.querySelector(".textarea").value;
  let regExp = /[A-Z\u00C0-\u017F]/g;
  if (!regExp.test(cadena)) {
    let array = cadena.toLowerCase().split("");
    array.forEach((el) => {
      if (el === "a") {
        newArr.push(keys[0]);
      } else if (el === "e") {
        newArr.push(keys[1]);
      } else if (el === "i") {
        newArr.push(keys[2]);
      } else if (el === "o") {
        newArr.push(keys[3]);
      } else if (el === "u") {
        newArr.push(keys[4]);
      } else {
        newArr.push(el);
      }
    });
    let result = newArr.join("");
    //console.log(result);
    d.querySelector(".output-message").classList.remove("hide");
    d.querySelector(".output-init").classList.add("hide");
    d.querySelector(".output-textarea").value = `${result}`;
    d.querySelector(".info-text").classList.remove("color-red");
    d.querySelector(".form").reset();
  } else {
    d.querySelector(".info-text").classList.add("color-red");
  }
}
