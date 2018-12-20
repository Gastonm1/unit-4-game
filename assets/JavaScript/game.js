// =================PSEUDO CODE===================================================================================
// Start with 4 crystals DONE
// Every crystal needs to be assigned a random number between 1-12 DONE
// When any crystal is clicked, its value should be adding to the previous number until it matches the total. DONE
// if it is greater than total, then we increment the loss counter; then reset DONE
// If it is equal, then add one win to the win counter, then reset DONE
// A new number needs to be generated to each crystal every time user Wins or Loses DONE
$(document).ready(function() {
  //==================GLOBAL VARIABLES===============================================================================
  var randResult;
  var losses = 0;
  var wins = 0;
  var previous = 0;

  //=================================================================================================================

  // Initialization
  function init() {
    randResult = Math.floor(Math.random() * 101) + 19;
    //console.log(randResult);
    $("#result").text("NASA needs you to gather " + randResult + " crystals!");
    //console.log(randResult);

    var random1 = Math.floor(Math.random() * 11) + 1;
    var random2 = Math.floor(Math.random() * 11) + 1;
    var random3 = Math.floor(Math.random() * 11) + 1;
    var random4 = Math.floor(Math.random() * 11) + 1;

    $("#bluegem").attr("data-random-number", random1);

    $("#greengem").attr("data-random-number", random2);

    $("#purplegem").attr("data-random-number", random3);

    $("#redgem").attr("data-random-number", random4);
  }

  //Lose & Win Counters
  function checkWinLosses() {
    console.log(previous);
    console.log(randResult);
    if (previous > randResult) {
      losses++;
      //console.log("You lost!");
      $("#losses").text("Unsucessful Mining Days " + losses);
      previous = 0;
      init();
    } else if (previous === randResult) {
      wins++;
      //console.log("You Win!");
      $("#wins").text("Sucessful Mining Days " + wins);
      previous = 0;
      init();

    }
  }
  init();

  //User Click

  $(document).on("click", "#bluegem", function() {
    var num = parseInt($(this).attr("data-random-number"));
    previous += num;
    //console.log(previous);
    $("#spaceBag").html("Crystals in your spacebag: " + previous);
    checkWinLosses();
  });

  $(document).on("click", "#greengem", function() {
    var num = parseInt($(this).attr("data-random-number"));
    previous += num;
    //console.log(previous);
    $("#spaceBag").html("Crystals in your spacebag: " + previous);
    checkWinLosses();
  });

  $(document).on("click", "#purplegem", function() {
    var num = parseInt($(this).attr("data-random-number"));
    previous += num;
    //console.log(previous);
    $("#spaceBag").html("Crystals in your spacebag: " + previous);
    checkWinLosses();
  });

  $(document).on("click", "#redgem", function() {
    var num = parseInt($(this).attr("data-random-number"));
    previous += num;
    //console.log(previous);
    $("#spaceBag").html("Crystals in your spacebag: " + previous);
    checkWinLosses();
  });
  init();
});
