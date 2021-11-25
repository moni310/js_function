function my_fun(user){
    dic={}
    for (let i=1; i<=user; i++){
        dic[i]=i*i
    }
    console.log(dic)
}
var readlineSync=require("readline-sync");
var user=readlineSync.questionInt("enter the number ")
my_fun(user)