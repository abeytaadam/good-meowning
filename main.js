$(document).ready(function() {

	console.log('JSLOADED');

	//Click events
	var clicks = 0;
	//Countdown to game start
	var count = 3;
	var timer = null;

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



	$('#gameClick').click(function() {
		$('.gameTitle').hide();
		clicks++;
		console.log(clicks);
		if (clicks == 1) {
			$('.gameInst').show();
			$('.row').show();
		} else if (clicks == 2) {
			$('#gameClick').hide();
			$('.row').show();
			$('.gameBoard').show();
			$('.gameInst').hide();
			$('.players').hide();
			$('#countDown').show();
			timer = setInterval(function() {
				handleTimer(count);
			}, 1000);
		}
	});

	function handleTimer() {
		if (count === 0) {
			clearInterval(timer);
			startGame();
		} else {
			$('#countDown').html(count);
			count--;
		}
	}

	// Resets global variables (So many! Figure out how to fix this!)
	function resetGame() {
		timer = null;
		count = 3;

		countA = 0;
		countS = 0;
		countD = 0;
		countF = 0;

		countJ = 0;
		countK = 0;
		countL = 0;
		countSC = 0;
		console.log(countA, countJ);

	}

	// Reset button click handler
	$('#resetBtn').click(function() {
		document.getElementById("#p1").src = "IMGs/sleepyCat.gif";
		document.getElementById("#p2").src = "IMGs/sleepyCat.gif";
		$("#gb1").text("A");
		$("#gb2").text("J");
		$("#countDown").show();
		$("#resetBtn").hide();
		resetGame();
		$("#countDown").text("Ready?");
		$('#countDown').show();
		timer = setInterval(function() {
			handleTimer(count);
		}, 1000);

	});

	// Stops game and declares winner
	function stopGame() {
		if (countF == 30) {
			$(document).off('keydown');
			$("#gb1").text("Player 1 wins!");
			document.getElementById("#p2").src = "IMGs/sleepyCatlose.gif";
		} else if (countSC == 30) {
			$(document).off('keydown');
			$("#gb2").text("Player 2 wins!");
			document.getElementById("#p1").src = "IMGs/sleepyCatlose.gif";
		}
		$('#resetBtn').show();
	}

	// Sets up the game board
	function startGame() {
		$('#countDown').hide();
		//Allows for only successive keypresses (a>s>d>f)
		$(document).keydown(function(event) {

			if (event.which == 65 && (countA == countF)) {
				countA++;
				$("#gb1").text("S");
			} else if (event.which == 83 && (countA > countS)) {
				countS++;
				$("#gb1").text("D");
			} else if (event.which == 68 && (countS > countD)) {
				countD++;
				$("#gb1").text("F");
			} else if (event.which == 70 && (countD > countF)) {
				countF++;
				$("#gb1").text("A");
			}
			console.log(countA, countS, countD, countF);

			//Shows progress of race through cat animations Player 1
			if (countF == 10) {
				document.getElementById("#p1").src = "IMGs/sleepyCat2.gif";
			} else if (countF == 20) {
				document.getElementById("#p1").src = "IMGs/sleepyCat3.gif";
			} else if (countF == 30) {
				document.getElementById("#p1").src = "IMGs/sleepyCat4.gif";
				stopGame();
			}

			//Allows for only successive keypresses (j>k>l>;)
			if (event.which == 74 && (countJ == countSC)) {
				countJ++;
				$("#gb2").text("K");
			} else if (event.which == 75 && (countJ > countK)) {
				countK++;
				$("#gb2").text("L");
			} else if (event.which == 76 && (countK > countL)) {
				countL++;
				$("#gb2").text(";");
			} else if (event.which == 186 && (countL > countSC)) {
				countSC++;
				$("#gb2").text("J");
			}
			console.log(countJ, countK, countL, countSC);


			//Shows progress of race through cat animations Player 2
			if (countSC == 10) {
				document.getElementById("#p2").src = "IMGs/sleepyCat2.gif";
			} else if (countSC == 20) {
				document.getElementById("#p2").src = "IMGs/sleepyCat3.gif";
			} else if (countSC == 30) {
				document.getElementById("#p2").src = "IMGs/sleepyCat4.gif";
				stopGame();
			}

		});
	}
	
	$('.gameInst').hide();
	$('.row').hide();
	$('.gameBoard').hide();
	$('#countDown').hide();
	$('#resetBtn').hide();


});