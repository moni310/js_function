function fun(list1){
    var c=0;
    for (var i of list1){
        if (i>=20){
            c=c+1
        }
    }
    console.log(c)

}

fun([32,44,10,4,33,23,20,45,77])