function my_fun(){
    console.log("ππWelcomeππ !\n Swip your card here π³π³π³")
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
                        console.log("πThank you !π")
                    }
                    else{
                        console.log("Ohh ! Sorry:) π you do not have enough balance in your account")
                    }

                }
                else if(transaction==3){
                    var readlineSync=require("readline-sync");
                    var deposit=readlineSync.questionInt("Enter how much you want to deposit  ")
                    console.log(deposit+total_bal,"this is your tatal amount")
                    console.log("πThank you !π")
                    
                }
                else if(transaction==4){
                    var readlineSync=require("readline-sync");
                    var newpin=readlineSync.question("Enter your new pin  ")
                    if (newpin.length==4){
                        console.log("your pin has changed")
                        console.log("πThank you !π")
                    }

                }
                else if (transaction==5){
                    console.log("Remove your cardπ³π³π³")
                    console.log("πOkay Thank youπ")

                }
            }
            else{
                console.log("πyour pin is not correct π")
            }

        }
        else{
            console.log("ππyou pin len is not vailidππ ")
        }
        

    }
    else{
        console.log("ππyour laungage is not avilable hereππ ")
    }

console.log("ππ€Thank you for using UNION BANKππ€ !")
}
my_fun()