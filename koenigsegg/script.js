document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / totalHeight) * 100;
    document.getElementById('pageProgress').value = progress;
});
const inputElement = document.getElementById('textbox');

const meter = document.querySelector("meter");
    inputElement.addEventListener('input', () => {
    const inputValue = inputElement.value;
    const characterCount = inputValue.length;
    meter.value = characterCount;
})
const button = document.getElementById("dialog");
function openDialog(){
    const dialog = document.querySelector("dialog");
    button.disabled = true;
    dialog.showModal();
}
let checker = document.getElementById("checker");
let checkbox = document.getElementById("checkbox");
  checkbox.addEventListener('change', function() {
    if (this.checked) {
        checker.textContent = "Seleccionado";
        checker.style.color = 'green';
        console.log('El checkbox está seleccionado.');
    } else {
        checker.textContent = "No seleccionado";
        checker.style.color = 'red';
        console.log('El checkbox no está seleccionado.');
    }
})

let header = document.getElementById('header');
let progressBar = document.getElementById('progressbar');
let progressInside = document.getElementById('pageProgress');
const inputColor = document.getElementById('InputColor');
const colorSeleccionadoElement = document.getElementById('colorSeleccionado');
inputColor.addEventListener('input', () => {
  const colorSeleccionado = inputColor.value;
  header.style.backgroundColor = colorSeleccionado;
  progressBar.style.backgroundColor = colorSeleccionado;
  progressInside.style.borderColor = colorSeleccionado;
});

const range = document.getElementById('range');
const rangeText = document.getElementById('rangeText');
range.addEventListener('input', () => {
    rangeText.textContent = range.value;
})