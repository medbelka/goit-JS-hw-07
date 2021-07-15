const fontControl = document.querySelector('#font-size-control');
const textChanging = document.querySelector('#text');
console.log(textChanging);
fontControl.addEventListener('input', () => {
    console.log(`${fontControl.value}px`);
    textChanging.style.fontSize = `${fontControl.value}px`;
    console.log(textChanging.style.fontSize)
});