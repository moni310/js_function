function perfect_num(num){
    var i=0;
    var s=0;
    while (i<num){
        if (num%i==0){
            s=s+i
        }
        i=i+1
    }
    if (num==s){
        console.log("this is perfect number ")
    }
    else{
        console.log("this is not perfect number ")
    }

}
var readlineSync=require("readline-sync");
var num1=readlineSync.questionInt("enter the number  ")
perfect_num(num1)