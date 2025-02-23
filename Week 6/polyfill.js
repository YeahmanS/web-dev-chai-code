const arrey = [9,5,6,7,8,1] ;

//console.log(arrey.myat(5)); // it throws an typeError

//WRITING MY OWN POLYFILLS 

//at
Array.prototype.myat = function(index){
    if (index >= 0 && index < this.length) {
        return this[index]
    }  else if (index <0 && index + this.length < this.length){
        return this[index + this.length]
    } else {
        return undefined ;
    }
}

//map
Array.prototype.mymap = function(fun){
    let newarray= new Array(this.length) ;
    for(let i=0;i<this.length;i++){
        newarray[i]=fun(this[i]);
    }
    return newarray;

}

console.log(arrey.mymap((x) => x*x));

// reduce 

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

console.log(array.reduce(reducer));

Array.prototype.myreduce = function (callbackFn, initialValue){
    var i=0;
    if (!initialValue) {
        initialValue=this[0]
        i++;
    };
    let currentValue;
    let accumulator=initialValue
    for(i;i<this.length;i++){
        currentValue=this[i];
        accumulator=callbackFn(accumulator, currentValue,i);
        
    }
    return accumulator
}

console.log(array.myreduce(reducer));

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.myreduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

const emptyarray = new Array(0)

console.log(emptyarray.myreduce(reducer,0))