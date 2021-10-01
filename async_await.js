const getAllPromise = async () => {
    try{
        const user1Promise = await getUserById(1);
        const user2Promise = await getUserById(2);
        const result = await Promise.all([user1Promise, user2Promise]);
        const user1 = result[0];
        console.log(user1);
        const user2 = result[1];
        console.log(user2);

    }catch (e){
        console.log("Error:", e);
    }
};
