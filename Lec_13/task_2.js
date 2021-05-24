function returnNewFormat(x,y){
    var x,y;
    if (y => 100){
        x++;
        y = y % 100;
    }
    return ("Вартість замовлення: " + x + " гривень " + y  + " копійок" )
}
console.log(returnNewFormat(1,102))