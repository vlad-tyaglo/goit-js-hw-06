const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let listArr = [];
for (const ingredient of ingredients){
    const listEl = document.createElement('li');
    listEl.textContent = ingredient;
    listEl.classList.add('item');
    listArr.push(listEl);
};
const ulEl = document.querySelector('#ingredients')
ulEl.append(...listArr);
