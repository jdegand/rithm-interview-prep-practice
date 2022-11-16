// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(arr){
    const ordered = Object.keys(arr).sort().reduce(
        (obj, key) => { 
          obj[key] = arr[key]; 
          return obj;
        }, 
        {}
    );

    return [+Object.keys(ordered)[0],+Object.keys(ordered)[Object.keys(ordered).length-1]]
}