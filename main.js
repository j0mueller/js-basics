// Using a prompt box for user input
// let resultDiv = document.getElementById('result');
// let message = 'At what temperature on the Celsius scale does water freeze?';
// let correctTemperature = 0;
// let guess = prompt(message);
// let result;
//
// if (guess == correctTemperature) {
//   result = 'Yes! Zero is the correct answer!';
// }
// else {
//   result = 'Sorry. That is incorrect.';
// }
// resultDiv.innerHTML = result;

//onclick example
let handleClick = () => {
  document.getElementById("demo").innerHTML = "Hello Javascript!";
}

//parsing Dates
date = Date();
stringDate = date.toString();
splitString = stringDate.split(" ");
day = splitString[0];
month = splitString[1];
dayOfMonth = splitString[2];
message = `The full date is ${date}.<br>
Showing just the day, month, and date: ${day}, ${month} ${dayOfMonth}th.`;
document.getElementById("dates").innerHTML = message;

//Strings:
//reversing a string
str = "abcdefghijk";
length = str.length;
arr = str.split("");
//method 1
let reverseString = (str) => {
  return str.split("").reverse().join("");
}
//method 2
let revStr = (arr) => {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result = arr[i] + result;
  }
  return result;
}
document.getElementById("reverse").innerHTML =
  `<h4>Reversing a string</h4>The original string: ${str}.
  <br>1. let reverseString = (str) => {
    <br>&nbsp;&nbsp;&nbsp;  return str.split("").reverse().join("");
  <br>&nbsp;&nbsp;}
  <br>The reversed string: ` + reverseString(str) +
  `<br><br>2. let revStr = (arr) => {
    <br>&nbsp;&nbsp;&nbsp; let result = '';
    <br>&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i < arr.length; i++) {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  result = arr[i] + result;
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    <br>&nbsp;&nbsp;return result;
  }
  <br>The reversed string: ` + revStr(arr);


//slice and substrings
// slice(start, end)
// substring(start, end)
// substr(start, length)
string = "apples, oranges, strawberries"
message0 = `The original string: ${string}`
message1 = `Slice(7): ${string.slice(7)}`;
message2 = `Slice(7, 14): ${string.slice(7, 14)}`;
message3 = `Substring(2, 5): ${string.substring(2, 5)}`;
message4 = `Substr(2, 5): ${string.substr(2, 5)} `;
document.getElementById("substr").innerHTML =
  "<h4>Slicing and substrings</h4>" + message0 +
  "<br>" + message1 +
  "<br>" + message2 +
  "<br>" + message3 +
  "<br>" + message4;

//replace() - replaces only first match by default - use regex with /g for global match:
dogs = "There are two black dogs, one brown dog, and four spotted dogs."
cat = dogs.replace("dog", "cat");
cats = dogs.replace(/dog/g, "cat");
document.getElementById("replace").innerHTML =
  "<h4>Replace parts of a string:</h4>Original string:" + dogs +
  "<br>Default replace() results:" + cat +
  "<br>Global replace() result:" + cats;

//indexOf, search, and finding individual characters
//indexOf and lastIndexOf return -1 if text not found; they also accept a second param for the starting point of the search
//search can't take a second param but it can take regex
//charCodeAt returns unicode of the character
findStr = "I want to find where 'find' occurs in this sentence."
index = findStr.indexOf("find"); //first occurrence
lastIndex = findStr.lastIndexOf("find"); //last occurrence
startingPoint = findStr.indexOf("find", 20);
search = findStr.search("find");
f = findStr.charAt(10);
fCode = findStr.charCodeAt(10);
document.getElementById("find").innerHTML =
  "<h4>IndexOf, Search, and CharAt:</h4>Original string: " + findStr +
  "<br>Using indexOf('find'): " + index +
  "<br>Using lastIndexOf('find'): " + lastIndex +
  "<br>Using a second parameter indexOf('find', 20): " + startingPoint +
  "<br>Using search('find'): " + search +
  "<br>Using charAt(10): " + f +
  "<br>Using charCodeAt(10): " + fCode;

