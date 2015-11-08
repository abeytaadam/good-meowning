$(document).ready(function() {

console.log('JSLOADED');


$('#gameClick').click(function() {
	$('#gameClick').hide();
	$('.gameTitle').hide();
	$('.row').show();
	$('.gameBoard').show();

});

$('.row').hide();
$('.gameBoard').hide();

//Player 1 keypresses
var countA = 0;
var countS = 0;
var countD = 0;
var countF = 0;

//Player 2 keypresses
var countJ = 0;
var countK = 0;
var countL = 0;
var countSC = 0;

//Allows for only successive keypresses (a>s>d>f & j>k>l>;)
$( document ).keydown(function( event ) {

  if ( event.which == 65 && (countA == countF)) {
   countA++;
  } else if (event.which == 83 && (countA > countS)) {
  	countS++;
  } else if (event.which == 68 && (countS > countD)) {
  	countD++;
  } else if (event.which == 70 && (countD > countF)) {
  	countF++;
  }
  console.log(countA, countS, countD, countF);

  if (countF == 10) {
	document.getElementById("#p1").src="IMGs/sleepyCat2.gif";
} else if (countF == 20) {
	document.getElementById("#p1").src="IMGs/sleepyCat3.gif";
} else if (countF == 30) {
	document.getElementById("#p1").src="IMGs/sleepyCat4.gif";
}

    if ( event.which == 74 && (countJ == countSC)) {
   countJ++;
  } else if (event.which == 75 && (countJ > countK)) {
  	countK++;
  } else if (event.which == 76 && (countK > countL)) {
  	countL++;
  } else if (event.which == 186 && (countL > countSC)) {
  	countSC++;
  }
  console.log(countJ, countK, countL, countSC);

    if (countSC == 10) {
	document.getElementById("#p2").src="IMGs/sleepyCat2.gif";
} else if (countSC == 20) {
	document.getElementById("#p2").src="IMGs/sleepyCat3.gif";
} else if (countSC == 30) {
	document.getElementById("#p2").src="IMGs/sleepyCat4.gif";
}

});

});
// function aOn () {
// 	if ()
// }

// });