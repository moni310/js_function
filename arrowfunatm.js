function my_fun(){
    console.log("👏👏Welcome👏👏 !\n Swip your card here 💳💳💳")
    var readlineSync=require("readline-sync");
    var lan=readlineSync.question("Enter your laungage ")
    var total_bal=10000;
    if (lan=="English" || lan=="Hindi"){
        var readlineSync=require("readline-sync");
        var pin=readlineSync.question("Enter your pin ")
        var confirmpin=readlineSync.question("pls confirm your pin\n ")
        if ((pin.length)>1 && (pin.length<5)){
            if (pin===confirmpin){
                console.log("choose your transaction \n")
                console.log("1.Balance Enquiry\n 2. Withdraw money\n 3.Deposit\n 4. change your pin\n 5.Quit\n")
                var readlineSync=require("readline-sync");
                var transaction=readlineSync.questionInt("Enter your transaction  ")
                if (transaction==1){
                    console.log("Your total account balacnce=",total_bal)
                }
                else if (transaction==2){
                    var readlineSync=require("readline-sync");
                    var withdraw=readlineSync.questionInt("Enter how much you want to withdraw  ")
                    if (withdraw<total_bal){
                        console.log(total_bal-withdraw,"is left in your account")
                        console.log("🙂Thank you !🙂")
                    }
                    else{
                        console.log("Ohh ! Sorry:) 🙁 you do not have enough balance in your account")
                    }

                }
                else if(transaction==3){
                    var readlineSync=require("readline-sync");
                    var deposit=readlineSync.questionInt("Enter how much you want to deposit  ")
                    console.log(deposit+total_bal,"this is your tatal amount")
                    console.log("🙂Thank you !🙂")
                    
                }
                else if(transaction==4){
                    var readlineSync=require("readline-sync");
                    var newpin=readlineSync.question("Enter your new pin  ")
                    if (newpin.length==4){
                        console.log("your pin has changed")
                        console.log("🙂Thank you !🙂")
                    }

                }
                else if (transaction==5){
                    console.log("Remove your card💳💳💳")
                    console.log("🙂Okay Thank you🙂")

                }
            }
            else{
                console.log("😔your pin is not correct 🙁")
            }

        }
        else{
            console.log("🙁😔you pin len is not vailid🙁😔 ")
        }
        

    }
    else{
        console.log("🙁😔your laungage is not avilable here🙁😔 ")
    }

console.log("🙏🤘Thank you for using UNION BANK🙏🤘 !")
}
my_fun()