// add whatever parameters you deem necessary - good luck!
function countValues(arr, value) {
  let count = 0;
  for (const element of arr) {
      if (element === value) {
          count++;
      }
  }
  return count;
}
