//-------------------------------------- Variable Declaration --------------------------------------------

//create an empty array of type const called input, do not assign an initial value
const input = [];

// create a variable of type const called numbers equal to all the number buttons (querySelectorAll())
const numbers = document.querySelectorAll(".number");

// create a variable of type const called operators equal to all the operator buttons (querySelectorAll())
const operators = document.querySelectorAll(".operator");

// create a variable of type const called display, equal to the display element (querySelector())
const display = document.querySelector(".display");


// create a variable of type const called del, equal to the DEL element (querySelector())
const del = document.querySelector(".delete");

// create a variable of type const called clear, equal to the AC element (querySelector())
const clear = document.querySelector(".clear");

//create a variable of type const called equal, set it equal to the equal element
const equal = document.querySelector(".equals");

//create a variable of type let called i, assign an initial value of 0
let i = 0;

//---------------------------------------- Event Listeners -----------------------------------------------

// Add the event listener to each number button, when the button is clicked, update the display
numbers.forEach(number => number.addEventListener('click', function () {
    display.innerText += this.id;

    if (input[i] === undefined) {
        input[i] = {number: '', operator: ''}

        }
    
    input[i].number += this.id;

}))

// Add the event listener to each operator button, when the button is clicked, update the display
operators.forEach(operator => operator.addEventListener('click', function () {
    display.innerText += this.id;

    input[i].operator = this.id;

    i++;


}))

//Add the event listener to the delete button, when the button is clicked, delete the previous user input from the display
del.addEventListener('click', function () {
    display.innerText = display.innerText.slice(0, -1);
})

// Add the event listener to the clear button, when the button is clicked, clear the entire display
clear.addEventListener('click', function () {
    display.innerText = '';
})

//Add the event listener to the equal button, when the button is clicked, call the function evaluate()
equal.addEventListener('click', evaluate);


//---------------------------------------- Functions ------------------------------------------------------------

// function: evaluate
// -> evaluates the input 

function evaluate() {

    let sum = 0;

    let currentNum = 0;

    for(let j = 0; j < (input.length - 1); j++){

        
       if(input[j].operator == '+'){
            sum += +input[j].number + +input[j+1].number
        }

        else if(input[j].operator == '-'){
            sum += +input[j].number - +input[j+1].number
        }


    }

    display.innerText = sum;

}