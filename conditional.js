const age = 25;
if (age <= 20){
    console.log ("you are in teen age");"

}else if (age>20 && age <= 29){
    console.log ("you are in your twenty's");

} else{
    console.log(" you are old");
}

let day = "sunday";
switch (day){
    case "monday";
    console.log("It is monday");
    break;
    case "Tuesday":
        console.log (" It is tuesday");
        break;
    default:
        console.log ("your week day is not available here");

}

let counter = 0;
while (counter <= 10){
    console.log ("~ file:conditional.js", counter);
    counter++;
}

do {
    let text = ""
    text += "The number is"+ counter;
    console.log ()
     counter++;
}
while (counter > 1);

for (let i = 0; i>= 1; i--){
    // if (i === 5){
    //     break;
    // }
    if (i === 9){
        continue;
    }
    console.log ("Value of i is:", i);
}

let todaysDate = new Date();
console.log 

