function curriedSum(numArgs){
    const numbers = [];
    function _curriedSum(num){
        numbers.push(num)
        if(numbers.length === numArgs){
            return numbers.reduce((acc, el) => acc + el);
        }
        return _curriedSum
    };
    return _curriedSum
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1);