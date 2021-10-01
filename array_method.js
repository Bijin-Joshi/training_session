let exampleArray = [1, 2, 3, 4, 5];
console.log(exampleArray.length);
console.log(exampleArray[exampleArray.length - 1]);

exampleArray[2]= "test";
exampleArray[0] = "hello world";
console.log(exampleArray);

// let objectExample = {
//     name: "John",
//     age: 30,
};
console.log(objectExample.age)

let array1 = ["apple", "mango"];
let array2 = ["banana", "orange"];
console.log ([...array1, ...array2]);

let object1 = {
    name: "john";
    age: "20";
};

let object2 = {
    address: "kathmandu";
    college: "IIMS";
};

//console.log ({...object1, ...object2});

let object3 = {...object1, ...object2};

let {name, age, address, college} = object3;
console.log("rocket")

//push
let pushExample = ["apple", "banana"];
pushExample.push("orange");
console.log

//pop
let popExample = ["apple", "banana", "avocado"];
popExample.pop();
console.log

//unshift
let unshiftExample = ["apple", "banana", "avocado"];
unshiftExample.unshift("orange");
console.log

//shift
let shiftExample = ["apple", "banana", "avocado"];
shiftExample.shift();
console.log()

//splice
let spliceExample = ["apple", "banana", "avocado"];
spliceExample.splice(1, 1, "orange", "mango"); // 1= index, 1 = 
console.log()

//slice
let sliceExample = ["apple", "banana", "avocado", "orange", "kiwi"];
let newSliceArray = sliceExample.slice(1, 3); 
console.log(, newSlicedArray)
console.log(, sliceExample)

let sliceExample = ["apple", "banana", "avocado", "orange", "kiwi"];
//delete sliceExample[0];
sliceExample.splice (0, 1)
console.log (, sliceExample)

//forEach loop
sliceExample.forEach(value, index) => {
console.log(,index);
console.log(,value);
console.log("=======================")

}

let numbers = {1, 2, 3, 4, 5};
let newNumbers = numbers.map ((value, index)=>{
    return value * 2;
});
console.log (, number)

let name = {'bijin', 'ram', 'shyam'};

console.log(name);
//Map 
let upperCaseName = name.map((value, index)=>{
    return value.toUpperCase();
})

console.log(upperCaseName);

// filter example
let agesArray = [15,20,30];
let aboveTwenty = agesArray.filter((age)=>{
    return value > 20;
});
console.log(aboveTwenty);


let arr = [1, 2, 3, 4, 5];
for (let i=0; i < arr.length; i++ ){
    console.log(arr[i]);
}

let person = {
    name: "John",
    age: 30,
    address: "kathmandu",
};
delete person.address;
console.log (person);

//iterators
let countryArray = ["Nepal", "India", "China", "Japan"];
for (let country of countryArray){
    console.log (country);
}

let objectExample = {
    name: "John",
    age: 30,
    address: "Kathmandu",
}

for (let obj in objectExample){
    console.log(objectExample[obj]);
}

console.log(object.values (objectExample))