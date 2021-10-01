const makeStringUpperCase = (string) => {
    return string.toUpperCase();

};

const makeStringLowerCase = (string) => {
    return string.toLowerCase();

};

const padString = (string) => {
    return string.padStart(20,"0");
}

const passUserInput = (input, callback) => {
    input = "Hello" +input;
    return callback(input);


}

console.log(passUserInput("IIMS", makeStringLowerCase));
console.log(passUserInput("iims", makeStringUpperCase));
console.log(passUserInput())

const add = (a,b) => a + b;
    
const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const callBackExample = (a, b, mathCallBack) => {
    console.log (mathCallBack (a, b));


}

callBackExample(2, 2, add);
callBackExample(2, 2, multiply);
callBackExample(2, 2, subtract);

let a = "1";
let b = "2";
console.log(a+b);
console.log(parseInt(a) + parseInt(b)); // to change string into number parseInt is used

console.log(2**2); //to multiply
console.log(2+2)

