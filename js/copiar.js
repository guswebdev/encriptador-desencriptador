const d = document;

export function copiar() {
    d.addEventListener('click', (e) => {
        if(e.target.matches('.btn-copy')){
            e.preventDefault();
            let textarea = d.querySelector('.output-textarea').value;
            navigator.clipboard.writeText(textarea);

        }
    })
}