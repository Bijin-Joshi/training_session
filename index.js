let a = 1;
let b = "Hello World";
let c = true;
let d = 1.5;

console.log(a);

//let a = 1;
 //let b = "Hello World";

// join two string and get its length
let firstLetter = "Hello";
let secondLetter = "World";
let thirdLetter = firstLetter + secondLetter;
//console.log(firstLetter + secondLetter);
console.log ("Length of third Letter is:", thirdLetter.length);


let example = "I am from kathmandu";
console.log (example.slice(5,9));
console.log (example.slice(10,example.length));

//slice start index, end index
let example = "Hello World IIMS";
console.log(example.length);
console.log(example.slice(-4));

let firstWord = "Hello";
let lastWord = "World";
let replaceWord = "IIMS";
let concatWord = firstWord.concat(lastWord);

// replace word in string
console.log(concatWord.replace("World", replaceWord));

// change to lower case
let example3 = "hello world";
console.log("to lower case:", example)

// get substr
let str = "Hello world!";
//console.log(str);
let result = str.substr(1,4);
console.log(str);
console.log(result);

let str = "Hello world!";
console.log(str);
let result = str.substr(0,5);
console.log(result.length);

//get index of
let checkIndexOf = "Hello world!";
console.log(checkIndexOf.indexOf("world"));

let padStartExample = "Hello";
console.log(padStartExample.padStart(12."IIMS").includes("Hello"));

let padEndExample = "World";
console.log(padEndExample.padEnd(9,"IIMS"));



