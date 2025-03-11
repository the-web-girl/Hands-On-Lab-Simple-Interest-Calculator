// Création d'une fonction pour modifier la valeur du curseur "taux"
// Creating a function to change the value of the "rate" slider

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

// Création d'une fonction et de variables pour les fonctionnalités du bouton de calcul
// Creating a function and variables for the calculation button functionality

function compute() {
    // implémentation des variables
    // implementation of variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
}