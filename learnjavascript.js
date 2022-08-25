function agedetector() {
	var boyr = window.prompt("Enter your year of birth:");
	var pryr = window.prompt("Enter the current year:");
	var yrage = pryr - boyr;
	document.write("You are", "&nbsp", yrage,"&nbsp", "years old");
	document.write("<br><br><i>Refresh the page to go back</i>");
}
function hundreds() {
	var age = window.prompt("Enter your age:");
	var ageLeft = 100 - age;
	document.write(ageLeft, "&nbsp", "years are there for you to become <b>100 years old</b>");
	document.write("<br><br><i>Refresh the page to go back</i>");
}
function numberdetector() {
	var num = window.prompt("Enter the number:");
	if(num < 0){
		document.write(num ,"&nbsp is a <b> Negative Number </b>");
	}else if(num > 0){
		document.write(num ,"&nbsp is a <b> Positive Number </b>");
	}else if(num == 0){
		document.write("The number is <b> ZERO </b>");
	}else{
		document.write("unknown operator");
	}
	document.write("<br><br><i>Refresh the page to go back</i>");
}
function calculator() {
	var num1 = window.prompt("Enter the first number:");
	var num2 = window.prompt("Enter the last number:");
    var operator = window.prompt("Enter the arithematical operator (+, -, *, /):");

    switch (operator){
    	case "+":
    	    var result = parseInt(num1)+parseInt(num2);
    	    document.write(num1, "&nbsp", operator, "&nbsp", num2, "&nbsp = &nbsp", result);
    	    break;
    	case "-":
    	    document.write(num1, "&nbsp", operator, "&nbsp", num2, "&nbsp = &nbsp", num1 - num2);
    	    break;
    	case "*":
    	    document.write(num1, "&nbsp", operator, "&nbsp", num2, "&nbsp = &nbsp", num1 * num2);
    	    break;
    	case "/":
    	    document.write(num1, "&nbsp", operator, "&nbsp", num2, "&nbsp = &nbsp", num1 / num2);
    	    break;
    	default:
    	    document.write("unknown operator");
    }
	document.write("<br><br><i>Refresh the page to go back</i>");
}
