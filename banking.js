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