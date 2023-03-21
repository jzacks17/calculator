//-------------------------------------- Variable Declaration --------------------------------------------

// create a variable of type const called numbers equal to all the number buttons (querySelectorAll())
const numbers = document.querySelectorAll(".number");

// create a variable of type const called operators equal to all the operator buttons (querySelectorAll())
const operators = document.querySelectorAll(".operator");

// create a variable of type const called display, equal to the display element (querySelector())
const display = document.querySelector(".display");


// create a variable of type const called del, equal to the DEL element (querySelector())
const del= document.querySelector(".delete");

// create a variable of type const called clear, equal to the AC element (querySelector())
const clear = document.querySelector(".clear");

//---------------------------------------- Event Listeners -----------------------------------------------
// Add the event listener to each number button, when the button is clicked, update the display
numbers.forEach(number => number.addEventListener('click', function () {
    display.innerText += this.id;
}))

// Add the event listener to each operator button, when the button is clicked, update the display
operators.forEach(operator => operator.addEventListener('click', function () {
    display.innerText += this.id;
}))

//Add the event listener to the delete button, when the button is clicked, delete the previous user input from the display
del.addEventListener('click', function(){
    display.innerText = display.innerText.slice(0,-1);
})

// Add the event listener to the clear button, when the button is clicked, clear the entire display
clear.addEventListener('click', function(){
    display.innerText = '';
})

// const buttons = document.querySelectorAll(".button");

// buttons.forEach(button => button.addEventListener('click', function(){
//     console.log(this.id);
// }))