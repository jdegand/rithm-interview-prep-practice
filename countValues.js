// add whatever parameters you deem necessary - good luck!
function countValues(arr, value){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === value) {
        count++
      }
    }
    return count
}