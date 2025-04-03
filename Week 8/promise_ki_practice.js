// i guess we have to create some project to handle promises in js 

console.log("hiii")
setTimeout(()=>(console.log("timeout 1")),1000)
Promise.resolve(42).then((value)=>(console.log(`hello ${value}`)))
setTimeout(()=>(console.log("timeout 2")),1000)
console.log("byee")

// callback hell

function getData(callback){
    setTimeout(()=>{
        console.log("Data fetched")
        callback();
},1000)
}

function processdata(callback){
    setTimeout(()=>{
        console.log("Data processed")
        callback();
    },1000)
}

function displaydata(){
    setTimeout(()=>{
        console.log("Display data")
    },1000)
}

// getData(processdata(displaydata())) WHY THIS WON'T WORK

// When you have nested function calls, like processdata(displaydata()), the JavaScript engine must first determine the value of the innermost expression (displaydata()) before it can evaluate the outer expression (processdata(...)).

// Example Breakdown:

// Consider getData(processdata(displaydata())).
// displaydata() is called: The engine sees displaydata(). It executes the function, and since it doesn't explicitly return anything, it returns undefined.
// processdata(undefined) is called: The engine now has processdata(undefined). It executes processdata, passing undefined as the argument. This also returns undefined.
// getData(undefined) is called: Finally, the engine has getData(undefined). It attempts to call getData, passing undefined as the argument.

// getData(()=>{
//     processdata(()=>{
//         displaydata()
//     })
// })


/// now using promise

function getdatapromise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Got the data")
        },1000)
    })
}

function processdatapromise(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`${data} + Processing the data`)
        },1000)
    })
}

function displaydatapromise(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`${data} + Displaying the data`)
        },1000)
    })
}

getdatapromise()
    .then(processdatapromise)
    .then(displaydatapromise)
    .then((final)=>(console.log(final)))

//USING ASYNC AWAIT 

async function displaykardunga(){
    let data = await getdatapromise()
    let process = await processdatapromise(data)
    let display = await displaydatapromise(process)
    console.log(display)
}

displaykardunga()