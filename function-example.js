function exampleFunction(firstName, lastName){
    let fullName = firstName + "" + lastName;
    return fullName;
}

// same result as above but different method
const getFullName = (firstName, lastName) => {
    return 
}

console.log(exampleFunction("joe", "Doe"));
console.log(getFullName("joe","doe"));

let person = {
    firstName: "joe",
    lastName: "Doe",
    age: 24,
    address: "kathmandu",
    getFullName: function (){
        return this;
    },
    getFullName: function(){
        return this.firstName + "" + this.lastName;
    },
    getAge: function () {
        return this.age;
    },
};



function printOut(){
    console.log(content);

}

printOut ("Hello World");
const arrowPrintOut = () => { console.log(content);
arrowPrintOut ("Arrow Hello World" );

let car = {
    name: "toyota",
    model: "M10",
    price: 1000,
    getNameInUpperCase: function(){
        return this.name.toUpperCase();
    },
    //getModel: () => {
        //return this.model;
    
    getTotalPriceWithVat: function(){
        return (13/100 * this.price) + this.price;
    }
    }
}
console.log(car);
console.log(car.getNameInUpperCase);
console.log(car.getTotalPriceWithVat);
}

