const request = require("request");
const getUserDetail1 = () => {
    return new Promise((resolve, reject) => {
        request(
            "https://reqres.in/api/users",
            (error, response, body) => {
                if (error) {
                    reject(error);
                }
                resolve({
                    version: "v1",
                    data: body,
                });
            }
        );
    });
};
const getUserDetail2 = () => {
    return new Promise((resolve, reject) => {
        request(
            "https://reqres.in/api/users",
            (error, response, body) => {
                if (error) {
                    reject(error);
                }
                resolve({
                    version: "v2",
                    data: body,
                });
            }
        );
    });
};


getUserDetail1()
.then ((result) => {
    console.log("Details of the user", result)
})
.catch((error) => {
    console.log("Error fetching the user details", error);
});


Promise.all([getUserDetail1(), getUserDetail2()])
.then ((result) => {
    console.log("Details of the users from both api", result)
})
.catch((error) => {
    console.log("Error fetching the user details", error);
});


Promise.race([getUserDetail1(), getUserDetail2()])
.then ((result) => {
    console.log("Results from the first fulfilled api ", result)
})
.catch((error) => {
    console.log("Error fetching the user details", error);
});



getUserDetail2()
    .then((result) => {
        const {data} = result;
        const actualJson = JSON.parse(data);
        for (let d in actualJson.data) {
            console.log("The user's id is ", actualJson.data[d].id);
            console.log("User's email is ", actualJson.data[d].email);
            console.log("User's first_name is ", actualJson.data[d].first_name);
            console.log("User's last_name is", actualJson.data[d].last_name);
            console.log("User's avatar ", actualJson.data[d].avatar);
        }

    })
    .catch((error) => {
        console.log("Error fetching the user details", error);
    });