function randomfunction(fn,delay){
    let ids;
    return function(...args){
        clearTimeout(ids)
        ids=setTimeout(()=>(
            fn.apply(this,args)
        ),delay*1000)

    }
}

//exmaple function to use 

function greet(name,age){
    console.log(`Hi ${name} i know you are ${age} years old`)
}

const debouncedgreet = randomfunction(greet,2)

debouncedgreet("yaman",22)
debouncedgreet("yaman the second",20)
debouncedgreet("yaman the third",24)



