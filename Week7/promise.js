
function wait(sec) {
    return new Promise( (resolve,reject) => (
        setTimeout(()=>{
            if (Math.floor(Math.random()*10)%2==0){
            return resolve("let's fucking go hogya")
            } else{
                return reject("arrey yaar nahi hua")
            }
        },sec*1000)
    ))
}

// wait(1)
// .then((res)=> (console.log(res)))
// .catch((err)=>(console.log(err)))
// .finally(()=>("Bhai mein toh chalunga hi"))

// console.log("Hiiiii")


//creating nested promise apne liye to learn

function doo_guna_wait(sec){
    return new Promise((resolve,reject)=>(
        setTimeout(() => {
            return resolve("mein andar wala wait hu")
        },2*sec*1000)
    ))
} 


wait(1)
.then((res)=> {
    console.log(res)
    return doo_guna_wait(1)})
.then((res) => (console.log(res)))
.catch((err)=>(console.log(err)))
.finally(()=>(console.log("Bhai mein toh chalunga hi")))

console.log("Hiiiii")