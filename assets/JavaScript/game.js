// =================PSEUDO CODE===================================================================================
// Start with 4 crystals DONE
// Every crystal needs to be assigned a random number between 1-12 DONE
// A new number needs to be generated to each crystal every time user Wins or Loses
// When any crystal is clicked, its value should be adding to the previous number until it matches the total.
// if it is greater than total, then we increment the loss counter; then reset
// If it is equal, then add one win to the win counter, then reset

//==================GLOBAL VARIABLES===============================================================================
var total;
var losses = 0;
var wins = 0;
//=================================================================================================================

// Initialization

function init() {
  var random1 = Math.floor(Math.random() * 12);
  var random2 = Math.floor(Math.random() * 12);
  var random3 = Math.floor(Math.random() * 12);
  var random4 = Math.floor(Math.random() * 12);

  $("#bluegem").attr("data-random-number", random1);

  $("#greengem").attr("data-random-number", random2);

  $("#purplegem").attr("data-random-number", random3);

  $("#redgem").attr("data-random-number", random4);
}

init();

$(".bluecrystal").click()