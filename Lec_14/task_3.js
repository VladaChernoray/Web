function displayMessage(){
    var arr = [1, 0, 3, 4, 5, 6, 7, 0, 8];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0){
            var res = "These is zero in this array";
        }
    }
    return (res);
}
console.log(displayMessage())