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
reverse = arr.reverse();
newString = reverse.join("");
function reverseString(str){
  return str.split("").reverse().join("");
}
document.getElementById("reverse").innerHTML =
  `<h4>Reversing a string</h4>The original string: ${str}.
  <br>The reversed string: ` + reverseString(str);

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
