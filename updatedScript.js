/*
TO DO LIST: 

Coming up with a stopper for the event listener DONE
Check Match should be in the timeout. DONE
Adding game-ending condition DONE
3-Levels. DONE 2 Levels
Game over image, and Restart game state in 5 seconds. DONE


To add in Refresher Timer. DONE
Prevent clicking on the same card. DONE

*/
var cardFlipSpeed = 900;
var waitTime = 600;
var pastScores = [];
var cards = [
	{
	id: 0,
	suit: "clubs",
	number: 2,
	link:"Cards/cardClubs2.png"
	},
	{
	id: 1,
	suit: "clubs",
	number: 3,
	link: "Cards/cardClubs3.png"
	},
	{
	id: 2,
	suit: "clubs",
	number: 4,
	link: "Cards/cardClubs4.png"
	},
	{
	id: 3,
	suit: "clubs",
	number: 5,
	link: "Cards/cardClubs5.png"
	},
	{
	id: 4,
	suit: "clubs",
	number: 6,
	link: "Cards/cardClubs6.png"
	},
	{
	id: 5,
	suit: "clubs",
	number: 7,
	link: "Cards/cardClubs7.png"
	},
	{
	id: 6,
	suit: "clubs",
	number: 8,
	link: "Cards/cardClubs8.png"
	},
	{
	id: 7,
	suit: "clubs",
	number: 9,
	link: "Cards/cardClubs9.png"
	},
	{
	id: 8,
	suit: "clubs",
	number: 10,
	link: "Cards/cardClubs10.png"
	},
	{
	id: 9,
	suit: "clubs",
	number: 11,
	link: "Cards/cardClubsJ.png"
	},
	{
	id: 10,
	suit: "clubs",
	number: 13,
	link: "Cards/cardClubsK.png"
	},
	{
	id: 11,
	suit: "clubs",
	number: 12,
	link: "Cards/cardClubsQ.png"
	},
	{
	id: 12,
	suit: "clubs",
	number: 1,
	link: "Cards/cardClubsA.png"
	},
	{
	id: 13,
	suit: "diamonds",
	number: 2,
	link: "Cards/cardDiamonds2.png"
	},
	{
	id: 14,
	suit: "diamonds",
	number: 3,
	link: "Cards/cardDiamonds3.png"
	},
	{
	id: 15,
	suit: "diamonds",
	number: 4,
	link: "Cards/cardDiamonds4.png"
	},
	{
	id: 16,
	suit: "diamonds",
	number: 5,
	link: "Cards/cardDiamonds5.png"
	},
	{
	id: 17,
	suit: "diamonds",
	number: 6,
	link: "Cards/cardDiamonds6.png"
	},
	{
	id: 18,
	suit: "diamonds",
	number: 7,
	link: "Cards/cardDiamonds7.png"
	},
	{
	id: 19,
	suit: "diamonds",
	number: 8,
	link: "Cards/cardDiamonds8.png"
	},
	{
	id: 20,
	suit: "diamonds",
	number: 9,
	link: "Cards/cardDiamonds9.png"
	},
	{
	id: 21,
	suit: "diamonds",
	number: 10,
	link: "Cards/cardDiamonds10.png"
	},
	{
	id: 22,
	suit: "diamonds",
	number: 11,
	link: "Cards/cardDiamondsJ.png"
	},
	{
	id: 23,
	suit: "diamonds",
	number: 12,
	link: "Cards/cardDiamondsQ.png"
	},
	{
	id: 24,
	suit: "diamonds",
	number: 13,
	link: "Cards/cardDiamondsK.png"
	},
	{
	id: 25,
	suit: "diamonds",
	number: 1,
	link: "Cards/cardDiamondsA.png"
	},
	{
	id: 26,
	suit: "hearts",
	number: 2,
	link: "Cards/cardHearts2.png"
	},
	{
	id: 27,
	suit: "hearts",
	number: 3,
	link: "Cards/cardHearts3.png"
	},
	{
	id: 28,
	suit: "hearts",
	number: 4,
	link: "Cards/cardHearts4.png"
	},
	{
	id: 29,
	suit: "hearts",
	number: 5,
	link: "Cards/cardHearts5.png"
	},
	{
	id: 30,
	suit: "hearts",
	number: 6,
	link: "Cards/cardHearts6.png"
	},
	{
	id: 31,
	suit: "hearts",
	number: 7,
	link: "Cards/cardHearts7.png"
	},
	{
	id: 32,
	suit: "hearts",
	number: 8,
	link: "Cards/cardHearts8.png"
	},
	{
	id: 33,
	suit: "hearts",
	number: 9,
	link: "Cards/cardHearts9.png"
	},
	{
	id: 34,
	suit: "hearts",
	number: 10,
	link: "Cards/cardHearts10.png"
	},
	{
	id: 35,
	suit: "hearts",
	number: 11,
	link: "Cards/cardHeartsJ.png"
	},
	{
	id: 36,
	suit: "hearts",
	number: 12,
	link: "Cards/cardHeartsQ.png"
	},
	{
	id: 37,
	suit: "hearts",
	number: 13,
	link: "Cards/cardHeartsK.png"
	},
	{
	id: 38,
	suit: "hearts",
	number: 1,
	link: "Cards/cardHeartsA.png"
	},
	{
	id: 39,
	suit: "spades",
	number: 2,
	link: "Cards/cardSpades2.png"
	},
	{
	id: 40,
	suit: "spades",
	number: 3,
	link: "Cards/cardSpades3.png"
	},
	{
	id: 41,
	suit: "spades",
	number: 4,
	link: "Cards/cardSpades4.png"
	},
	{
	id: 42,
	suit: "spades",
	number: 5,
	link: "Cards/cardSpades5.png"
	},
	{
	id: 43,
	suit: "spades",
	number: 6,
	link: "Cards/cardSpades6.png"
	},
	{
	id: 44,
	suit: "spades",
	number: 7,
	link: "Cards/cardSpades7.png"
	},
	{
	id: 45,
	suit: "spades",
	number: 8,
	link: "Cards/cardSpades8.png"
	},
	{
	id: 46,
	suit: "spades",
	number: 9,
	link: "Cards/cardSpades9.png"
	},
	{
	id: 47,
	suit: "spades",
	number: 10,
	link: "Cards/cardSpades10.png"
	},
	{
	id: 48,
	suit: "spades",
	number: 11,
	link: "Cards/cardSpadesJ.png"
	},
	{
	id: 49,
	suit: "spades",
	number: 12,
	link: "Cards/cardSpadesQ.png"
	},
	{
	id: 50,
	suit: "spades",
	number: 13,
	link: "Cards/cardSpadesK.png"
	},
	{
	id: 51,	
	suit: "spades",
	number: 1,
	link: "Cards/cardSpadesA.png"
	}
]

