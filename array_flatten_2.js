var arr=[1,[2,3,4],[5,6,7],8,9];
var newarr = arr.reduce((a,b)=>{
    return a.concat(b)
},[])
console.log(newarr)