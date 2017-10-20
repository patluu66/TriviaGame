var number = 10;
var intervalLoop;
var correctAnswers = 0;
var incorrectAnswers = 0;
var questionsChoices = 
	[{	q1: "1. Who is the best point guard in the NBA?", 
		c1: "Stephen Curry", 
		c2: "LeBron James", 
		c3: "Russell Westbrook", 
		c4: "Kevin Durant"},  
	{	q2: "2. Which player foces opposing coaches to make the most adjustments?", 
		c1: "Stephen Curry", 
		c2: "LeBron James", 
		c3: "Russell Westbrook", 
		c4: "Kevin Durant" },
	{	q3: "3. If you were starting a franchise today and could sign any player in the NBA, who whould it be?",
		c1: "Stephen Curry", 
		c2: "LeBron James", 
		c3: "Russell Westbrook", 
		c4: "Karl-Anthony Towns" },
	{	q4: "4. Which team made the best overall moves this offseason?",
		c1: "Golden State", 
		c2: "Indiana", 
		c3: "Boston", 
		c4: "Utah" }]

var answer = { q1: "Stephen Curry", 
				q2: "LeBron James",
				q3: "Stephen Curry",
				q4: "Golden State"}

function display() {
	
	for(var i = 0; i < questionsChoices.length; i++) {
		var ptag = $("<p>").text(questionsChoices[i]["q" + (i + 1)]);
		var buttonTag1 = $("<button>").text(questionsChoices[i].c1).addClass("btn btn-primary numberQ" + (i + 1)).attr("value", questionsChoices[i].c1);
		var buttonTag2 = $("<button>").text(questionsChoices[i].c2).addClass("btn btn-primary numberQ" + (i + 1)).attr("value", questionsChoices[i].c2);
		var buttonTag3 = $("<button>").text(questionsChoices[i].c3).addClass("btn btn-primary numberQ" + (i + 1)).attr("value", questionsChoices[i].c3);
		var buttonTag4 = $("<button>").text(questionsChoices[i].c4).addClass("btn btn-primary numberQ" + (i + 1)).attr("value", questionsChoices[i].c4);

		$(".questions").append(ptag);
		$(".questions").append(buttonTag1, buttonTag2, buttonTag3, buttonTag4);
	}
	$(".questions").hide();
}

function timmerCountDown() {
	$(".start").on("click", run);	

	// console.log($(".start").on("click", run));
}

// var answer = { q1: "Stephen Curry", 
// 				q2: "LeBron James",
// 				q3: "Stephen Curry",
// 				q4: "Golden State"}

function question1Check() {
	$(".numberQ1").on("click", function() {
		if(this.value === answer.q1) {
			correctAnswers++;
		} else {
			incorrectAnswers++;
		}
		$(".numberQ1").off("click");
		// alert("correct: " + correctAnswers + " wrong: " + incorrectAnswers);
	})
}

function question2Check() {
	$(".numberQ2").on("click", function() {
	
		if(this.value === answer.q2) {
			correctAnswers++;
		} else {
			incorrectAnswers++;
		}
		$(".numberQ2").off("click");
		// alert("correct: " + correctAnswers + " wrong: " + incorrectAnswers);
	});

}

function question3Check() {
	$(".numberQ3").on("click", function() {
	
		if(this.value === answer.q3) {
			correctAnswers++;
		} else {
			incorrectAnswers++;
		}
		$(".numberQ3").off("click");
		// alert("correct: " + correctAnswers + " wrong: " + incorrectAnswers);
	});
}

function question4Check() {
	$(".numberQ4").on("click", function() {
	
		if(this.value === answer.q4) {
			correctAnswers++;
		} else {
			incorrectAnswers++;
		}
		$(".numberQ4").off("click");
		// alert("correct: " + correctAnswers + " wrong: " + incorrectAnswers);
	});
}


function run() {
	intervalLoop = setInterval(decrement, 1000);
	$(".start").off("click");
	$(".questions").show();
}

function decrement() {
	number--;
	$(".timeRemaining").html("Time Remaining: " + number);

	if(number <= 0) {
		stop();
		// alert("Time Up!");
		$(".questions").html("");
		var result = $("<p>").text("Correct Answer: " + correctAnswers);
		var result2 = $("<p>").text("Incorrect Answer: " + incorrectAnswers);
		$(".questions").append(result);
		$(".questions").append(result2);
	}
}

function stop() {
	clearInterval(intervalLoop);
}

function startGoldenStateWarrior() {
	display();
	timmerCountDown();
	question1Check();
	question2Check();
	question3Check();
	question4Check();
}


startGoldenStateWarrior();
















// $(".numberQ1").on("click", function() {
// 	// console.log($(".numberQ1").text().split(" "));
// 	// working here


// 	if(this.value === "Stephen Curry") {
// 		correctAnswers++;
// 	} else {
// 		incorrectAnswers++;
// 	}
// 	$(".numberQ1").off("click");
// 	alert("correct: " + correctAnswers + " wrong: " + incorrectAnswers);
// })

// $(".numberQ2").on("click", function() {
	
// 	if(this.value === "LeBron James") {
// 		correctAnswers++;
// 	} else {
// 		incorrectAnswers++;
// 	}
// 	$(".numberQ2").off("click");
// 	alert("correct: " + correctAnswers + " wrong: " + incorrectAnswers);
// });

// $(".numberQ3").on("click", function() {
	
// 	if(this.value === "Stephen Curry") {
// 		correctAnswers++;
// 	} else {
// 		incorrectAnswers++;
// 	}
// 	$(".numberQ3").off("click");
// 	alert("correct: " + correctAnswers + " wrong: " + incorrectAnswers);
// });

// $(".numberQ4").on("click", function() {
	
// 	if(this.value === "Golden") {
// 		correctAnswers++;
// 	} else {
// 		incorrectAnswers++;
// 	}
// 	$(".numberQ4").off("click");
// 	alert("correct: " + correctAnswers + " wrong: " + incorrectAnswers);
// });



















// 	c2: "LeBron James", c3: "Russell Westbrook", c4: "Kevin Durant"}, 

// 	q2: {questions: "2. Which player foces opposing coaches to make the most adjustments?", c1: "Stephen Curry", 
// 	c2: "LeBron James", c3: "Russell Westbrook", c4: "Kevin Durant"},
// 	q3: ["3. If you were starting a franchise today and could sign any player in the NBA, who whould it be?", "StephenCurry"]];




// [{questions: "1. Who is the best point guard in the NBA?"}, c1: "Stephen Curry", 
// 	c2: "LeBron James", c3: "Russell Westbrook", c4: "Kevin Durant"}]

//display all question and button

// function display() {
// 	// console.log(questionsChoices.q1[0]);

// 	for(var i = 0; i < questionsChoices.length; i++) {
// 		var currentQ = questionsChoices[i];
// 		// console.log(currentQ);
// 		for(var key in currentQ) {
// 			console.log(currentQ[key]);
// 			questions = currentQ[key];
// 			if(key === "q1") {
// 				$(".questions").append("<p>" + questions + "</p>");
// 			} else {
// 				$(".questions").append("<button>" + questions + "</button>");
// 			}			
// 		}
// 		// $(".questions").append("<br><br>");
// 	}
	
// }




