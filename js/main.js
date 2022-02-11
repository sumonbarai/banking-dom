// user login function code
function login(email, password) {
    if (email == "abc@gmail.com" && password == "123456") {
        window.location.href = "account.html"
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.innerText = "please give correct email and password";
    }
}

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function() {
    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;
    login(email, password);
});