// add whatever parameters you deem necessary - good luck!
function charAt(str, num){
    let array = str.split('')
    
    if(array.length < num) return ''

    return array[num]
}