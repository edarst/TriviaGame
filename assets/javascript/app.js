//Trivia game

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

$("game_over_container").hide();

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

	//Do I need to clearInterval here? I'm trying to get it to work, no dice.

}

function endTime(){

//Check what's entered by the user into each question

var q1 = $('input:radio[name="q1"]:checked').val();
var q2 = $('input:radio[name="q2"]:checked').val();
var q3 = $('input:radio[name="q3"]:checked').val();
var q4 = $('input:radio[name="q4"]:checked').val();
var q5 = $('input:radio[name="q5"]:checked').val();
var q6 = $('input:radio[name="q6"]:checked').val();
var q7 = $('input:radio[name="q7"]:checked').val();
var q8 = $('input:radio[name="q8"]:checked').val();
var q9 = $('input:radio[name="q9"]:checked').val();
var q10 = $('input:radio[name="q10"]:checked').val();

//increase the right or wrong count depending on the user's input
//Is there a better way to do this? This took forever and is hard to read

//Question 1

if(q1 == undefined){

	wrongCount++;

}

else if(q1 == "Beer"){

	rightCount++;

}

else{

	wrongCount++;

}

//Question 2

if(q2 == undefined){

	wrongCount++;

}

else if(q2== "Eat the frogs"){

	rightCount++;

}

else{

	wrongCount++;

}

//Question 3

if(q3 == undefined){

	wrongCount++;

}

else if(q3 == "Must bounce when dropped"){

	rightCount++;

}

else{

	wrongCount++;

}

//Question 4

if(q4 == undefined){

	wrongCount++;

}

else if(q4 == "Curse or using profane language"){

	rightCount++;

}

else{

	wrongCount++;

}

//Question 5

if(q5 == undefined){

	wrongCount++;

}

else if(q5 == "Cannibalism"){

	rightCount++;

}

else{

	wrongCount++;

}

//Question 6

if(q6 == undefined){

	wrongCount++;

}

else if(q6 == "Catch fish"){

	rightCount++;

}

else{

	wrongCount++;

}

//Question 7

if(q7 == undefined){

	wrongCount++;

}

else if(q7 == "Rabbits"){

	rightCount++;

}

else{

	wrongCount++;

}

//Question 8

if(q8 == undefined){

	wrongCount++;

}

else if(q8 == "Golf balls"){

	rightCount++;

}

else{

	wrongCount++;

}

//Question 9

if(q9 == undefined){

	wrongCount++;

}

else if(q9 == "Throwing objects"){

	rightCount++;

}

else{

	wrongCount++;

}

//Question 10

if(q10 == undefined){

	wrongCount++;

}

else if(q10 == "Play pinball machines"){

	rightCount++;

}

else{

	wrongCount++;

}

$("#right_answers").html(rightCount);
$("#wrong_answers").html(wrongCount);

	//show the end of the game container

	$("#game_over_container").show();

}

});

$("#gamover").on("click", function(){

	//Is this where clearInterval goes?
} 

	//

//Copyright 2017 Evan Darst
//Use limited to educational use only