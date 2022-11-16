// add whatever parameters you deem necessary - good luck!
function removeVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let arr = str.split('')
    return arr.filter(el => !vowels.includes(el.toLowerCase())).join('')
}