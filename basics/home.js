console.log('hello');

// alert('Baby');

// This is for inline comments

// Variables 

var b = 'smoothie';
console.log(b);

var number = 41;
console.log(number);

// document.getElementById('Hello').innerHTML="I am Arundhishaan";

// var age = prompt("What is your age?");

// document.getElementById('Hello2').innerHTML=age;

// Numbers in Js

var num1 = 10;
num1 = num1 + 1;

// Increment num1 by 1
num1++;
console.log(num1);

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply, remainder
console.log(num1%2);

// Increment or decrement by any number say 10
console.log(num1+=10);

/* Functions
1. Create the function 
2. Call the function
*/
function fun() {
    console.log('this is a function')
}

// call
fun();

/* Let us create a function that take in a name 
and says hello followed by your name

For example 

Name: "Arun"
Return: "Hello Qazi"
*/

function greeting() {
    var name = prompt("What is your name?");
    var result = "Hello" + ' ' + name; // String concatenation
    console.log(result);
}

// greeting();

// How do arguments work in function
// How do we add numbers in function?

function sumNumbers(num1,num2) {
    var result = num1+num2;
    console.log(num1+num2);
}

sumNumbers(10,10);

sumNumbers('Hello', 'Arun');

// Better way

function greeting(yourName) {
    var result = "Hello" + ' ' + yourName; // String concatenation
    console.log(result);
}
// var name = prompt("What is your name?");

// greeting(name);

// while loops

var num = 0;

while (num < 100) {
    num += 1;
    console.log(num)
}

// for loop

for (let num = 0; num<=100; num++) {
    console.log(num);
}

// Data Types
let yourAge = 18; // number
let yourName = 'Arun'; // string
let name = {first: 'Jane', last: 'Bucks'}; // object
let truth = false; // boolean
let groceries = ['carrot', 'banana', 'orange']; // array
let random; // undefined
let nothing = null; // value null

// Strings in JavaScript (common methods)

let fruit = 'banana';
let morefruits = 'banana\napple';  // new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // split by comma
console.log(fruit.split('')); // split by character

// Arrays
let fruits = ['oranges', 'banana', 'grape', 'apple'];
fruits = new Array('oranges', 'banana', 'grape', 'apple');

console.log(fruits[2]); // access value at index 2
fruits[0] = 'pear'
console.log(fruits);

for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods

console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push('blackberries')); // appends last item
fruits[fruits.length] = 'new fruit'; // same as push
console.log(fruits[4]);
fruits.shift(); // remove the first element
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

let vegetables = ['carrot', 'beetroot', 'cabbage', 'potato']
let allgroceries = fruits.concat(vegetables);
console.log(allgroceries);
console.log(allgroceries.slice(1,4));
console.log(allgroceries.reverse());
console.log(allgroceries.sort());

let someNumbers = [1, 53, 43, 23, 65, 3, 9, 63]
console.log(someNumbers.sort(function(a, b) {return a-b})); // sort in ascending order
console.log(someNumbers.sort(function(a, b) {return b-a})); // sort in descending order

let emptyArray = [];
for (let num=0; num<10; num++) {
    emptyArray.push(num);
}

console.log(emptyArray);

// Objects in JavaScript
// dictionaries in Python

let student = {
    first: 'Arun', 
    last: 'Qazi', 
    age: '21', 
    height: '160',
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

console.log(student.first);
console.log(student.last);
console.log(student["first"]);
student.first = 'notArun';  // change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// conditionals, control flows (if else)
// 18-35 is my target demographic
// && - AND
// || - OR

// var age = prompt('What is your age?');

var age = 18;

if ((age>=18) && (age<=35)) {
    status = 'target demographic';
    console.log(status);
} else {
    status = 'not my target';
    console.log(status)
}

// Switch statements
// differentiate between weekday vs. weekend
// day 0 ---> Sunday    ---> weekend
// day 1 ---> Monday    ---> weekday
// day 2 ---> Tuesday   ---> weekday
// day 3 ---> Wednesday ---> weekday
// day 4 ---> Thursday  ---> weekday
// day 5 ---> Friday    ---> weekend
// day 6 ---> Saturday  ---> weekend

switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}

console.log(text);




































































































