//concat
partOne = "Hi.";
partTwo = "Nice to meet you.";
partThree = "My name is Joanne.";
joined = partOne.concat(" ", partTwo, " ", partThree);
document.getElementById("concat").innerHTML =
  "<h4>Joining Strings Using concat():</h4>First string: " + partOne +
  "<br>Second string: " + partTwo +
  "<br>Third string: " + partThree +
  "<br>Joined string: " + joined;

//NUMBERS
num = 123.45678;
numStr = num.toString();
numExp = num.toExponential(2);
numFix = num.toFixed(7); //specified number of decimal places
numPre = num.toPrecision(7); //specified length
//global methods for converting variables to numbers:
w = true;
x = Number(w);
y = false;
z = Number(y);
document.getElementById("to-other").innerHTML =
  "Starting number: " + num +
  "<br>To string: " + numStr +
  "<br>To Exponential(2): " + numExp +
  "<br>To Fixed(7): " + numFix +
  "<br>To Precision(7): " + numPre +
  "<br>Using global Number() function:<br>If w = true, Number(w) = " + x +
  "<br>If y = false, Number(y) = " + z;

//MATH
roundDown = Math.round(4.4);
roundUp = Math.round(4.5);
power = Math.pow(4, 3);
root = Math.sqrt(225);
abs = Math.abs(-3.2);
ceiling = Math.ceil(4.2);
floor = Math.floor(4.8);
min = Math.min(1, 0, 50, -200, 3000);
max = Math.max(1, 0, 50, -200, 3000);
random = Math.random(); //btw 0 incl and 1 excl
document.getElementById("math").innerHTML =
  "Math.round(4.4): " + roundDown +
  "<br>Math.round(4.5): " + roundUp +
  "<br>Math.pow(4, 3): " + power +
  "<br>Math.sqrt(225): " + root +
  "<br>Math.abs(-3.2): " + abs +
  "<br>Math.ceil(4.2): " + ceiling +
  "<br>Math.abs(4.8): " + floor +
  "<br>Math.min(1, 0, 50, -200, 3000): " + min +
  "<br>Math.max(1, 0, 50, -200, 3000): " + max +
  "<br>Math.random(): " + random;
document.getElementById("constants").innerHTML =
  "Math.E: &nbsp;&nbsp;" + Math.E +
  "<br>Math.PI: &nbsp;&nbsp;" + Math.PI +
  "<br>Math.SQRT2: &nbsp;&nbsp;" + Math.SQRT2 +
  "<br>Math.SQRT1_2: &nbsp;&nbsp;" + Math.SQRT1_2 +
  "<br>Math.LN2: &nbsp;&nbsp;" + Math.LN2 +
  "<br>Math.LN10: &nbsp;&nbsp;" + Math.LN10 +
  "<br>Math.LOG2E: &nbsp;&nbsp;" + Math.LOG2E +
  "<br>Math.LOG10E: &nbsp;&nbsp;" + Math.LOG10E;

//Arrays
array = ["cat", "dog", "mouse", "goat", "chicken"]
document.getElementById("array").innerHTML =
  "Original Array: ['cat', 'dog', 'mouse', 'goat', 'chicken']"

array.push("cow"); //add to end
document.getElementById("push").innerHTML =
  "array.push('cow'): " + array;

array.unshift("sheep") //add to front
document.getElementById("unshift").innerHTML =
  "array.unshift('sheep'): " + array;

array.pop(); //remove from end
document.getElementById("pop").innerHTML =
  "array.pop(): " + array;

array.shift();  //remove from front
document.getElementById("shift").innerHTML =
  "array.shift(): " + array;

//splice parameters(add position, # to remove, elements to add...)
animals = ["cat", "dog", "mouse"];
animals.splice(2, 0, "rabbit");
document.getElementById("splice").innerHTML = "Original array: animals = ['cat', 'dog', 'mouse']<br>animals.splice(2, 0, 'rabbit'): " + animals;

