// add whatever parameters you deem necessary - good luck!
function min(arr){
    let minimum = arr[0];
 
   for (var i = 0; i < arr.length; i++) {
     if (arr[i] < minimum) {
       minimum = arr[i];
     }
   }
   return minimum;
}