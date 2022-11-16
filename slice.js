// add whatever parameters you deem necessary - good luck!
function slice(arr, start, end){

    if(end > arr.length || end === undefined) end = arr.length

    let newArr = []
    for(let i = start; i < end; i++){
      newArr.push(arr[i])
    }
    return newArr
}