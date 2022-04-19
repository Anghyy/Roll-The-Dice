//Reset all scores for a new game

function gameReset() {
	gameStarted = true;
	activePlayer = 0;
	roundScore = 0;
	globalScore = [0, 0];

	document.getElementById("dice").style.display = "none";
	document.getElementById("player-0").textContent = "PlayerOne";
	document.getElementById("player-1").textContent = "PlayerTwo";
	document.getElementById("pin-0").style.display = "none";
	document.getElementById("pin-1").style.display = "none";
	document.getElementById("roundScore-0").textContent = "0";
	document.getElementById("roundScore-1").textContent = "0";
	document.getElementById("globalScore-0").textContent = "0";
	document.getElementById("globalScore-1").textContent = "0";
}
gameReset();

// Next player

function next() {
	if (activePlayer === 0) {
		document.getElementById("pin-0").style.display = "none";
		document.getElementById("pin-1").style.display = "block";
		document.getElementById("player-1").style.fontWeight = "bold";
		document.getElementById("player-0").style.fontWeight = "normal";
		document.getElementById("roundScore-0").textContent = "0";
		document.getElementById("roundScore-1").textContent = "0";
		return (activePlayer = 1);
	} else {
		document.getElementById("pin-0").style.display = "block";
		document.getElementById("pin-1").style.display = "none";
		document.getElementById("player-0").style.fontWeight = "bold";
		document.getElementById("player-1").style.fontWeight = "normal";
		activePlayer = 0;
		roundScore = 0;
	}
}
