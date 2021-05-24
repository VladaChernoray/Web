function func(x_1,y_1, x_2, y_2){
    var x_1, x_2, y_1, y_2;
    if ((((x_1 > 0)&&(y_1 > 0))&&((x_2 > 0)&&(y_2 > 0)))
        ||(((x_1 < 0)&&(y_1 > 0))&&((x_2 < 0)&&(y_2 > 0)))
        ||(((x_1 < 0)&&(y_1 < 0))&&((x_2 < 0)&&(y_2 < 0)))
        ||(((x_1 > 0)&&(y_1 < 0))&&((x_2 > 0)&&(y_2 < 0)))){
        var distance = Math.sqrt(Math.pow((x_1 - x_2), 2) + Math.pow((y_1 - y_2), 2) );
        return (distance);
    }

    if (((x_1 < 0)&&(y_1 < 0))||((x_2 < 0)&&(y_2 < 0))){
        return("3 quarter of the plane")
    }
    if (((x_1 < 0)&&(y_1 > 0))||((x_2 < 0)&&(y_2 > 0))){
        return("2 quarter of the plane")
    }
    if (((x_1 > 0)&&(y_1 > 0))||((x_2 > 0)&&(y_2 > 0))){
        return("1 quarter of the plane")
    }
    if (((x_1 > 0)&&(y_1 < 0))||((x_2 > 0)&&(y_2 < 0))){
        return("4 quarter of the plane")
    }
    if (((x_1 === 0)&&(y_1 === 0))||((x_2 === 0)&&(y_2 === 0))){
        return("center of the plane")
    }
    if ((((x_1 === 0)&&(y_1 < 0))||((x_2 === 0)&&(y_2 < 0)))
        ||(((x_1 === 0)&&(y_1 > 0))||((x_2 === 0)&&(y_2 > 0))))
    {
        return("belongs to the y-axis")
    }
    if ((((x_1 < 0)&&(y_1 === 0))||((x_2 < 0)&&(y_2 === 0)))
        ||(((x_1 > 0)&&(y_1 === 0))||((x_2 > 0)&&(y_2 === 0))))
    {
        return("belongs to the x-axis")
    }

    else return('');
}
console.log(func(-1,1,2,-2))