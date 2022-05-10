const d = document;

export function copiar(e) {
  e.preventDefault();
  let textarea = d.querySelector(".output-textarea").value;
  navigator.clipboard.writeText(textarea);
  d.querySelector(".copiado-exito").classList.add("show");
  setTimeout(() => {
    d.querySelector(".copiado-exito").classList.remove("show");
  }, 2000);
}
