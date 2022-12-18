const ulEl = document.querySelector('#categories');
console.log('Number of categories:', ulEl.children.length);

const listEl = ulEl.children;
for (const key of listEl){
    let textTitle = key.firstElementChild;
    console.log('Category:', textTitle.innerHTML);

    let ulNumber = key.lastElementChild;
    console.log('Elements:', ulNumber.children.length);
}

