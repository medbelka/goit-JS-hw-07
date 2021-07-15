const counterValue = document.querySelector("#value");
let currentValue = 0;
function onIncrementBtn () {
    return counterValue.innerHTML = currentValue += 1;
}
function onDecrementBtn () {
    return counterValue.innerHTML = currentValue -= 1;
}
const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', onDecrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', onIncrementBtn);
