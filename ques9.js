function fun(name,name1){
    console.log(name,"\n",name1)
}
var readlineSync=require("readline-sync");
var user=readlineSync.question("enter you name  ");
var user1=readlineSync.question("enter your work  ");
fun(user,user1)