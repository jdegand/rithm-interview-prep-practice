// add whatever parameters you deem necessary - good luck!
function totalCaps(arr) {
    let regex = /[A-Z]/g;
    let count = 0;
    for (let str of arr) {
        for (let char of str) {
            if (char.match(regex)) {
                count++;
            }
        }
    }
    return count;
}
