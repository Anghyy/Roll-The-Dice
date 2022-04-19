// Start : Roll the dice
document.getElementById("rollBtn").addEventListener("click", () => {
	if (gameStarted) {
		const randomNumber = Math.floor(Math.random() * 6) + 1; //random nbr <-> 1 and 6

		const diceImg = document.getElementById("dice"); //Grab the image
		diceImg.src = "Assets/dice" + randomNumber + ".png"; //indicate the dice nbr image to choose from the assests folder
		diceImg.style.display = "block"; //display the image

		const pin = document.getElementById("pin-" + activePlayer);

		if (randomNumber !== 1) {
			// if random number is not = to 1
			roundScore += randomNumber;
			document.getElementById("roundScore-" + activePlayer).textContent =
				randomNumber; //grab the result and display it in the roundScore as a text
		} else if (randomNumber === 1) {
			document.getElementById("roundScore-" + activePlayer).textContent = "0";
			next(); //next player starts
		}
	}
});

//start : Hold button
document.getElementById("holdBtn").addEventListener("click", () => {
	if (gameStarted) {
		globalScore[activePlayer] += roundScore;
		document.getElementById("globalScore-" + activePlayer).textContent =
			globalScore[activePlayer];

		if (globalScore[activePlayer] >= 100) {
			document.getElementById("player-" + activePlayer).textContent = "You Won";
			document.getElementById("dice").style.display = "none";
			gameStarted = false;
			
		} else {
			next();
		}
	}
});
