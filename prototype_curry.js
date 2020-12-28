Function.prototype.curry = function (numArgs) {
    const args = [];
    const fn = this;
    return function _curry (num){
        args.push(num);
        if (args.length === numArgs){
            // return fn(...args);
            return fn.apply(fn, args)
        } else {
            return _curry;
        }
    }
}

function sumTest(){
    let sumFinal = 0;
    const value = Object.values(arguments);
    value.forEach(function (ele) {
        sumFinal += ele;
    })
    return sumFinal;
}

console.log(sumTest.curry(2)(2)(3))
