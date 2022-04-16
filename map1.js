let array = [1 ,2 , 3 , 4 , 5 , 0 , 0 , 1 , 2];

let result = array.reduce((accumulator , currentValue)=>{
    
    return accumulator + currentValue;
} , 0)
console.log(result);