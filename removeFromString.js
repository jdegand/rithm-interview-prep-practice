// add whatever parameters you deem necessary - good luck!
function removeFromString(str, start, num){
    let arr = str.split('');
    arr.splice(start, num);
    return arr.join('');
}