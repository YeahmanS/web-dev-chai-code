const arr = [1,2,3,4,5,6]

console.log(arr.map((x)=>(x*x)))

Array.prototype.meramap = function (callback){
    const newarr = []
    for (let i=0 ; i < this.length ; i++){
        newarr[i] = callback(this[i])
    }

    return newarr
}

console.log(arr.meramap((x)=>(x*x)))
