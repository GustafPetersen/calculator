
// You should round answers with long decimals so that they don’t overflow the screen.
// Pressing = before entering all of the numbers or an operator could cause problems!
// Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
// Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!


/* 

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}

*/


let srcOfInput = document.body.querySelector('.input-field');

let firstVal = ''
let secondVal = ''
let calcOperate = ''

function displayUpdate () {
    if (srcOfInput.innerText.length > 10){
        let newOutput = srcOfInput.innerText.substring(0,10)
        srcOfInput.innerText = newOutput
    }
}

const eraseButton = document.body.querySelector('#erase-button')
eraseButton.addEventListener('click', (e) => {
    firstVal = '';
    secondVal = '';
    calcOperate = '';
    srcOfInput.innerText = '';
    srcOfInput.style.fontSize = "250%"
    srcOfInput.style.justifyContent = "end"
})

const posiNegative = document.body.querySelector('#positive-negative')
posiNegative.addEventListener('click', (e) => {
        // if first value is selected but not the operator or second value
        if (firstVal !== '' && calcOperate === '' && secondVal === ''){
        firstVal = firstVal - (firstVal * 2);
        srcOfInput.innerText = firstVal;
        displayUpdate()
        /* else if first value, operator, and second value is selected,
        then the calculator will compute and take the result and convert it to negative/positive 
        */
    } else if ( firstVal !== '' && calcOperate !== '' && secondVal !== '') {
        equalsFunction();
        firstVal = firstVal - (firstVal * 2);
        srcOfInput.innerText = firstVal;
        displayUpdate()
    } else {
        window.alert(`can't convert the current equation of first value: ${firstVal} and operator: ${calcOperate} with second value: ${secondVal} to a negative/positive number`)
    }
    
})

const percentage = document.body.querySelector('#percentage');
percentage.addEventListener('click', (e) => {
    // if the first value is stored but there is no operator or second value, compute the first value as a percentage.
    if (firstVal !== '' && calcOperate === '' && secondVal === ''){
        firstVal = (parseFloat(firstVal * 100).toFixed(2)) + '%'
        srcOfInput.innerText = firstVal;
    } else if (firstVal !== '' && calcOperate !== '' && secondVal !== ''){
        equalsFunction();
        firstVal = (parseFloat(firstVal * 100).toFixed(2)) + '%'
    } else {
        window.alert(`can't convert the current equation of first value: ${firstVal} and operator: ${calcOperate} with second value: ${secondVal} to a percentage`)

    }
})


const equalsButton = document.body.querySelector('#equals');
equalsButton.addEventListener('click', (e) => {
    return equalsFunction();
})

// creating queryselectorarray from all numbers input
const numbersInput = document.body.querySelectorAll('.numbers');
// handling arrray with a foreach function and adding the vallues of the innertext
numbersInput.forEach(element => element.addEventListener('click', (e) => {
    // console.log(`button with inner text ${element.innerText}`)
    // adding the values to a or b variables to calculate based on conditions below
    // if a is empty add the value
    
    if (firstVal === ''){
        firstVal += element.innerText;
        srcOfInput.innerText += firstVal;
        displayUpdate();
    // if a is not empty but no operator has been assigned add the second value to the first value i.e. 1 and 2 == 12
    } else if (firstVal !== '' && calcOperate === '') {
        firstVal += element.innerText;
        srcOfInput.innerText = firstVal;
        displayUpdate();
    // if a is not empty and operator is not empty then the b value will be assigned with the pressed button.
    } else if (firstVal !== '' && calcOperate !== '') {
        secondVal += element.innerText;
        srcOfInput.innerText = firstVal + calcOperate + secondVal;
        displayUpdate()
    }
}))


// creating queryselectorall array from all operators input
const operatorInput = document.body.querySelectorAll('.operator');
// hadnling array with a foreach function adn adding the values of innertext
operatorInput.forEach(element => element.addEventListener('click', (e) => {
    // if the operator is empty and a is not empty
    if (calcOperate === '' && firstVal !== '') {
        calcOperate += element.innerText;
        srcOfInput.innerText += calcOperate;
        // if the operator is not empty
    } else if (calcOperate !== '' && secondVal !== '') {
        return equalsFunction(), calcOperate = element.innerText, srcOfInput.innerText += calcOperate;
    }
}))

// Equalsfunction is a function that will evaluate which mathematical operation to execute
// for example if the operator is assigned to '+' then the equalsfunction will call on the addition function
const equalsFunction = (e) => {
    if (calcOperate === '+') {
        return addition(parseFloat(firstVal), parseFloat(secondVal))
    }
    else if (calcOperate === '-') {
        return subtraction(parseFloat(firstVal), parseFloat(secondVal))
    }
    else if (calcOperate === '*') {
        return multiply(parseFloat(firstVal), parseFloat(secondVal))
    }
    else if (calcOperate === '/') {
        return divide(parseFloat(firstVal), parseFloat(secondVal))
    }

}


// addition function, takes the value stored in the a variable and executes the values stored in 'a' with 'b' by adding them together.
function addition(a, b) {
    return firstVal = a + b,
    secondVal = '', 
    calcOperate = '',
    srcOfInput.innerText = firstVal,
    displayUpdate();
}

// subtraction function, takes the value stored in the variables and executes the values stored in 'a' with 'b' by subtracting 'a' by 'b'.
function subtraction(a, b) {
    return firstVal = a - b,
    secondVal = '',
    calcOperate = '',
    srcOfInput.innerText = firstVal,
    displayUpdate();
}

// multiply function, takes the value stored in the variables and executes the values stored in 'a' with 'b' by multiplying 'a' with 'b'.
function multiply(a, b) {
    return firstVal = a * b,
    secondVal = '',
    calcOperate = '',
    srcOfInput.innerText = firstVal,
    displayUpdate();
}

// divide function, takes the value stored in the variables and executes the values stored in 'a' with 'b' by dividing 'a' by 'b'.
function divide(a, b) {
    if (secondVal === "0") {
        srcOfInput.style.fontSize = "100%"
        srcOfInput.style.justifyContent = "center"
        srcOfInput.innerText = "Error! Can't divide by zero"
    } else {
        return firstVal = a / b,
        secondVal = '',
        calcOperate = '',
        srcOfInput.innerText = firstVal,
        displayUpdate();
    }
    
}




