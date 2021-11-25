function my_fun(number){
    var s=0;
    for(var i=0; i<=number; i++){
        if (i% 3==0 || i%5==0){
            s=s+i

        }
    }
    console.log(s)
}
var readlineSync=require("readline-sync");
var user=readlineSync.questionInt("enter the number ")
my_fun(user)