//######### variables

let text = "hello";
text = "hi";
text = 10.89;
text = true;
const number = 10;
// number = 20;

console.log(text);
console.log(number);
console.log(10.89);
console.log(true);
console.log(null);
//######### DataType

function clear(value) {
  console.clear();
  if (value !== undefined) {
    console.log(value);
  }
}

console.clear();
// typeof
let studentName = "Deepakkumar"; // string
let studentRollNo = 10; // number
let studentMarks = 50.5; // number
let isStudentPresent = true; // boolean
let parentNumber = null; // object
let studentCity; // undefined

console.log(typeof studentName);
console.log(typeof studentRollNo);
console.log(typeof studentMarks);
console.log(typeof isStudentPresent);
console.log(typeof parentNumber);
console.log(typeof studentCity);

//############### functions
console.clear();

function funName(varOne, varTwo, varThree) {
  // logic
  console.log(varOne, varTwo, varThree);
} // definition of function

funName(10, 20, 30); // function call
console.clear();
//################## scope in javascript

// global
// local scope
// block scope

let globalVar = 10;

console.log(globalVar);
function printData() {
  let globalVar = 100; // local
  if (2 === 2) {
    let globalVar = 2;
  }
  console.log(globalVar);
}

printData();
console.log(globalVar);

//############ callback function #############//
// function written in other function call --> callback
clear();
let array1 = [10, 20, 30, 40, 50, 60];

array1.forEach(function (value, index) {
  console.log(value, index);
}); // 50% 50% (dev)

//################### array #################//
clear();
// DSA
// for
// while
// do while
let array = [10, 20, 30, 40, 50, 60];
// read forEach()
console.log(array[2]);
array.forEach(function (value, index) {
  console.log(value, index);
});

clear(array);
// add push(), unshift()
array.push(100, 200, 300);
array.unshift("a", "b", "c");
array[6] = 30;
console.log(array);

// revers
// let reversArray = array.reverse();
// console.log(reversArray);

// delete pop() , shift(), splice()
clear(array);
// array.pop();
// array.pop();
// array.pop();
// array.pop();
// array.shift();
// array.shift();
// array.shift();
// console.log(array);
array.splice(7, 1); // index , delCount (+ve)
console.log(array);

// search find() , filter()

// find --> one or undefined
// filter --> list or  []
clear(array);
let search = 3;
let searchResult = array.filter(function (value, index) {
  return value === search;
});

console.log(searchResult);
// re-create map()
// revers revers()
// array to string join()
