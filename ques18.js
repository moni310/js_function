function evenodd(number){
    for (var i=0; i<=number; i++){
        if (i%2==0){
            console.log(i,"EVEN NUMBER")
            console.log("------------")
        }
        else{
            console.log(i,"ODD NUMBER")
            console.log("--------")
    }
}
}
var readlineSync=require("readline-sync")
var user=readlineSync.questionInt("enter the number ")
evenodd(user)