var ding = new sound("ding.mp3");
var flip = new sound("flip.wav");

// 
var boardCards = [];

var score = 0;
var time;

//Check the stage of the game
var stage;

//Check if game has started, so that we only call the number once
var hasGameStarted = false;
  
//Variable to store the number of matches needed to win 
var matchesToWin;

//Declared this timerInterval as a global variable so that we can use it in different functions.
var timerInterval;

//Countdown to new Game
var refreshCount = 5;

var shuffledCards;

// resultBoard is the board in which the check for match will be done. 
var resultBoard = [];

var cardsInPlay = [];

var winOrLose = "Lose"

//Create a board which makes n * n squares

//Sound effects
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function makeBoard(n) {
	//Make a main div to contain the board first
	var mainBoard = document.createElement('div');
	//Because we are using Bootstrap, we will use container class.
	mainBoard.classList.add('mainblock')
	mainBoard.classList.add('container');
	mainBoard.id = "mainBoard";

	for(let i = 0; i < n; i++){
		var row = document.createElement('div');
		row.classList.add('row');
			row.id = "row-"+i
			row.style.width = "700px"
			if (n > 5){
				row.style.height = "110px"
			} else {
				row.style.height = "190px";
			}
			
		//Within each row, create n col
		for(let j = 0; j < n; j++){
			var col = document.createElement('div');
			col.classList.add('col');
			col.classList.add('col-'+(12/(n+1)));
			col.id = "col-"+i+j;

			if(n < 5) {
				col.innerHTML = "<div class=\"flipper\"><div class=\"front\"><img src=\"Cards/cardBack_red5.png\"></img></div><div class=\"back\"></div></div>"
				col.style.height = "190px"
				col.style.width = "140px"
			} else {
				col.innerHTML = "<div class=\"flipper\"><div class=\"front\"><img height = \"100\" src=\"Cards/cardBack_red5.png\"></img></div><div class=\"back\"></div></div>"
				col.style.height = "100px";
				col.style.width = "73.68px"
				}
			
			row.appendChild(col);
		}
		mainBoard.appendChild(row);
	}
	document.body.appendChild(mainBoard);

	//Re-adjusts DOM sizes when number of squares is greater than 5
	if (n > 5) {
		var allFlipperDiv = document.querySelectorAll(".flipper")
		var allFrontDiv = document.querySelectorAll(".front")
		var allBackDiv = document.querySelectorAll(".back")

		for(let i = 0; i < allFlipperDiv.length; i++){
			
			allFlipperDiv[i].style.height = "100px"
			allFlipperDiv[i].style.width = "73.68px"

			allFrontDiv[i].style.height = "100px"
			allFrontDiv[i].style.width = "73.68px"

			allBackDiv[i].style.height = "100px"
			allBackDiv[i].style.width = "73.68px"
		}
	}
};

