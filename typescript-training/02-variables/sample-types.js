var found = true;
var grade = 88.6;
var firstName = "Habtom";
var lastName = 'Gebre';
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// shows compiler error while put different type
/*found=0;
grade="A";
firstName=false;*/
//concatnate using backticks
console.log("Hi ".concat(firstName, " ").concat(lastName));
