module.exports = function longestConsecutiveLength(array) {
  let count = 1;
  let arr = new Array;
  if(array.length == 0) return 0;
  arr[0] = array[0];
  let j = 0;
  function sort_numbers(a, b) {
    if (a > b)
    return 1;
    else if (a < b)
    return -1;
    else
    return 0;
   } 
     array.sort(sort_numbers);
for(let i = 0;i<array.length;i++){
  if((array[i+1]-array[i]) == 1){
count++;
arr[j] = count;
  }
  else if(((array[i+1]-array[i]) != 1)&&((array[i]-array[i-1]) == 1)){
    count = 1;
    j++;
  }
  }
  let max = arr[0];
  for(let i = 0;i<arr.length;i++){
    if(max<arr[i])
    max = arr[i];
  }
  return max;
}