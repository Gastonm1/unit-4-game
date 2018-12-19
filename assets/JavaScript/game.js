// =================PSEUDO CODE===================================================================================
// Start with 4 crystals DONE
// Every crystal needs to be assigned a random number between 1-12 DONE
// When any crystal is clicked, its value should be adding to the previous number until it matches the total.
// if it is greater than total, then we increment the loss counter; then reset
// If it is equal, then add one win to the win counter, then reset
// A new number needs to be generated to each crystal every time user Wins or Loses

//==================GLOBAL VARIABLES===============================================================================
var randResult;
var losses = 0;
var wins = 0;
var previous = 0;
//=================================================================================================================

// Initialization

randResult = Math.floor(Math.random() * 101) + 19;
//console.log(randResult);
$("#result").html("NASA needs you to gather " + randResult + " crystals!");

function init() {
  var random1 = Math.floor(Math.random() * 11) + 1;
  var random2 = Math.floor(Math.random() * 11) + 1;
  var random3 = Math.floor(Math.random() * 11) + 1;
  var random4 = Math.floor(Math.random() * 11) + 1;

  $("#bluegem").attr("data-random-number", random1);

  $("#greengem").attr("data-random-number", random2);

  $("#purplegem").attr("data-random-number", random3);

  $("#redgem").attr("data-random-number", random4);

  //User Click
  $("#bluegem").on("click", function() {
    var num1 = parseInt($(this).attr("data-random-number"));
    previous += num;

    if (previous > randResult) {
      losses--;
      //console.log("You lost!");
      $("#Losses").html("Unsucessful Mining Days " + losses);
    } else if (previouos === randResult) {
      wins++;
      //console.log("You Win!")
      $("#wins").html("Sucessful Mining Days " + wins);
    }
  });

  $("#greenegem").on("click", function() {
    var num2 = $(this).attr("data-random-number");
    previous += num;
  });

  $("#purplegem").on("click", function() {
    var num3 = $(this).attr("data-random-number");
    previous += num;
  });

  $("#redgem").on("click", function() {
    var num4 = $(this).attr("data-random-number");
    previous += num;
  });

  init();
}
