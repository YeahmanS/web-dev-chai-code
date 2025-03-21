// This is for only one request in particular time and first request only  [ps. it's throttling]

function ptanhi(fn,delay){
    let ids=null;

    return function(...args){

        if (ids === null){
            fn.apply(this,args)
            ids=setTimeout(()=>{
                ids=null
            },delay*1000)
        }
    }
}

const greet = (name,age)=>(console.log(`${name} and ${age}`))

const debouncedgreet = ptanhi(greet,3)

debouncedgreet("yaman",23)
debouncedgreet("yaman",24)
debouncedgreet("yaman",25)

