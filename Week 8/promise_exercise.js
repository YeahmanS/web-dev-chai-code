// 1. Delay Function
// Create a function delay(ms) that returns a Promise that resolves after ms milliseconds.

function delay(time){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res()},time)
    })
}

//delay(2000).then(()=>(console.log("waited for 2 second")))

// 2. Fake API with Random Failure
// Modify the fetchUserData(userId) function to randomly fail (reject) 50% of the time.

function fetchUserDatat(data){
    return new Promise((res,rej)=>{
        const number = Math.floor(Math.random()*10)

        if (number%2 == 0){
            res("User found")
        }else {
            rej("user doesn't exist")
        }
    })
}

// fetchUserDatat(1)
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej))

// Creating a fake api 

function fetchUserData(userid){
    return new Promise((resolve,reject)=>{
        console.log("Fetching data ....")

        setTimeout(()=>{
            const users = {
                1:{name: "Alice", age: 25 },
                2:{ name: "Bob", age: 30 },
                3:{ name: "Bob", age: 30 }
            }

            if (users[userid]){
                resolve(users[userid])
            }else{ 
                reject("User not found")
            }

        },2000)
    })
}

// 3. Chain Multiple Promises
// Create a function fetchAndProcessUser(userId) that:

// Fetches user data

// Adds a role: "user" field to the user

// Logs the modified user

async function fetchAndProcessUser(userId){
    
    try{
        let user_info = await fetchUserData(userId)
        user_info["role"] = "user"
        return user_info  // async function alwaus return a promise so it will be wrapped inside a promise object 

    }catch(err){
        throw err
    }

 } 

fetchAndProcessUser(5).then(res=>console.log(res)).catch(rej=>console.log(rej))

// using catch and then 

function fetchAndProcessUser(userId) {
    return fetchUserData(userId).then((res)=>{
        res["role"]="user"
        return res
    }).catch((rej)=>{
        throw rej 
    }
    )
}