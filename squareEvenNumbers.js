// add whatever parameters you deem necessary - good luck!
/*
function squareEvenNumbers(arr){
    let evens = arr.filter(el => el % 2 === 0)
    return evens.reduce((a,b) => a * a + b * b)
}
*/

function squareEvenNumbers(arr){
    const even = (element) => element % 2 === 0;
  
    if(arr.some(even)) {
      let evens = arr.filter(even)
      if(evens.length === 1) return evens[0] * evens[0]
      
      return evens.reduce((a,b) => a * a + b * b)
    } 
      return 0;
}