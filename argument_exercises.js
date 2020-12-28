function sum(){
    let sumFinal = 0;
   console.log(arguments);
   console.log(`${Object.keys(arguments)} line 4`);
    const keysObject = Object.keys(arguments);
    keysObject.forEach(function(ele) {
        console.log(keysObject);
        sumFinal += arguments[ele];
        console.log(`${arguments[ele]} line 9`)
    })
    return sumFinal;
}

console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2, 3, 4, 5) === 15);