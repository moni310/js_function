function my_fun(str1,str2){
    if (str1.length>str2.length){
        console.log(str1.length,"str1 len more rhan str2")
    }
    else if(str1.length<str2.length){
        console.log(str2.length,"str2 len more than str1")
    }
    else{
        console.log(str1.length,"the len are equal",str2.length)
    }
}
var readlineSync=require("readline-sync")
var user=readlineSync.question("enter your alpha   ");
var user1=readlineSync.question("enter your alpha  ")
my_fun(user,user1)