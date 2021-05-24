function sortArray(){
    let arr_1 = [-1, 5, -9, 3, -4, -2, -10];
    for (let i = 0; i < arr_1.length; i++)
    {
        if (arr_1[i] < 0){
            arr_1[i] = Math.abs(arr_1[i]);
        }
    }
    function compareNumbers(a, b) {
        return a - b;
    }
    let result_1 = arr_1.sort(compareNumbers);
    console.log(result_1);
    let arr_2 = ['a', 'b', 'k' ,'c']
    let result_2 = arr_2.sort();
    console.log(result_2);
    return('');
}
console.log(sortArray())