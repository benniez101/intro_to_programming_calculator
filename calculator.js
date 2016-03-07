// Calculator Program
// 4 Operations addition, subtraction,
// multiplication, and division
// You will need a function for each one
// You need a menu so user can select an
// operation

// input

var handleClick = function(){
	console.log(window.event);
	var choice = window.event.target.id;
	console.log(choice)

	var number1 = document.getElementById("firstNum").value;
	var number2 = document.getElementById("secondNum").value;
	var parsednumber1 = parseFloat (number1);
	var parsednumber2 = parseFloat (number2);
	var operation

	if (choice == "addition"){
		operation = " + ";
		var answer = parsednumber1 + parsednumber2;

	} else if(choice == "subtraction"){
		var answer = parsednumber1 - parsednumber2;
		operation = " - ";

	} else if(choice == "multiplication"){
		var answer = parsednumber1 * parsednumber2;
		operation = " * ";

	} else if(choice == "division"){
		var answer = parsednumber1 / parsednumber2;
		operation = " / ";
	}

	var answerAres = document.getElementById("answers");
	answerAres.innerHTML = number1 + operation + number2 + " = " + answer;

}