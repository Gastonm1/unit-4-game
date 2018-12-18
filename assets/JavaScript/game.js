// =================PSEUDO CODE===================================================================================
// Start with 4 crystals
// Every crystal needs to be assigned a random number between 1-12
// A new number needs to be generated to each crystal every time user Wins or Loses
// When any crystal is clicked, its value should be adding to the previous number until it matches the total.
// if it is greater than RandNum, then we increment the loss counter; then reset
// If it is equal, then add one win to the win counter, then reset

//==================GLOBAL VARIABLES===============================================================================
var randNum;
var lost;
var win;
//=================================================================================================================

for (var i=0; i<4; i++) {
    var crystal = $("<div>");

    $(".crystals").append(crystal);
    console.log("Hello World")
}