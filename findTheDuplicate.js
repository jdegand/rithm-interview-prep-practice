// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(arr){
    let length = arr.length
  
    let newArr = []
    let dup = '' // use array and push to it - multiple duplicates
    for (let i = 0; i < length; i++) {
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        } else {
            dup = arr[i]
        }
    }
    return dup  
}