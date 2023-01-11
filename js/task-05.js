const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const inputText = (event) => {
    if (input.value === ''){
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = event.currentTarget.value;
    }
    
};

input.addEventListener("input", inputText);