let numBtn = document.querySelectorAll('.num');
let operaterBtns = document.querySelectorAll('.operator');
let equalBtn = document.querySelector('.equal');
let clearBtn = document.querySelector('.clear');
let resultDisplay = document.querySelector('.result');
let allClearBtn = document.querySelector('.allClear');
let dotBtn = document.querySelector('.dot');


let computableStr = '';
let calculationDisplay = document.querySelector('.calculation');

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b
}
function mutiply(a, b) {
    return a * b
}
function divide(a, b) {
    if (b === 0) {
        computableStr = '';
        return 'Cannot Divide By Zero'
    } else {
        return a / b
    }
}

function operate(operater, a, b) {
    switch (operater) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return mutiply(a, b)
        case "/":
            return divide(a, b)
        default:
            return "Provide appropiate operator";
    }
}

function numFunc(btn) {
    if ((computableStr.endsWith('+') || computableStr.endsWith("-") || computableStr.endsWith("*") || computableStr.endsWith('/')) && resultDisplay.innerText.length > 0) {
        console.log(computableStr)
        calculationDisplay.innerText = computableStr;
        resultDisplay.innerText = '';
        displayCalc(btn)
        return
    }

    if (resultDisplay.innerText.length > 0 && resultDisplay.innerText.length > 0) {
        computableStr = '';
        calculationDisplay.innerText = computableStr;
        resultDisplay.innerText = '';
        displayCalc(btn)
    } else {
        displayCalc(btn)
    }

}


numBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
        numFunc(btn)
    })
})


operaterBtns.forEach((btn) => {
    btn.addEventListener('click', function () {

        if (computableStr.length === 0) {
            calculationDisplay.innerText = '';
            return
        }

        if (computableStr.includes('+') || computableStr.includes("-") || computableStr.includes("*") || computableStr.includes('/')) {
            let prevCalcVal = calculate();
            computableStr = '';
            calculationDisplay.innerText = computableStr;
            computableStr += prevCalcVal;
            calculationDisplay.innerText = computableStr;
            computableStr += btn.innerText
            calculationDisplay.innerText = computableStr;


        } else {
            displayCalc(btn)
        }
    })
})

function displayCalc(btn) {
    computableStr += btn.innerText;
    calculationDisplay.innerText = computableStr;
}

function calculate() {
    let operater = '';
    if (computableStr.includes('+')) {
        operater = "+"
    } else if (computableStr.includes("-")) {
        operater = '-'
    } else if (computableStr.includes("*")) {
        operater = "*"
    } else if (computableStr.includes('/')) {
        operater = "/"
    }

    let splitedArr = computableStr.split(operater);
    let numOne = +splitedArr[0];
    let numTwo = +splitedArr[1];

    console.log(numOne, numTwo, operater)

    let result = operate(operater, numOne, numTwo);
    if (result % 1 !== 0) {
        result = result.toFixed(2);
        resultDisplay.innerText = result;
        return result;
    } else {
        resultDisplay.innerText = result;
        return result
    }

}

function equalToFunc(){
    if (computableStr.length === 0) {
        calculationDisplay.innerText = '';
        return
    }
    calculate()

}

equalBtn.addEventListener('click', function () {
    equalToFunc()
})


clearBtn.addEventListener('click', function () {
    computableStr = computableStr.slice(0, -1);
    calculationDisplay.innerText = computableStr;
})

allClearBtn.addEventListener('click', function () {
    computableStr = '';
    calculationDisplay.innerText = '';
    resultDisplay.innerText = '';
})


function dotFunc(){
    if (computableStr.length === 0) {
        return
    }

    if (computableStr.endsWith('+') ||
        computableStr.endsWith('-') ||
        computableStr.endsWith('.') ||
        computableStr.endsWith('*') ||
        computableStr.endsWith('/')) {
        return;
    }


    let splitByOperators = computableStr.split(/[\+\-\*\/]/);
    let lastNum = splitByOperators.at(-1);
    
    if (lastNum.includes('.')) return;

    computableStr += ".";
    calculationDisplay.innerText = computableStr

}


dotBtn.addEventListener('click', function () {
    dotFunc()
})



document.addEventListener('keydown', function (e) {
    if ("0123456789".includes(e.key)) {
        if ((computableStr.endsWith('+') || computableStr.endsWith("-") || computableStr.endsWith("*") || computableStr.endsWith('/')) && resultDisplay.innerText.length > 0) {
            console.log(computableStr)
            calculationDisplay.innerText = computableStr;
            resultDisplay.innerText = '';
            computableStr += e.key;
            calculationDisplay.innerText = computableStr;
            return
        }

        if (resultDisplay.innerText.length > 0 && resultDisplay.innerText.length > 0) {
            computableStr = '';
            calculationDisplay.innerText = computableStr;
            resultDisplay.innerText = '';
            computableStr += e.key;
            calculationDisplay.innerText = computableStr;
        } else {
            computableStr += e.key;
            calculationDisplay.innerText = computableStr;
        }

    }

    if ("+-*/".includes(e.key)) {
        if (computableStr.length === 0) {
            calculationDisplay.innerText = '';
            return
        }

        if (computableStr.includes('+') || computableStr.includes("-") || computableStr.includes("*") || computableStr.includes('/')) {
            let prevCalcVal = calculate();
            computableStr = '';
            calculationDisplay.innerText = computableStr;
            computableStr += prevCalcVal;
            calculationDisplay.innerText = computableStr;
            computableStr += e.key
            calculationDisplay.innerText = computableStr;


        } else {
            computableStr += e.key;
            calculationDisplay.innerText = computableStr;
        }
    }


    if (e.key === 'Backspace') {
        computableStr = computableStr.slice(0, -1);
        calculationDisplay.innerText = computableStr;
    }

    if(e.key === '=' || e.key === 'Enter'){
        equalToFunc()
    }

    if(e.key === '.'){
        dotFunc()
    }

    console.log(e.key)
})