const controlSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// controlSize.oninput = () => {
//   text.style.fontSize = controlSize.value + "px";
// };
const sizeChange = (event) => {
    text.style.fontSize = controlSize.value + "px";
};

controlSize.addEventListener('input', sizeChange)