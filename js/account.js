// account calculation system
const depositBtn = document.getElementById("deposit-btn");
const withdrewBtn = document.getElementById("withdrew-btn");
const totalBalance = document.getElementById("total-balance");
// deposit button calculation
depositBtn.addEventListener("click", function(){
    const depositBalance = document.getElementById("diposit-balance");
    const inputDeposit = document.getElementById("input-deposit");
    let sum = parseFloat(depositBalance.innerText) + parseFloat(inputDeposit.value);
    depositBalance.innerText = sum;
    let total = parseFloat(totalBalance.innerText) +  parseFloat(inputDeposit.value);
    totalBalance.innerText = total;
    inputDeposit.value = null;
});

// withdrew button calculation
withdrewBtn.addEventListener("click", function() {
    const withdrewBalance = document.getElementById("withdrew-balance");
    const inputWithdrew = document.getElementById("input-withdrew");
    let sum = parseFloat(withdrewBalance.innerText) + parseFloat(inputWithdrew.value);
    withdrewBalance.innerText = sum;
    let total = parseFloat(totalBalance.innerText) - parseFloat(inputWithdrew.value);
    totalBalance.innerText = total;
    inputWithdrew.value = null;

});