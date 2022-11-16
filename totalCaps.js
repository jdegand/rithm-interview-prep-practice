// add whatever parameters you deem necessary - good luck!
function totalCaps(arr){
    let regex = /[A-Z]/g;
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        let array = arr[i].split('').forEach(el => {
            if(el.match(regex)){
                count++
            }
        })
    }
    return count
}