function setTime(){
	if (stage == 1){
		time = 90;
	} else if(stage == 2){
		time = 3;
	}
}

function setMatchesToWin(){
	if (stage == 1){
		matchesToWin = (Math.pow(4,2)/2)
	} else if(stage == 2){
		matchesToWin = ((Math.pow(6,2)/2) + (Math.pow(4,2)/2))
	}
}

function generateFullBoard(n){// CHANGE N TO ROWS
	// Clear JavaScript Board
	resultBoard = [];
	//Generate the HTML DOMs for the board
	makeBoard(n);
	//Add query selectors
	addEventListener();
	//Shuffle cards
	cards = shuffle(cards);
	// Choose the matching pairs
	pushBoard(n);
	// Shuffle their position
	boardCards = shuffle(boardCards);
	// Make the board an n*n array 
	createBoard(n);
	// Add in images of card when it is flipped over
	populateBackImages(n);
	// Define number of matches to win
	setMatchesToWin();
	// Set the time;
	setTime();
	// So that timer function will only be called on the first click
	hasGameStarted = false;

		
}

const gameState = {
	current: 0,
	inGame: 0,
	endGame: 1
}


//Board generated from the start
function changeState(){
	switch(gameState.current){
		case(0):
			//Reset Global Variables
			score = 0
			stage = 1;
			generateFullBoard(4);
			
			//Populate past scores
			var pastScore = document.querySelector('#PastScore');
			pastScore.innerHTML = ""
			for(let i = 0; i < pastScores.length; i++){
				var record = document.createElement('li')
				record.innerText = pastScores[i].name+" "+pastScores[i].yourScore
				var mainBoard = document.querySelector('#mainBoard');
				pastScore.appendChild(record)	
			}
			break;

		case(1):
			showGameOverScreen();
			break;
	}
}

//Returns an array shuffled
function shuffle(array) {
	var shuffledArray = [], n = array.length, i;
	while (n) {
		//Randomly choses an integer between 0 to the number of cards remaining
		i = Math.floor(Math.random()*array.length)
		//So long the randomised i has not been deleted
		if (i in array) {
		shuffledArray.push(array[i]);
		delete array[i];
		 n --;
		}
	}
	//cards array are reshuffled
	return shuffledArray;
}

function pushBoard(n) {
	for(let i = 0; i < (Math.pow(n,2)/2) ; i++){
		//Pushes a matching pair of cards
		boardCards.push(cards[i].id);
		boardCards.push(cards[i].id);
	}
};

function createBoard(n) { 
	while(boardCards.length) {
	    resultBoard.push(boardCards.splice(0,n))
	}
	console.log(resultBoard)
}

function populateBackImages(n){
	var allCol = document.querySelectorAll('.col');
	for(let i = 0; i < allCol.length; i++){
				
		var currCol = allCol[i]

		//Each "col" has an id which describes its position in the resultBoard array
		//col-00 means resultBoard[0][0]
		var r = currCol.id.charAt(4);
		var c = currCol.id.charAt(5);

		var theId = resultBoard[r][c];

		//Find the object which has theId as its id.
		var imgObj = cards.find(x => x.id === theId);

		//This is to get the faceup image of the card

		var imgLink = imgObj.link

		var imgContainer = currCol.childNodes[0].childNodes[1];
		var img = document.createElement('img')
		img.setAttribute('src',imgLink);

		if(n>5){
			img.setAttribute('height',"100px");
			img.setAttribute('width',"73.68px");	
		}
		imgContainer.appendChild(img)
	}
}

// Event listener. What happens upon clicking.
function addEventListener() { 
	var allCol = document.querySelectorAll('.col');

	for(let i = 0; i < allCol.length; i++){
		allCol[i].addEventListener('click',function(){		

			//Once you click, the timer starts
			if(hasGameStarted == false){
				timer();
				hasGameStarted = true;
			} 

			var r = this.id.charAt(4);
			var c = this.id.charAt(5);

			var theId = resultBoard[r][c];

			cardsInPlay.push({
				iden: theId,
				locationid: r+c
			});

			//The below code is to prevent the bug of being able to flip the same card over and over again.
			if(cardsInPlay.length == 2 && cardsInPlay[0].locationid == cardsInPlay[1].locationid){
				var deletedCard = cardsInPlay.pop();
				return;

			} else if(cardsInPlay.length >= 2){
				//After two seconds, check if there is a match a respond accordingly. 
				// ">=" is used so that the code continues to run even if there are accidental clicks
				setTimeout(checkResult,waitTime,theId,r,c);	
			}

			//Prevents the third card from getting flipped over.
			if(cardsInPlay.length < 3) {
				this.classList.toggle('flipped');
				flip.play();
			}

		})
	}
}

