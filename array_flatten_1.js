var arr = [1,[2,3,4],[5,6,7],8,9];
   function flatten(arr) {
    return arr.toString().split(',').map(function(item){
        return Number(item)
    })
}
console.log(flatten(arr))
