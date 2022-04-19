// au click sur le bouton newGame: les joueurs peuvent entrer leurs noms


let newGame = document.getElementById("newGame");
let playerOne = "PLAYER ONE";
let playerTwo = "PLAYER TWO";

//Start : Player names customization

newGame.addEventListener("click", () => {
	getPlayerNames();
});

function getPlayerNames() {
	playerOne = prompt("PlayerOne: Enter Your Name");
	playerTwo = prompt("PlayerTwo: Enter Your Name");

	document.getElementById("player-0").innerHTML = playerOne;
	document.getElementById("player-1").innerHTML = playerTwo;
	document.getElementById("pin-0").style.display = "block";
}
