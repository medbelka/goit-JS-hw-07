const inputValidation = document.querySelector("#validation-input");
inputValidation.addEventListener('blur', isInputValidate)
function isInputValidate (event) {

    event.currentTarget.value.length >= 6 ?
     inputValidation.id='validation-input.valid' : inputValidation.id='validation-input.invalid'
    
}

console.log(inputValidation)