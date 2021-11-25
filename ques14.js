function my_fun(list1,list2){
    for (i in list1){
        if (list1[i]%2==0 && list2[i]%2==0){
            console.log("both are even ")
            console.log("--------------------")
        }
        else{
            console.log("both are not even ")
            console.log("--------------")
        }
    }
}
my_fun([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87]  )