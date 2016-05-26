function hangmanGame() {
	gameWon = 0;
	livesLeft = 5;
	objectWord = selectObjectWord();
	objectWordLength = objectWord.length;
	guessedLetters = "";
	gotLetters = "";
	stopGame = 0;
	document.getElementById("line1").innerHTML = ("You have " + livesLeft + " guesses");
	document.getElementById("line2").innerHTML = ("Your word is " + objectWordLength + " letters long");
	document.getElementById("line3").innerHTML = ("");
	document.getElementById('lettersToGuess').classList.toggle('hidden');
	document.getElementById('playButton').classList.toggle('hidden');
	document.getElementById('resetButton').classList.toggle('hidden');  
	document.getElementById("resetButton").innerHTML = ("Reset Game");
}
function selectLetter(guessIn) {
	nextGuess = guessIn.toLowerCase();
	guessResults = buildGuessedString(objectWord,  guessedLetters, nextGuess);
	gameWon = guessResults[0];
	guessCheck = guessResults[1];
	guessedLetters = guessResults[2];
	gotLetters = guessResults[3];
	livesLeft = (livesLeft - guessCheck);
	if (gameWon === 1) {
		document.getElementById("line1").innerHTML = ("You've Won!");
		document.getElementById("line2").innerHTML = ("The word was: " + gotLetters);
		document.getElementById("line3").innerHTML = ("");
		document.getElementById('lettersToGuess').classList.toggle('hidden');
		document.getElementById("resetButton").innerHTML = ("Play Again");
	} else if (livesLeft === 0) {
		document.getElementById("line1").innerHTML = ("You're out of lives - You've lost!");
		document.getElementById("line2").innerHTML = ("The word was: " + objectWord);
		document.getElementById("line3").innerHTML = ("");
		document.getElementById('lettersToGuess').classList.toggle('hidden');
		document.getElementById("resetButton").innerHTML = ("Play Again");
	} else {
		document.getElementById("line1").innerHTML = ("Here are the letters you have guessed correctly so far: " + gotLetters);
		document.getElementById("line2").innerHTML = ("So far you have made the following guesses:  " + guessedLetters);
		document.getElementById("line3").innerHTML = ("You have " + livesLeft + " guesses remaining.");
		document.getElementById(guessIn).classList.toggle('hidden');
	}
}
function selectObjectWord() {
	/* return "steak";  */
	/* "buffalo”, “narwhal”, “stingray”, “parrot”, “crab”, “whale”, “penguin”, “cheetah”, “eagle”, “squash”, “eggplant”, “carrots”, “pumpkin”, “pistachio”, “bacon”, “spinach”, “meatballs”, “cucumber”, “beggars”, “choosers”, “square”, “wrong”, “beeline”, “charm”, “letter”, “pickle”, “stuck”, “better”, “grapevine”, “friend”, “bridge”, “against”, “spitting”, “image”, “candle”, “buddy”, “shower”, “curtain”, “violin”, “plastic”, “loveseat”, “laundry”, “basket”]; */
	possibleWords = ["buffalo", "narwhal", "stingray", "parrot", "crab", "whale", "penguin", "cheetah", "eagle"];
	foodWords = ["cucumber", "spinach", "eggplant", "zucchini", "squash", "okra", "beans", "chickpeas", "lettuce"];
	selectIndex = Math.floor(Math.random() * 9);
	/* alert("SelectIndex is " + selectIndex);
	alert("Selected word is " + possibleWords[selectIndex]);  */
	return possibleWords[selectIndex];

}

function buildGuessedString(objectWordIn, guessedLettersIn, nextGuessIn) {
	/* Recive objectWord, guessedLetters, the current letter, and the number of lives left             */
	/* Compare the object word to the string of guessed letters and to the current guess               */
	/* Return gameWon (0 or 1), livesLeftXX (0 if the letter guessed was correct, 1 if it was wrong),  */
    /* a string of the guessed letters, and a string containing the objectWord with the letters that   */
	/* haven't been guessed replaced with underscores                                                  */
	
    var guessedLettersLocal = (guessedLettersIn + nextGuessIn);
	var gotLetters = "";
	var gameWonLocal = 0;
	for	(var i = 0; i < objectWordIn.length; i++) {
		var checkLetter = objectWordIn.substr(i,1);
		var checkLetterReturn = guessedLettersLocal.indexOf(checkLetter);
		if (checkLetterReturn === -1) {
			gotLetters = gotLetters + "_";
		}
		else {
		  gotLetters = (gotLetters + checkLetter);
		}
	}
	/* Check to see if the object word has been guessed.  If so, set gameWon to signal that the game has been won     */
	if (gotLetters === objectWordIn) {
		gameWonLocal = 1;
	}
	/* If the letter guessed this cycle is not in the object word, decrement the lives left variable                  */
	checkNextGuess = objectWordIn.indexOf(nextGuessIn);
	if (checkNextGuess === -1) {
		guessWrong = 1;
	}
	else {
		guessWrong = 0;
	}
	/* Sort guessed letters */
	gLLArray = guessedLettersLocal.split("");
	gLLArray.sort();
	guessedLettersSorted = gLLArray.join("");
	
  return [gameWonLocal, guessWrong, guessedLettersSorted, gotLetters];
}