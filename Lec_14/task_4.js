function findFive(){
    var arr = [1, 5, 3, 4, 5, 6, 7, 0, 8];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 5){
            var res = i;
            console.log("In this array 5 has " + res + " position");
        }
    }
    return('');
}
console.log(findFive())