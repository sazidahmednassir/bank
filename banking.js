// // handle deposit button event
// document.getElementById('deposit-button').addEventListener('click', function () {
//     // get the amount deposited
//     const depositInput = document.getElementById('deposit-input');
//     const newDepositAmountText = depositInput.value;
//     const newDepositAmount = parseFloat(newDepositAmountText);

//     // update deposit total
//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositText = depositTotal.innerText;
//     const previousDepositAmount = parseFloat(previousDepositText);
//     const newDepositTotal = previousDepositAmount + newDepositAmount;

//     depositTotal.innerText = newDepositTotal;

//     // update account balance 
//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//     balanceTotal.innerText = newBalanceTotal;
//     // clear the deposit input field
//     depositInput.value = '';
// });



// // handle withdraw event handler
// document.getElementById('withdraw-button').addEventListener('click', function () {
//     const withdrawInput = document.getElementById('withdraw-input');
//     const withdrawAmountText = withdrawInput.value;
//     const newWithdrawAmount = parseFloat(withdrawAmountText);
//     console.log(newWithdrawAmount);

//     // set withdraw total
//     const withdrawTotal = document.getElementById('withdraw-total');
//     const previousWithdrawText = withdrawTotal.innerText;
//     const previousWithdrawTotal = parseFloat(previousWithdrawText);

//     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
//     withdrawTotal.innerText = newWithdrawTotal;

//     // update balance
//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceText);
//     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

//     balanceTotal.innerText = newBalanceTotal;

//     // clear withdraw input
//     withdrawInput.value = '';
// })

///use function
function getInputValue(inputId) {
    debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /*
     const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


/////event function
document.getElementById('deposit-button').addEventListener('click', function () {
    /* 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */


    // get and update deposit total
    /*  
    const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;
     const previousDepositTotal = parseFloat(depositTotalText);
 
     depositTotal.innerText = previousDepositTotal + depositAmount; */


    // update balance
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

// handle withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*     
    const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        const withdrawAmount = parseFloat(withdrawAmountText); */


    // get and update withdraw total
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */


    // update balance after withdraw
    /* 
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
    
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }
});