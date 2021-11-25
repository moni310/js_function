var x=function(num,num1){
    if (num===num1){
        console.log("both are equal")
    }
    else{
        console.log("both are not equal")
    }
}
var readlineSync =require("readline-sync");
var n=readlineSync.questionInt("enter the number ")
var n1=readlineSync.questionInt("enter the number ")
x(n,n1)