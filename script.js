

var calculationString = "";

window.onload = function() {

    calculationString = "";
    
}

function clickbutton(value) {

    calculationString += value;
    document.getElementById("CalculationOutput").value = calculationString;


}

function calulateSolution() {
    console.log(parseInt(calculationString));
}

function clearCalculator() {
    calculationString = "";
    document.getElementById("CalculationOutput").value = calculationString;
}



