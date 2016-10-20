/**
 * Created by nalantianyi on 2016/10/20.
 */
var result = [1, 2, 3].reduce((total, current)=>total + current, 0);
console.log(result);

var even = [3, 1, 56, 7].filter(el=>!(el % 2));
console.log(even);

var sorted=[{price:1,total:2},{price:3,total:4}].sort((a,b)=>{
    var diff=a.price-b.price;
    if(diff!==0)
    {
        return diff;
    }
    return a.total-b.total;
});
console.log(sorted);