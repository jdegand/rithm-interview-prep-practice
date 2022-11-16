// add whatever parameters you deem necessary - good luck!
function entries(obj){
    let arr = [];
    for (const [key, val] of Object.entries(obj)) {
        let subArr = []
        subArr[0] = `${key}`
        subArr[1] = `${val}`== Number(`${val}`) ? Number(`${val}`) : `${val}` == 'true' || `${val}` == 'false' ? Boolean(`${val}`) : `${val}`
        arr.push(subArr)
    }
    return arr;
}