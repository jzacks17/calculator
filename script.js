//-------------------------------------- Variable Declaration --------------------------------------------

//create an empty array of type let called input, do not assign an initial value
let input = [];

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

//create a variable of type let called numOperations, assign an initial value of 0. This will store how many operations the user has input
let numOperations = 0;

//---------------------------------------- Event Listeners -----------------------------------------------

// Add the event listener to each number button, when the button is clicked, update the display
numbers.forEach(number => number.addEventListener('click', function () {
    
    //update the display
    display.innerText += this.id;

    //if the input[numOperations] hasn't been defined yet,
    if (input[numOperations] === undefined) {
        
        //set input to an object with a number and operator key
        input[numOperations] = { number: '', operator: '' }
    }

    //set input plus/equal to the number selected
    input[numOperations].number += this.id;

}))

// Add the event listener to each operator button, when the button is clicked, update the display
operators.forEach(operator => operator.addEventListener('click', function () {
    
    //if a number has not been selected since the last operation, break 
    if (input[numOperations] === undefined) {
        return;
    }
    
    //update the display
    display.innerText += this.id;

    //set the input[numOperations] operator object equal to the operator that was clicked
    input[numOperations].operator = this.id;

    //increment the number of operations 
    numOperations++;


}))

//Add the event listener to the delete button, when the button is clicked, delete the previous user input from the display
del.addEventListener('click', function () {

    //If nothing has been input, return
    if(display.innerText == ''){
        return;
    }

    display.innerText = display.innerText.slice(0, -1);

    //if input[numOperations] is undefined, the previous input was an operator
    if (input[numOperations] === undefined) {

        //decrement number of operations
        numOperations--;

        //empty previous operator
        input[numOperations].operator = '';

    }

    else{
        //slice out the previous number
        input[numOperations].number = input[numOperations].number.slice(0, -1);

    }
})

// Add the event listener to the clear button, when the button is clicked, clear the entire display
clear.addEventListener('click', function () {
    
    //clear entire display
    display.innerText = '';
    
    //empty the input
    input = [];

    //set number of operations to zero
    numOperations = 0;

})

//Add the event listener to the equal button, when the button is clicked, call the function evaluate()
equal.addEventListener('click', evaluate);


//---------------------------------------- Functions ------------------------------------------------------------


//Evaluates the input 
function evaluate() {

    //variable to hold the sum of all the operations 
    let sum = null;

    //variable to see if the first addition/subtraction was done
    let firstOperation = true;

    //Multiplication and division
    for (let i = 0; i < (input.length - 1); i++) {

        if (input[i].operator == '×') {

            //perform multiplication, storing the product in the next number
            input[i + 1].number = +input[i].number * +input[i + 1].number;

            //set previous number to null
            input[i].number = null;

        }

        else if (input[i].operator == '÷') {

            //perform division, storing the product in the next number
            input[i + 1].number = +input[i].number / +input[i + 1].number;

            //set previous number to null
            input[i].number = null;

        }
    }

    //addition and subtraction
    for (let i = 0; i < (input.length - 1); i++) {

        //skip if the current number is null (means it was already multiplied/divided)
        if (input[i].number == null) {
            continue;
        }

        let j = i + 1

        //Skip until we find the next non-null number
        while (input[j].number == null) {
            j++;
        }

        //if current operator is addition
        if (input[i].operator == '+') {

            if (firstOperation) {
                //add both the current number and next number
                sum += +input[i].number + +input[j].number

                //change firstOperation variable to false
                firstOperation = false;
            }

            else {
                //add the next number
                sum += +input[j].number

            }

        }

        else if (input[i].operator == '-') {


            if (firstOperation) {
                //add the current number and subtract the next number
                sum += +input[i].number - +input[j].number

                //change firstOperation variable to false
                firstOperation = false;
            }

            else {
                //subtract the next number
                sum -= +input[j].number
            }

        }

    }

    //check to see if there was no addition or subtraction
    if(firstOperation){

        //if so, set the sum equal to the last value 
        sum = input[input.length - 1].number;
    }

    //Round the sum to two decimal places and display it 
    display.innerText = (Math.round(sum*100))/100;

    //empty the input
    input = [];

    //set number of operations to zero
    numOperations = 0;
}