module.exports = function longestConsecutiveLength(array) {

  var arr = new Array();
  arr[0] = 0;
  
  for(var i=1;i<array.length;i++) arr[i] = (array[i] == array[i-1] + 1) ? (arr[i-1] + 1) : 1;
  
  var length = Math.max.apply({},arr);
  if (array.length == 0)
  return 0
  else if(array.length == 1)
  return 1
  else
  return length
  // your solution here
}
