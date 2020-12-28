function sum() {
    let sumFinal = 0;
//    console.log(arguments);
//    console.log(`${Object.keys(arguments)} line 4`);
    const valueObject = Object.values(arguments);
    valueObject.forEach(function(ele) {
        sumFinal += ele;
        // console.log(`${arguments[ele]} line 9`)
    })
    return sumFinal;
}

// function sum(...args){
//     let sumFinal = 0;
//     for(let i = 0; i < args.length; i++){
//         sumFinal += args[i];
//     }
//     return sumFinal
// }

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);