// add whatever parameters you deem necessary - good luck!
function countNumbers(arr){
    let count = 0;
    if(arr.length === 0){
      return 0
    }
    for(let i = 0; i < arr.length; i++){
       if(arr[i] == Number(arr[i]) && arr[i] !== '' && arr[i] !== ' '){
        count++
       }
    }
    return count
}