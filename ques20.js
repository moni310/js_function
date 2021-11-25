function license_checker(speed){
    if(speed < 70){
        console.log("ok");
    }
    if(speed > 70){
        p=0
        for(var i=70;i<speed;i+=5){
            p=p+1
    }
    if(p>12){
        console.log("License suspended");
    }
    else{
        console.log(points);
}
}
}
var readlineSync=require("readline-sync");
var user=readlineSync.questionInt("enter the number ")   
license_checker(user);
    
    