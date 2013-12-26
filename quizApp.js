var questions = [
	{
	question: "Which was the first National Park?", 
	choices:  ["Yosemite", "Yellowstone", "Grand Canyon"], 
	correct:  1 },

	{
	question: "Where was 'Butch Cassidy and The Sundance Kid' filmed?", 
	choices:  ["Grand Canyon", "Zion", "Bryce"], 
	correct:  1 },
    {
	question: "Zion National Park was also the site for filming:", 
	choices: ["Thelma & Louis", "Indiana Jones and The Last Crusade", "The Eiger Sanction"], 
	correct: 2 },

	{
	question: "Which state has no National Park - or other 'system unit,' e.g., a National Monument?", 
	choices: ["Vermont", "Delaware", "Iowa"], 
	correct: 1 },

	{
	question: "Where is the Homestead National Monument of America located?", 
	choices: ["Oklahoma", "Nebraska", "Iowa"], 
	correct: 1 }
	
	];

var currentQuestion = 0;

$(document).ready(function () {
	event.preventDefault();
    $(".start").click(function() {
		$(".question").append("<p>" + questions[0].question + "</p>");
        $("#name_1").val(questions[0].choices[0]);
        $("#name_2").val(questions[0].choices[1]);
        $("#name_3").val(questions[0].choices[2]);
        start();
	});
  
    $(".next").click(function(){
        nextQuestion();
    })
    
   $(".start").keydown(function (event) {
        event.preventDefault();
        if (event.which == 13) {
            $(".question").append("<p>" + questions[0].question + "</p>");
            $("#name_1").val(questions[0].choices[0]);
            $("#name_2").val(questions[0].choices[1]);
            $("#name_3").val(questions[0].choices[2]);
            start();
        }
    });

    $(".next").keydown(function (event) {
        event.preventDefault();
        if (event.which == 13) {  
            nextQuestion();
        }
    });



function start() {
    $("#name_1").click(function () {
            event.preventDefault();
            var guess = 0;
            checkAnswer(guess);
            console.log(guess);
            showAnswer(guess);     
        });

    $("#name_2").click(function () {
            event.preventDefault();
            var guess = 1;
            checkAnswer(guess);
            console.log(guess);
            showAnswer(guess);      
        });

    $("#name_3").click(function () {
            event.preventDefault();
            var guess = 2;
            checkAnswer(guess);
            console.log(guess);
            showAnswer(guess);
        });
}


function checkAnswer(guess) {
    var currentQuestion = 0;
    var correctAnswer = questions[currentQuestion].choices[questions[currentQuestion].correct];
   
    console.log(guess);
    console.log(questions[currentQuestion].correct);
    console.log(correctAnswer);

    if (guess === questions[currentQuestion].correct) {                                      
       $(".response").append("<p>Correct, your current score is xxxx<p>");
       console.log("Correct");
    }
    else if (guess !== questions[currentQuestion].correct) {
        $(".response").append("<p>Sorry, the correct answer is " + correctAnswer + "</p>");
        console.log("Sorry");
    }
}

function showAnswer(guess) {
    var currentQuestion = 0;
    var numberCorrect = [];
    if (guess === questions[currentQuestion].correct) {                                      
       numberCorrect.push(guess);
    } 
    
    console.log(numberCorrect.length);

    var currentQuestionNumber = (currentQuestion + 1);
    console.log(currentQuestionNumber);

    $(".numberCorrect").append("<p>" + numberCorrect.length + "<p>");
    $("questionNumber").append("<p>" + questions[currentQuestion] + "<p>");
}

function nextQuestion() {
    for ( var i = 0; i < questions.length; i++ ) {
        currentQuestion++;
        }   
    $(".question").contents().remove();
    $(".question").append("<p>" + questions[currentQuestion].question + "</p>");
    $("#name_1").val(questions[currentQuestion].choices[0]);
    $("#name_2").val(questions[currentQuestion].choices[1]);
    $("#name_3").val(questions[currentQuestion].choices[2]);
    start();   
}

});


