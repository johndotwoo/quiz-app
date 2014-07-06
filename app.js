$(document).ready(function() {
	// object that contains questions, choices and correct answer
	var allQuestions = [
	{
		qNumber: 1,
		question: "Which Atari game cited as one of the 'worst video games released' was excavated from an Alamogordo, NM landfill in April 2014?",
		choices: ["Pong", "Custer's Revenge", "BurgerTime", "E.T. the Extra-Terrestrial"],
		correctAnswer: 4,
		correctAnswerBlurb: "That's correct!",
		incorrectAnswerBlurb: "Sorry, that's not the right Atari game!"
	}, 
	{
		qNumber: 2,
		question: "Which computer game developed by iD Software in 1992 helped popularize the first-person shooter genre?",
		choices: ["Battlezone", "Catacomb 3-D", "Wolfenstein 3D", "Blake Stone: Aliens of Gold"],
		correctAnswer: 3,
		correctAnswerBlurb: "That's correct!",
		incorrectAnswerBlurb: "Sorry, that's not the right first person shooter!"
	}, 
	{
		qNumber: 3,
		question: "Which computer game developed by Origin Systems in 1990 revolutionized the space combat simulation genre?",
		choices: ["Wing Commander", "X-Wing", "Gradius", "Descent"],
		correctAnswer: 1,
		correctAnswerBlurb: "That's correct!",
		incorrectAnswerBlurb: "Sorry, that's not the right space shooter!"
	}, 
	{
		qNumber: 4,
		question: "Which computer game first developed in 1972, based on a historical trail, allowed you to hunt for wild game, succumb to dysentary and lead your group to the Willamette Valley in the West?",
		choices: ["The Amazon Trail", "The Yukon Trail", "The Oregon Trail", "Africa Trail"],
		correctAnswer: 3,
		correctAnswerBlurb: "That's correct!",
		incorrectAnswerBlurb: "Sorry, that's not the right 'Trail!"
	},
	{
		qNumber: 5,
		question: "Which computer game developed by Blizzard entertainment in 1998 spawned one of the most popular real-time strategy game franchises, complete with professional competitions and televised matches?",
		choices: ["Command and Conquer", "StarCraft", "Age of Empires", "Company of Heroes"],
		correctAnswer: 2,
		correctAnswerBlurb: "That's correct!",
		incorrectAnswerBlurb: "Sorry, that's not the right real-time strategy game!"
	}
	];

	// initialize global variables
	var questionIndex = 0;
	var totalCorrectAnswers = 0;
	var totalNumberQuestions = allQuestions.length;

	// call to generate questions
	$("#nextQuestion").hide();
	$("#restartQuiz").hide();
   	generateQuestions();

	// question generation function w/ logic
	function generateQuestions() {
		if(allQuestions[questionIndex].qNumber === 1) {
			$('#photo').append('<img id="gameImage" src="images/01.gif">');
			questionContentGenerator();
		}
		else if(allQuestions[questionIndex].qNumber === 2) {
			$('#gameImage').replaceWith('<img id="gameImage" src="images/02.png">');
			questionContentGenerator();
		}
		else if(allQuestions[questionIndex].qNumber === 3) {
			$('#gameImage').replaceWith('<img id="gameImage" src="images/03.gif">');
			questionContentGenerator();
		}
		else if(allQuestions[questionIndex].qNumber === 4) {
			$('#gameImage').replaceWith('<img id="gameImage" src="images/04.gif">');
			questionContentGenerator();
		}
		else if(allQuestions[questionIndex].qNumber === 5) {
			$('#gameImage').replaceWith('<img id="gameImage" src="images/05.gif">');
			questionContentGenerator();
		}
	};

	// action on clicking submit answer
  	$('#submitAnswer').click(function() {
  		checkAnswer();
  	});

	// action on clicking next question
  	$('#nextQuestion').click(function() {
  		$("#submitAnswer").show();
        $("#nextQuestion").hide();
  		generateQuestions();
  	});

  	// check answer
  	function checkAnswer() {
  		var radioButtonValue = false;
  		var userChoice = document.getElementsByName('radios');
  		for(var i = 0; i < userChoice.length; i++) {
  			if(userChoice[i].checked) {
  				radioButtonValue = userChoice[i].value;
  			}
  		}

  		if(radioButtonValue === false) {
  			alert("You didn't pick an answer!");
  			return;
  		}

		if(questionIndex == 0) {
			$('#gameImage').replaceWith('<img id="gameImage" src="images/01-correct.gif">');
			if(radioButtonValue == allQuestions[0].correctAnswer) {
				$('#question').text(allQuestions[questionIndex].correctAnswerBlurb);
				totalCorrectAnswers++;
				console.log("total correct answers so far: " + totalCorrectAnswers);
			}
			else {
				$('#question').text(allQuestions[questionIndex].incorrectAnswerBlurb);
			}
		}
		if(questionIndex == 1) {
			$('#gameImage').replaceWith('<img id="gameImage" src="images/02-correct.gif">');
			if(radioButtonValue == allQuestions[1].correctAnswer) {
				$('#question').text(allQuestions[questionIndex].correctAnswerBlurb);
				totalCorrectAnswers++;
				console.log("total correct answers so far: " + totalCorrectAnswers);
			}
			else {
				$('#question').text(allQuestions[questionIndex].incorrectAnswerBlurb);
			}
		}
		if(questionIndex == 2) {
			$('#gameImage').replaceWith('<img id="gameImage" src="images/03-correct.gif">');
			if(radioButtonValue == allQuestions[2].correctAnswer) {
				$('#question').text(allQuestions[questionIndex].correctAnswerBlurb);
				totalCorrectAnswers++;
				console.log("total correct answers so far: " + totalCorrectAnswers);
			}
			else {
				$('#question').text(allQuestions[questionIndex].incorrectAnswerBlurb);
			}
		}
		if(questionIndex == 3) {
			$('#gameImage').replaceWith('<img id="gameImage" src="images/04-correct.jpg">');
			if(radioButtonValue == allQuestions[3].correctAnswer) {
				$('#question').text(allQuestions[questionIndex].correctAnswerBlurb);
				totalCorrectAnswers++;
				console.log("total correct answers so far: " + totalCorrectAnswers);
			}
			else {
				$('#question').text(allQuestions[questionIndex].incorrectAnswerBlurb);
			}
		}
		if(questionIndex == 4) {
			$('#gameImage').replaceWith('<img id="gameImage" src="images/05-correct.jpg">');
			if(radioButtonValue == allQuestions[4].correctAnswer) {
				$('#question').text(allQuestions[questionIndex].correctAnswerBlurb);
				totalCorrectAnswers++;
				console.log("total correct answers so far: " + totalCorrectAnswers);
			}
			else {
				$('#question').text(allQuestions[questionIndex].incorrectAnswerBlurb);
			}
		}

		$("#submitAnswer").hide();
        $("#nextQuestion").show();

		questionIndex++;
  	}

	// question content generator function
	function questionContentGenerator() {
		$('#question').text(allQuestions[questionIndex].question);
		$('#choice1').text(allQuestions[questionIndex].choices[0]);
		$('#choice2').text(allQuestions[questionIndex].choices[1]);
		$('#choice3').text(allQuestions[questionIndex].choices[2]);
		$('#choice4').text(allQuestions[questionIndex].choices[3]);
	};
});