const symbolsInput = document.querySelector('#validation-input');
const totalLenght = symbolsInput.getAttribute('data-length');
let intTotallenght = parseInt(totalLenght, 10);

symbolsInput.oninput = () => {
  if (symbolsInput.value.length === intTotallenght) {
    symbolsInput.classList.remove("invalid");
    symbolsInput.classList.add("valid");
  }
  if (symbolsInput.value.length === 0) {
    symbolsInput.classList.remove("valid");
    symbolsInput.classList.remove("invalid");
  }
  if (symbolsInput.value.length !== intTotallenght && symbolsInput.value.length !== 0) {
    symbolsInput.classList.add("invalid");
  }
};