const d = document;

export function reset (e) {
    e.preventDefault();
    d.querySelector('#llaveA').value = 'ai'       
    d.querySelector('#llaveE').value = 'enter'       
    d.querySelector('#llaveI').value = 'imes'       
    d.querySelector('#llaveO').value = 'ober'       
    d.querySelector('#llaveU').value = 'ufat'
    location.reload()    
}