// add whatever parameters you deem necessary - good luck!
function lastIndexOf(arr, value){
    for(let i = arr.length; i >= 0; i--){
      if(arr[i] === value)  return i
    }
    return -1;
}