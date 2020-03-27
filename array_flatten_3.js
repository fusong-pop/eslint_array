var arr=[1,[2,3,4],[5,6,7],8,9];
function flatten(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i ++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatten(arr))