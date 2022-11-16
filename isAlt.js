// add whatever parameters you deem necessary - good luck!
function isAlt(str){
    let length = str.length;
    if(length % 2 !== 0){
        return false
    }
    
    let evens = str.split('').map((el, index) => {
        if(index % 2 === 0){
            return el
        }
    })

    let odds = str.split('').map((el, index) => {
        if(index % 2 !== 0){
            return el
        }
    })

    let regex = /aeiou/gi;

    if(regex.test(evens.join('')) && !regex.test(odds.join(''))){
        return false
    }
        return true
}