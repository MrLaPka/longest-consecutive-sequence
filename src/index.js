module.exports = function longestConsecutiveLength(array) {
  let count = 1;
  if(array.length == 0) return 0;
  function sort_numbers(a, b) {
    if (a > b)
    return 1;
    else if (a < b)
    return -1;
    else
    return 0;
   } 
     array.sort(sort_numbers);
     let max = 1;
for(let i = 0;i<array.length;i++){
  if((array[i+1]-array[i]) == 1){
count++;
  }
  else {
    count = 1;
  }
  if(max<count) max = count;
  }
  return max;
}