//This function flips the card back if they are open
function flipCardBack() {
	var allCol = document.querySelectorAll('.col');
	for(let i = 0; i<allCol.length; i++){
		/* 
		if(!(allCol[i].hasChildNodes())){
		 	continue;
		}
		*/ 
		if( allCol[i].classList.contains('flipped') === true ) {
			allCol[i].classList.remove('flipped');
			flip.play();
		}
	}
}

function clearCards(theId,r,c) {
	//Find the cards[].id of the card clicked.
	
	var rowOfMatchingID;
	var colOfMatchingID;

	//We need to keep track of the card
	var thisID = theId
	delete resultBoard[r][c];
	
	for(let i = 0; i < resultBoard.length; i++){
		if(resultBoard[i].indexOf(thisID) >= 0) {
			rowOfMatchingID = i;
			colOfMatchingID = resultBoard[i].indexOf(thisID);
			break;
		}
	}

	var firstCardToRemove = document.querySelector('#col-'+r+c);
	var secondCardToRemove = document.querySelector('#col-'+rowOfMatchingID+colOfMatchingID);
	
	firstCardToRemove.removeChild(firstCardToRemove.childNodes[0]);
	secondCardToRemove.removeChild(secondCardToRemove.childNodes[0]);
	ding.play();

	delete resultBoard[rowOfMatchingID][colOfMatchingID]
}

function checkResult(theId,r,c) {
	//This code prevents a bug where the computer reads a match when you click at the same card twice.
	if(cardsInPlay[0].iden == cardsInPlay[1].iden){
		score++
		clearCards(theId,r,c);

		//Check if the game has ended.
		if(score >= matchesToWin){
			if (stage == 1){
				var mainBoard = document.querySelector('#mainBoard');
				mainBoard.parentNode.removeChild(mainBoard);
				timer();
				stage++
				generateFullBoard(6);

			} else if(stage == 2) {

				winOrLose = "Win";
				timer();
				gameState.current = gameState.endGame;
				changeState();

			}
		}

	} else {
		flipCardBack();
	}

	var scoreDisplay = document.querySelector("#scoreDisplay");
	scoreDisplay.innerText = "Score: "+score
	
	//Reset the cardsInPlay array so we can check the next 2 cards.
	cardsInPlay.length = 0;
}

function showGameOverScreen(){
	var mainBoard = document.querySelector('#mainBoard');
	mainBoard.innerHTML = "";

	var gameStatement = document.createElement('p');
	gameStatement.id = "gameStatement"
	gameStatement.innerText = "You "+winOrLose+". Your score is "+score+"\n Enter your name below to submit your score."
	mainBoard.appendChild(gameStatement)

	//Create Input
	var nameInput = document.createElement('input');
	nameInput.id = "nameInput"
	nameInput.setAttribute("type", "text");
	nameInput.addEventListener('change',function(){
		
		var currentName = event.target.value;
		pastScores.push({name: currentName, yourScore: score})
		
		if(pastScores.length >= 5){
			pastScores.shift()
		}

		var mainBoard = document.querySelector('#mainBoard');
		mainBoard.parentNode.removeChild(mainBoard);
		
		gameState.current = gameState.inGame;
		changeState();
	})

	mainBoard.appendChild(gameStatement)
	mainBoard.appendChild(nameInput)
}

var timerStat = "off";
var timeoutFunction;

function timer() {
	
	// This if-else statement acts like a switch 
	// Call it once, it switches on, call it again it switches off
	if(timerStat == "off"){
		timerStat = "on";
	} else if(timerStat == "on"){
		timerStat = "off"
	}

	// What happens if it is off, what happens if its on.
	if(timerStat == "off"){
		clearInterval(timerInterval);
		clearTimeout(timeoutFunction);
	} else {
		var timerDisplay = document.querySelector("#timerDisplay");
		timerDisplay.innerText = "Timer : "+time

		//Countdown function
		timerInterval = setInterval(function(){ 
			time--
			timerDisplay.innerText = "Timer : "+time	
		}, 1000);

		//Terminates game timer when it reaches zero
		timeoutFunction = setTimeout(function() {
		// This below is required so that when timer() calls again
		// It starts the timer rather than stops it.
		timerStat = "off";
		clearInterval(timerInterval)
		gameState.current = gameState.endGame;
		changeState();
		}, (time*1000));
	}
}

		

//This call starts the whole game :)
changeState();