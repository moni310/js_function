var my_fun=() => { var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter your name-- ")
if (num>0){
    console.log(num,"It is positive number ")
}
else if (num<0){
    console.log(num,"it is negative ")
}
else{
    console.log("it is zero")
}
console.log("Thank you !")}
my_fun()