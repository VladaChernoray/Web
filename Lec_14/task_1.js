function createNewArray(){
    var a = ['aaa', 2, 3], b = ['aaa', 2, 10, 1, 10];
    var c = a.concat(b);
    var d = c.filter(function (item, pos) {return c.indexOf(item) == pos});
    console.log(d);
    return ('');
}
console.log(createNewArray())