// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(str, letter){
    for (let i = str.length; i >= 0; i--) {
        if (str[i] === letter) {
          return i;
        }
      }
      return -1;
}