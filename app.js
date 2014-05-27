$(document).ready(function() {
	// object that contains questions, choices and correct answer
	var allQuestions = [
	{
		question: "Which Atari game cited as one of the 'worst video games released' was excavated from an Alamogordo, NM landfill in April 2014?",
		choices: ["Pong", "Custer's Revenge", "BurgerTime", "E.T. the Extra-Terrestrial"],
		correctAnswer: 3
	}, 
	{
		question: "Which computer game developed by iD Software in 1992 helped popularize the first-person shooter genre?",
		choices: ["Battlezone", "Catacomb 3-D", "Wolfenstein 3D", "Blake Stone: Aliens of Gold"],
		correctAnswer: 2
	}, 
	{
		question: "Which computer game developed by Origin Systems in 1990 revolutionized the space combat simulation genre?",
		choices: ["Wing Commander", "X-Wing", "Gradius", "Descent"],
		correctAnswer: 0
	}, 
	{
		question: "Which computer game first developed in 1972, based on a historical trail, allowed you to hunt for wild game, succumb to dysentary and lead your group to the Willamette Valley in the West?",
		choices: ["The Amazon Trail", "The Yukon Trail", "The Oregon Trail", "Africa Trail"],
		correctAnswer: 2
	},
	{
		question: "Which computer game developed by Blizzard entertainment in 1998 spawned one of the most popular real-time strategy game franchises, complete with professional competitions and televised matches?",
		choices: ["Command and Conquer", "StarCraft", "Age of Empires", "Company of Heroes"],
		correctAnswer: 1
	}
	];

	// initialize global variables
	var totalCorrectAnswers = 0;
	var totalNumberQuestions = allQuestions.length;
	console.log(totalCorrectAnswers);
	console.log(totalNumberQuestions);
});