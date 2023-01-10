const addElBnt = document.querySelector('[data-action="increment"]');
const deleteElBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

let totalValue = 0;

const incrementEl = () => {
    totalValue += 1;
    valueEl.textContent = totalValue;
};

const decrementEl = () => {
    totalValue -= 1;
    valueEl.textContent = totalValue;
};


addElBnt.addEventListener('click', incrementEl);
deleteElBtn.addEventListener('click', decrementEl);