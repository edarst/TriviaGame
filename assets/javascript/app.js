//Copyright 2017 Evan Darst
//Use limited to educational use only

//Set a timer for the game

var timer = 60*1000;

//global variables for the number of correct and incorrect responses

var counter = 60;
var rightCount = 0;
var wrongCount = 0;


//ALL GAME FUNCTIONS

$(document).ready(function){

//hide the game container until game start

$("#game_container").hide();
//game over container hide

//set the on-click function for the begin button


$("#begin_button").on("click", function(){

	//hide the start container from user

	$("#begin_game_container").hide();

	//show user the game container

	$("#game_container").show();

	//start the countdown function

	startCountdown();
	return;


});

//lower countdown function

function countdown(){

	//Decrement count by 1 for user

	count--;

	//passing the count to the assigned ID

	$("#time_number").html(count + " seconds");

	//end game if timer equals 0

	if(count == -1){

		endTime();

		//hide the game container

		$("game_container").hide();
	}

}

//This increments the countdown by 1 second for the user

function startCountdown(){

	setInterval(countdown, 1000);

}

function endTime(){


	
}