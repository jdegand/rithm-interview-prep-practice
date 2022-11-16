// add whatever parameters you deem necessary - good luck!
function stringFromObject(obj){
    let arr = [];
    for (const [key, val] of Object.entries(obj)) {
        arr.push(`${key} = ${val}`);
    }
    return arr.join(', ');
}