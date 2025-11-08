function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b
}
function mutiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}

function operate(operater,a,b){
    switch(operater){
        case "+":
           return  add(a,b)
        case "-":
            return subtract(a,b)
        case "*":
            return  mutiply(a,b)
        case "/":
             return divide(a,b)
        default:
            return "Provide appropiate operator";
    }
}

console.log(operate("+",2,3));
console.log(operate("-",2,3));
console.log(operate("*",2,3));
console.log(operate("/",2,3));