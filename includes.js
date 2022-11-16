// add whatever parameters you deem necessary - good luck!
function includes(collection, value, index){
    let start = index || 0;
  
    if(typeof collection == 'string'){
    
        let arr = collection.split('')
        
        for (let i = start; i < arr.length; i++){
          if(arr[i] === value){
            return true
          }
    }
        return false
    } else if(Array.isArray(collection)){
        for (let i = start; i < collection.length; i++){
            if(collection[i] === value){
              return true
            }
      }
          return false
    } else {
        for(let key in collection){
            if(collection[key] === value) {
                return true
            }
        }
        return false
    }
        
}