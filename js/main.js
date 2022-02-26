// CURRENCY

var USD = 10880;
var EURO = 13080;
var RUBL = 130;

// USER INPUT DATA

var elBtn  = document.querySelector(".converter__form-button");
var elConverter = document.querySelector(".converter");
var elConverterForm = document.querySelector(".converter__form");
var elUserInput  = document.querySelector(".converter__form-input");
var elFormSelect  = document.querySelector(".converter__form-select");
var elResult = document.querySelector(".result");

// Convert SUM to other currencies and display result -->

elConverterForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    console.log(elUserInput.value);
    console.log(elFormSelect.value);

    var result

    if (elFormSelect.value === "usd") {
        result = elUserInput.value * USD;

    } else if (elFormSelect.value === "euro") {
        result = elUserInput.value * EURO;

    } else if (elFormSelect.value === "rubl") {
        result = elUserInput.value * RUBL;
    }
    
    console.log(result);
    elResult.textContent = result;

})

