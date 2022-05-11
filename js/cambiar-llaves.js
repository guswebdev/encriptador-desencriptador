const d = document;

export function cambiarLlaves(e, keys) {
  e.preventDefault();
  const newKeys = [];
  const arrValue = d.querySelectorAll(".form-input");
  let regExp = /[A-Z\u00C0-\u017F]/g;
  let isValid = true;
  arrValue.forEach((item) => {
    if (!regExp.test(item.value)) {
      console.info(item.value);
      newKeys.push(item.value);
    } else {
      isValid = false;
      console.error(item.value);
    }
  });

  console.log(keys);
  console.log(newKeys);

  if (!isValid) {
    d.querySelector(".form-alert").classList.add("color-red");
    return keys;
  } else {
    d.querySelector(".form-alert").classList.remove("color-red");
    d.querySelector(".form-success").classList.remove("form-success-show");
    setTimeout(() => {
      d.querySelector(".form-success").classList.add("form-success-show");
    }, 2000);
    return newKeys;
  }
}