//concat methods
a = ["Alice", "Bob", "Carol"];
b = ["Dave", "Emma", "Frank"];
c = a.concat(b);
d = a.concat(["Georgia", "Henry"]);
document.getElementById("merge").innerHTML =
  'Array a: ["Alice", "Bob", "Carol"]<br>Array b: ["Dave", "Emma", "Frank"]<br>a.concat(b): ' + c + '<br>a.concat(["Georgia", "Henry"]): ' + d;

//Sorting an array
upper = ['Dave', 'Alice', 'Frank', 'Carol', 'Bob'];
lower = ['dog', 'mouse', 'cat', 'cow', 'goat']
mixed = ['dave', 'Alice', 'frank', 'Carol', 'bob']
numbers = [8, 3, 24, -7, -2.5, 0]
document.getElementById("sort").innerHTML =
  "Array with all uppercase initials: " + upper.sort() +
  "<br>Array with all lowercase letters: " + lower.sort() +
  "<br>Array with mixed initial case: " + mixed.sort() +
  "<br>Array of numbers using .sort(): " + numbers.sort() + "  WRONG!" +
  "<br>Sort an array of numbers using the Compare Function .sort(function(a, b){return a - b}): " + numbers.sort(function(a, b){return a - b}) + "  Correct!" +
  "<br>Sort descending using .sort(function(a, b){return b - a}): " + numbers.sort(function(a, b){return b - a}) +
  "<h4>Using sort and then selecting the first or last element is an inefficient way to find the min or max. Instead, try these methods:</h4>";
document.getElementById('max').innerHTML =
  `1a. Math.max.apply(null, numbers): ${Math.max.apply(null, numbers)} (based on array of numbers above)`
document.getElementById('min').innerHTML =
  `1b. Math.min.apply(null, numbers): ${Math.min.apply(null, numbers)}`
document.getElementById('reduce').innerHTML =
  `2. numbers.reduce(function(a, b) {return Math.max(a, b);}): ${numbers.reduce(function(a, b){return Math.max(a, b);})}`
document.getElementById('spread').innerHTML =
  `3. Math.max(...numbers): ${Math.max(...numbers)}`

//Looping
let i = 1;
let count = 100;
let sum = 0;
while (i <= 100) {
  sum = sum + i;
  i++;
}
document.getElementById('while').innerHTML =
  `let i = 1;
  <br>let count = 100;
  <br>let sum = 0;
  <br>while (i <= 100) {
    <br>&nbsp&nbsp sum = sum + i;
    <br>&nbsp&nbsp i++;
    <br>}
    <br>sum = ${sum}`

let phrase = "Repetition is the key to learning."
let repeat = ''
for (let i = 0; i < 3; i++) {
  repeat = `${phrase}<br>${repeat}`
}
document.getElementById('for').innerHTML =
  'let phrase = "Repetition is the key to learning."<br>let repeat = ""<br>for (let i = 0; i < 3; i++) {<br>&nbsp&nbsp repeat = `${phrase}<br>${repeat}`<br>}<br>' + repeat;

let newArray = [3, 5, 7];
let elements = '';
let forIn = (array) => {
  for (let i in array) {
    elements += ' ' + i.toString();
  }
  return elements;
}
let items = '';
let forOf = (array) => {
  for (let i of array) {
    items += ' ' + i.toString();
  }
  return items;
}
document.getElementById('forInAndOf').innerHTML = `Original array: [3, 5, 7]<br>Using: for (let i in array): ${forIn(newArray)}<br>Using: for (let i of array): ${forOf(newArray)}`

let things = ['apples', 'bananas', 'oranges'];
let list = '';
let forEach = (array) => {
  array.forEach((thing) => {
    list += thing + ' <br>'
  })
  return list;
}
document.getElementById('forEach').innerHTML = `Original array: ['apples', 'bananas', 'oranges']<br>Using forEach to create a list:<br>${forEach(things)}`
