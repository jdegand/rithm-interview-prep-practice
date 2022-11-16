// add whatever parameters you deem necessary - good luck!
function separate(arr){
    let cats = arr.filter(el => el === 'cat')
    let water = arr.filter(el => el === 'water')
    let dogs = arr.filter(el => el === 'dog')
    return [...cats, ...water, ...dogs]
}