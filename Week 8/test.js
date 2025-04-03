function fetchUserData(userid){
    return new Promise((resolve,reject)=>{
        console.log("Fetching data ....")

        setTimeout(()=>{
            const users = {
                1: { name: "Alice", age: 25 },
                2: { name: "Bob", age: 30 },
                3: { name: "Charlie", age: 22 }
            };

            if (users[userid]) {
                resolve(users[userid]);
            } else { 
                reject("User not found");
            }
        }, 2000);
    });
}

async function fetchAndProcessUser(userId){
    try {
        let user_info = await fetchUserData(userId);
        user_info.role = "user"; // Add role directly
        return user_info; // No need for another Promise
    } catch (error) {
        throw error; // Rethrow the error for the .catch() to handle
    }
}

// Test cases
fetchAndProcessUser(2).then(res => console.log(res)).catch(err => console.log(err));
fetchAndProcessUser(5).then(res => console.log(res)).catch(err => console.log(err));
