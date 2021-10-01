const getHelloWorldPromise = () => {
    return new Promise((resolve, reject)=> {
        //resolve("Hello world");
        reject("there was some error");
    });
};

getHelloWorldPromise()
   .then((result)=> {
    console.log(result);
})
.catch(error) => {
    console.log(error);
});

const getUserList = () => {
    return new Promise((resolve, reject ) => {
        setTimeout(()=> {
            //resolve([peter, tom]);
            reject("There was some error fetching students data");

        }, 5000);

    });
};

getUserList().then((students) => {
    console.log("Success:", students);
})
.catch((error) => console.log (error)) //alternative method 
.finally (()=> console.log("Request completed"))

// return Promise.reject ("This function failed")
return Promise.resolve ("direct", "resolve")
}
getHelloWorldPromise()
.then((helloworld)=> {
    console.log("Success:", helloworld);
    return true
})
.then((result)=> {
    console.log("Next Promise:", result);
})
.catch((error) => {
    console.log("Error:", error);
})
.finally(()=> {
    console.log("This request is completed");
});

//promise.all
const promise1 = () => new Promise((resolve , reject) => {
    setTimeout(() => {
    resolve ("Promise 1");
    }, 1000);
}),

const promise2 = () => new Promise((resolve , reject) => {
    setTimeout(() => {
    resolve ("Promise 2");
    }, 2000);
}),

// Promise.all ([promise2(), promise1()]).then((result) => {
//     console.log("Promise all:", result);
// })

Promise.race([promise1(), promise2()]) .then
