console.log("this is a print statement from JS");

// this is a comment
/**
 * this 
 * is 
 * a 
 * multi line 
 * comment
 */

/**
 * variables in JS have scope
 * three types of scope present
 * 1) var has global scope
 * 2) let has local scope
 * 3) const you cannot redeclare the values
 * 
 * scoping: whuich portions of the program can access the values of 
 */

var age = 21; //global. do not use this ever
let userName = "john"; //local scope to wherevr you declare
const PI = 3.14; //you cannot reassign the value

/**
 * number: 21
 * string: 'john' or "john"
 * float: 3.14 (but datatype is still number)
 * boolean: true or false
 * null: null
 * undefined: undefined
 * if you declare and don't assign any value, then default datatype is undefined
 */

/**
 * to figure out the datatype of a variable
 */

console.log(typeof userName);

/**concat of strings using concat oeprator: + */
console.log("The student name is " + userName)

/**after ES6 template literals (USE BACK TICKS: ``````````)*/
console.log(`the student name is using template literals ${userName} and their age is ${age}`)

/**string ops */
const studentName = "harry potter"
console.log(studentName.length);
console.log(studentName.substring(0, 5));
console.log(studentName.toUpperCase());
console.log(studentName.split(" "));
console.log(studentName.split(""));

