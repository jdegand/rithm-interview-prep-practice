// add whatever parameters you deem necessary - good luck!
function multiples(x,n){
    let arr = []
    let multiple = x
    for(let i = 0; i < n; i++){
      arr.push(x)
      x += multiple
    }
    return arr
}