const userAmount = document.querySelector("#controls");
const createBtn = document.querySelector('[data-action="render"]');
const clearBtn = document.querySelector('[data-action="destroy"]');
const divContainerRef = document.querySelector('#boxes');

userAmount.addEventListener('input', createBoxes);
createBtn.addEventListener('click', onCreateBtn);
clearBtn.addEventListener('click', onClearOutput);

function onClearOutput () {
    userAmount.firstElementChild.value = '';
}
let amount;
function onCreateBtn() {
    amount = userAmount.firstElementChild.value

    return console.log(amount);
    
}

function randomColor() {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

// const divAmount = [];
function createBoxes(amount) {
    amount = userAmount.firstElementChild.value;
    console.log(amount);
    for(let i=0; i<=amount; i+=1) {
const divRef = document.createElement('div');
const baseWidth = '30';
divRef.style.maxWidth = `${baseWidth}+${amount*10}px`;
devRef.style.backgroundColor = 'randomColor';
return divRef;
    };
};

// console.log(divAmount);



// divContainerRef.append()
// console.log(randomColor());
// createBoxes(amount)