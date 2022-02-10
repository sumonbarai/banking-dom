// login area script
const userEmail = document.getElementById("user-email");
const userPassword = document.getElementById("user-password");
const loginBtn = document.getElementById("login-btn");
const errorMessage = document.getElementById("error-message");
loginBtn.addEventListener("click",function(){
    if(userEmail.value == "abc@gmail.com" && userPassword.value ==123456) {
        window.location.href = "account.html";
    }else {
        userEmail.value = "";
        userPassword.value= "";
        errorMessage.innerText="your email and password does not match";
    }
});

