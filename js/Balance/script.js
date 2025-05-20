
    var balance = 10000
    var amount = prompt("enter the amount")
    if(amount<balance || amount==balance){
        alert(`before deduction of balance: ${balance}`)
        balance = balance-amount
        alert("after deduction of balance :" + balance )
        alert("🎉deduction successfully🎉")
    }
    else{
        alert(`⚠️your balance : ${balance} enter amount less than your balance⚠️`)
    };
