var p1Score = document.getElementById("p1"); // select player 1 button
var p2Score = document.getElementById("p2"); // select player 2 button
var resetButton = document.getElementById("reset"); // select reset button 
var p1Display = document.querySelector('#p1Display'); // select player 1 span to display score
var p2Display = document.querySelector('#p2Display'); // select player 2 span to display score
var input = document.querySelector("input"); // select input from form 
var score1 = 0; 
var score2 = 0;
var gameOver = false;
var winningScore = 5;

// change player 1 score when button clicked
p1Score.addEventListener("click", function(){
	if (!gameOver){
		score1++;
		p1Display.textContent = score1;
	} if (score1 === winningScore){
		p1Display.classList.add("winner");
		gameOver = true;
	}
});

// change player 2 score when button clicked
p2Score.addEventListener("click", function(){
	if (!gameOver){
		score2++;
		p2Display.textContent = score2;	
	} if (score2 === winningScore) {
		p2Display.classList.add("winner");
		gameOver = true;
	}
});

// call reset function when reset button clicked
resetButton.addEventListener("click", function(){
	reset();
});

// function to reset game back to 0
function reset(){
	score1 = 0;
	score2 = 0;
	p1Display.textContent = score1;
	p2Display.textContent = score2;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

// change max score to input from form
input.addEventListener("change", function(){
	scoreMax.textContent = input.value;
	winningScore = Number(input.value);
	reset();
});





