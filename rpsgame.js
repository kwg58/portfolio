function userPrompt() {
	document.getElementById("invalidResponse").innerHTML = (" "); 
	document.getElementById("userS").innerHTML = (" "); 
	document.getElementById("compS").innerHTML = (" ");
	document.getElementById("winningRule").innerHTML = (" ");
	document.getElementById("winnerID").innerHTML = (" ");   
	userAnswer = prompt("Enter your selection:", "rock paper scissors");
	uA1 = userAnswer.trim();
	uA2 = uA1.toLowerCase();
	/* alert("uA2 is " + uA2);  */
	if ((uA2 === "rock") || (uA2 === "scissors") || (uA2 === "paper")) {
		playGame(uA2);
	} else {
		alert("Invalid Response!  Enter 'rock' 'paper' or 'scissors'");
		document.getElementById("invalidResponse").innerHTML = (uA2 + " is an invalid response");
	}
}

function playGame(userChoice) {
	var computerChoice = computerChooses();
	var gameResults = compare(userChoice, computerChoice);
	var winrule = "";
	winner = gameResults[0];
	winningChoice = gameResults[1];
	if (winningChoice === "paper") {
		winRule = "Paper covers Rock";
	} else if (winningChoice === "scissors") {
		winRule = "Scissors cuts Paper";
    } else {
		winRule = "Rock smashes Scissors";
	}
	if (winner === "Tie") {
		winStmt = "Tie - No Winner";
		winRule = (winningChoice + " = " + winningChoice);
	} else {
		winStmt = (winner + " Wins!");
	}
	document.getElementById("invalidResponse").innerHTML = ("");
	setTimeout (function() {document.getElementById("userS").innerHTML = ("User Selects: " + userChoice);}, 500);
	setTimeout (function() {document.getElementById("compS").innerHTML = ("Computer Selects: ");}, 1500);
	setTimeout (function() {document.getElementById("compS").innerHTML = ("Computer Selects: " + computerChoice);}, 2500);
	setTimeout (function() {document.getElementById("winningRule").innerHTML = (winRule);}, 3500);
	setTimeout (function() {document.getElementById("winnerID").innerHTML = (winStmt);}, 5000);
	/* document.getElementById("userS").innerHTML = ("User Selects: " + userChoice); 
	document.getElementById("compS").innerHTML = ("Computer Selects: " + computerChoice);
	document.getElementById("winningRule").innerHTML = (winRule);
	document.getElementById("winnerID").innerHTML = (winStmt);   */
}


function computerChooses() {
	var compChoice = Math.random();
	if (compChoice < 0.34) {
		return "rock";
	} else if (compChoice <= 0.67) {
		return "paper";
    } else {
		return "scissors";
	}
}
function compare(choiceU, choiceC) {
    if (choiceU === choiceC) {
        return ["Tie", choiceU];
    } else if (choiceU === "rock") {
		if (choiceC === "scissors") {
			return ["User", choiceU];
        } else {
			return ["Computer", choiceC];
		}
	} else if (choiceU === "paper") {
		if (choiceC === "rock") {
			return ["User", choiceU];
        } else {
			return ["Computer", choiceC];
		}
	} else if (choiceU === "scissors") {
		if (choiceC === "rock") {
			return ["Computer", choiceC];
        } else {
			return ["User", choiceU];
		}
	}
}
function setActiveMenuOption(pageID) {
	document.getElementById(pageID).className = "active";
}
