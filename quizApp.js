
/*

function win = $( ".review" ).accordion({collapsible: true, heightStyle: "content"});
*/

$(document).ready(function () {
    event.preventDefault();


var questions = [{
	question: "Which was the first National Park?", 
	choices:  ["Yosemite", "Yellowstone", "Grand Canyon"], 
	correct:  1 },
	{
	question: "Where was Badlands filmed?", 
	choices:  ["Grand Canyon", "Zion", "Bryce", "Mount Rushmore", "value"], 
	correct:  2 }
/*	{
	question: , 
	choices: [], 
	correct: },
	{
	question: , 
	choices: [], 
	correct: },
	{
	question: , 
	choices: [], 
	correct: }	*/
	


	];


console.log(questions[0].choices[2]);  

    $("#name_1").val(questions[0].choices[0]);
    $("#name_2").val(questions[0].choices[1]);
    $("#name_3").val(questions[0].choices[2]);


/*var s = "";
for (var key in questions) {
    s += key + ": " + questions[key].question;
    s += "<br />";
    console.log(s);
    }  */

for (var i = 0; i < questions.length; i++) {
  	questionToAnswer = i;
  	}
  	console.log(questionToAnswer);


$("#question").append(questions[0].question);

});




/* 
    $(".question_1").click(function () {
        if (answer === correct) {
			$("li").addClass("green");
        } else {
			$("li").addClass("red");
		} 
    });

 



  function myFunction()
{
var x;
var d=new Date().getDay();
switch (d)
  {
  case 6:
    x="Today it's Saturday";
    break;
  case 0:
    x="Today it's Sunday";
    break;
  default:
    x="Looking forward to the Weekend";
  }
document.getElementById("demo").innerHTML=x;
}

function quizArray() {
	var x;
	var d=new Date().getDay();
	switch (d) {
	  	case 0:
		    x="Today it's Sunday";
		    break;
	  	case 1:
		    x="Today it's Monday";
		    break;
	  	case 2:
		    x="Today it's Tuesday";
		    break;
	  	case 3:
		    x="Today it's Wednesday";
		    break;
	  	case 4:
		    x="Today it's Thursday";
		    break;
	  	case 5:
		    x="Today it's Friday";
		    x break;
	  	case 6:
		    x="Today it's Saturday";
		     break;
	   	default:
   			 x="Looking forward to the Weekend";
	}
document.getElementById("demo").innerHTML=x;
}

*/