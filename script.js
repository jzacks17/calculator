// create a variable of type const called numbers equal to all the number buttons (querySelectorAll())
const numbers = document.querySelectorAll(".number");

// create a variable of type const called operators equal to all the operator buttons (querySelectorAll())
const operators = document.querySelectorAll(".operator");

// create a variable of type const called display, equal to the display element (querySelector())
const display = document.querySelector(".display");

// Add the event listener to each number button, when the button is clicked, update the display
numbers.forEach(number => number.addEventListener('click', function () {
    display.innerText += this.id;
}))

// Add the event listener to each operator button, when the button is clicked, update the display
operators.forEach(operator => operator.addEventListener('click', function () {
    display.innerText += this.id;
}))


// const buttons = document.querySelectorAll(".button");

// buttons.forEach(button => button.addEventListener('click', function(){
//     console.log(this.id);
// }))