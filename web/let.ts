/**
 * Created by nalantianyi on 2016/10/20.
 */
var fns = [];
for (let i = 0; i < 5; i++) {
    fns.push(function () {
        console.log(i);
    });
}
fns.forEach(fn=>fn());