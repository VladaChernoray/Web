function productOfNumbers(){
    let arr = [1, 5, 3, 4, 2];
    let result = arr.reduce((sum, current) => sum * current, 1);
    console.log(result);
}
console.log(productOfNumbers())