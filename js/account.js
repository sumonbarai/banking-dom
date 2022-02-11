// function create
function valueInput(idName) {
    const presentValue = document.getElementById(idName);
    let money = parseFloat(presentValue.value);
    presentValue.value = "";
    return money;
}

function sumOfMoney(idName, inputMoney) {
    const targetId = document.getElementById(idName);
    const money = parseFloat(targetId.innerText);
    targetId.innerText = money + inputMoney;
}

// balance calculation
function totalBalance(inputTk, addOrLess) {
    const totalBalance = document.getElementById("total-balance");
    const money = parseFloat(totalBalance.innerText);
    if (inputTk > 0 && addOrLess == true) {
        totalBalance.innerText = money + inputTk;
    } else if (inputTk > 0 && addOrLess == false) {
        totalBalance.innerText = money - inputTk;
    }
}

// deposit value 
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
    const currentMoney = valueInput("input-deposit");
    if (currentMoney > 0) {
        sumOfMoney("deposit-balance", currentMoney);
        totalBalance(currentMoney, true);
    }
});

// withdrew value
const withdrewBtn = document.getElementById("withdrew-btn");
withdrewBtn.addEventListener("click", function () {
    const currentMoney = valueInput("input-withdrew");
    if (currentMoney > 0) {
        sumOfMoney("withdrew-balance", currentMoney);
        totalBalance(currentMoney, false);
    }
});