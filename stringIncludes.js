// add whatever parameters you deem necessary - good luck!
function stringIncludes(str, letter){
    let array = str.split('')
    return array.find(el => el.toLowerCase() === letter.toLowerCase()) ? true : false
}