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
var currentQuestionNumber = 1;
var numberCorrect = 0;


$(document).ready(function () {
	event.preventDefault();
   
    $(".start").click(function() {
        start();
	});
    
   $(".start").keydown(function (event) {
        event.preventDefault();
        if (event.which == 13) {
            start();
        }
    });

    $("#name_1").click(function () {
            event.preventDefault();
            var guess = 0;
            checkAnswer(guess); 
        });

    $("#name_2").click(function () {
            event.preventDefault();
            var guess = 1;
            checkAnswer(guess);  
        });

    $("#name_3").click(function () {
            event.preventDefault();
            var guess = 2;
            checkAnswer(guess);
        });

    $(".re_start").click(function() {
        var currentQuestion = 0;  
        var currentQuestionNumber = 1;
        numberCorrect = 0;
      
        start();
        });

function start() {
    event.preventDefault();

    

    $(".question").empty();
    $(".question").append("<p>" + questions[currentQuestion].question + "</p> ");
    $("#name_1").val(questions[currentQuestion].choices[0]);
    $("#name_2").val(questions[currentQuestion].choices[1]);
    $("#name_3").val(questions[currentQuestion].choices[2]);

    
}

function checkAnswer(guess) {
    
    var correctAnswer = questions[currentQuestion].choices[questions[currentQuestion].correct];
    console.log(numberCorrect);
    console.log(guess);
    console.log(questions[currentQuestion].correct);
    console.log(correctAnswer);

    if (guess === questions[currentQuestion].correct) {                                      
        numberCorrect++
        $(".response").empty();
        $(".response").append("<p> Correct! <p>");
    } else if (guess !== questions[currentQuestion].correct) {
        $(".response").empty();
        $(".response").append("<p> Sorry, the correct answer is " + correctAnswer + "</p>");
    }
    
    $(".numberCorrect").empty();
    $(".numberCorrect").append("<p>You've answered " + numberCorrect + " of "  + currentQuestionNumber + " correctly.<p>");
    currentQuestion++
    currentQuestionNumber++
       
    
       
    next();   
   
}

function next() {
    $(".next").click(function() {
        $(".response").empty();
        start();
    });
}

});



