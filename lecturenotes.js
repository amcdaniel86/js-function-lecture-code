function addNumbers() {
  return 2 + 2;
}

var result = addNumbers();
console.log(result);

function calculator(){
  var result = multNumbers();
  console.log("the result is " + result);
}

function sumNumbers(){
  return 2 + 2;
}

function multNumbers(){
  return 3 * 3;
}

calculator()

function sumNumbers(numberOne, numberTwo){
  return numberOne + numberTwo;
}

var result = sumNumbers(2,2);
console.log("the result is " + result)

function sumNumbers(num, otherNum){
  return num + otherNum;
}

var result = sumNumbers(5,6);
console.log("answer is " + result);

var animalArray = ["dog", "fish", "cat"];

function printLength(arrayToCount){
  var theLength = arrayToCount.length;

  console.log("length of array is " + theLength);
}

printLength(animalArray);

var Arr = ["rubios", "arbys", "veggies"];

function howLong(x){
  var theLength = 
  x.length;

  console.log("length is " + theLength);
}

howLong(Arr);

var firstName = "josh";
  var company = "ironhack";
function sayHello(){
  console.log("name inside of the function: " + firstName);
  console.log("we are in a " + company + " course.");
}

sayHello();

console.log(company);
console.log(firstName);

function printName(name) {
  var name = "the value";
  console.log(name);
}

var city = "madrid";

function printCity (city) {
  console.log(city);
}

printCity("Miami");

function printCity2(){
  console.log(city);
}

printCity2();
console.log(city);

Exercise at Bottom Function Notes
vvvvvvv

Create a function addNumbers that takes 2 parameters and returns the sum of those parameters.
Create a function subtractNumbers that takes 2 parameters and returns the difference of those parameters.
Create a function multiplyNumbers that takes 2 parameters and returns the product of those parameters.
Create a function divideNumbers that takes 2 parameters and returns the quotient of those parameters.
Create a function calculator that takes 3 parameters. The first two parameters are the numbers. The third parameter, called operation, is the operation you will execute.
If the operation is “addition”, you should execute the function addNumbers.
If the operation is “subtraction”, you should execute the function subtractNumbers.
If the operation is “multiplication”, you should execute the function multiplyNumbers.
If the operation is “division”, you should execute the function divideNumbers.