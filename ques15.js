function my_fun(age){
    if (age>=18){
        console.log("you are eligible for vote")
    }
    else{
        console.log("you are not eligible for vote")
    }
}
var readlineSync=require("readline-sync");
var user=readlineSync.questionInt("entr the number ")
my_fun(user)