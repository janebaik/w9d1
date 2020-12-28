Function.prototype.curry = function (numArgs) {
    const args = [];
    const fn = this;
    console.log(fn);
    return function (num) {
        args.push(num);
        if (args.length === numArgs) {
            curry.apply(fn, args);
        } else {
            return fn;
        }
    }
}
// [1,2,3].myEach()
function sumTest() {
    let sumFinal = 0;
    const value = Object.values(arguments);
    value.forEach(function (ele) {
        sumFinal += ele;
    })
    return sumFinal;
}
sumTest.curry(4)
// console.log(sum(5)(30)(20)(1));