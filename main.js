// QUIZ example
// let resultDiv = document.getElementById('result');
//
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
message = `The full date is ${date}. <br> Showing just the day, month, and date: ${day}, ${month} ${dayOfMonth}th.`;
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
document.getElementById("strings").innerHTML = `The original string: ${str}. <br> The reversed string: ` + reverseString(str);

//slice and substrings
// slice(start, end)
// substring(start, end)
// substr(start, length)

str = "apples, oranges, strawberries"
message0 = `The original string: ${str}`
message1 = `Slice(7): ${str.slice(7)}`;
message2 = `Slice(7, 14): ${str.slice(7, 14)}`;
message3 = `Substring(2, 5): ${str.substring(2, 5)}`;
message4 = `Substr(2, 5): ${str.substr(2, 5)} `;
document.getElementById("substr").innerHTML = message0 + "<br>" + message1 + "<br>" + message2 + "<br>" + message3 + "<br>" + message4;

//replace
