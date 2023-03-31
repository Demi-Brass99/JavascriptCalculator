

var calculation = 0;
var currentSymbol = "";

var symbols = ['+','.','-','/','*'];

window.onload = function() {

    calculation = 0;
    clearCalculator();
    
}

function clickbutton(value) {

    var isSymbol = false;
    for (var i = 0; i < symbols.length; i++) {
        if (value == symbols[i]) {
            isSymbol = true;
            currentSymbol = value;
        }
    }

    if(!isSymbol) {
        calculation *= 10;
        calculation += value;
        if(currentSymbol == '.') {
            calculation /= 10;
            //currentSymbol = '';
        }
    }

    document.getElementById("CalculationOutput").value = calculation;


}

function calulateSolution() {
    console.log(calculation);
}

function clearCalculator() {
    calculation = 0;
    document.getElementById("CalculationOutput").value = 0;
}



