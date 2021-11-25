function my_fun(num1,num2){
    if (num1%2==0 && num2%2==0 ){
        console.log("both are even numbers")
    }
    else{
        console.log("both are not even numbers")
    }
}
var readlineSync=require("readline-sync");
var user1=readlineSync.questionInt("enter the number ")
var user2=readlineSync.questionInt("enter the number ")
my_fun(user1,user2)