var firstName = "Gustav"
var lastName = "Vingtoft"

// console.log('My first name is', firstName, 'and my last name is', lastName);

var year = "2017";
var number = 1;

// console.log(Number(year) + number)

// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// console.log(parseFloat(numberOne) + parseFloat(numberTwo))

// --------------------------------------

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var result = parseFloat(numberOne) + parseFloat(numberTwo);

// console.log(parseFloat(result).toFixed(2));

// --------------------------------------
// Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals

var avg = one + two + three;

// console.log(avg);

// console.log( (avg / 3).toFixed(5) )

// --------------------------------------

// --------------------------------------


// --------------------------------------
// Exercise 6 - Get the character by index

var letters = "abc"
// Get me the character "c"

// console.log(letters.indexOf("c"));

// console.log(letters.charAt(2));

// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!";

// capitalize the J in Javascript

// console.log(fact.replace("j", "J"));

// --------------------------------------

// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

console.log(myObj.message);

// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

var myInfo = {
    "firstName": "Gustav",
    "Age": 23
}

// --------------------------------------
// Exercise 3 - Add a property 

var stackOverflow = {};

stackOverflow["isAllowed"] = true;

console.log(stackOverflow)

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}

delete thisSong.description;

thisSong["About"] = "Just a tribute";

console.log(thisSong);

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

// --------------------------------------


