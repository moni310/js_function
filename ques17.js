function sum(num){
    var s=0;
    var average=0;
    for(var i=0; i<num; i++){
        var readlineSync=require("readline-sync");
        var user=readlineSync.questionInt("enter yours numbers ")
        s=s+user
        average=s/num

    }
    console.log(s)
    console.log(average)
}
var readlineSync=require("readline-sync");
var user1=readlineSync.questionInt("enter the number ");
sum(user1)