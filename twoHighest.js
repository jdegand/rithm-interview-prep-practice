// add whatever parameters you deem necessary - good luck!
function twoHighest(arr){
    let max = Math.max(...arr);
    let found = arr.find(el => el === max);

    const index = arr.indexOf(found);
    
    arr[index] = ''

    let second = Math.max(...arr);
    return [second, max];
}