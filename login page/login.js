let loginTab = document.getElementById("loginTab");
let signupTab = document.getElementById("signupTab");

let loginForm = document.getElementById("loginForm");
let signupForm = document.getElementById("signupForm");

// SWITCH TO LOGIN
loginTab.onclick = function(){
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    loginTab.classList.add("active");
    signupTab.classList.remove("active");
}

// SWITCH TO SIGNUP
signupTab.onclick = function(){
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    signupTab.classList.add("active");
    loginTab.classList.remove("active");
}

// LOGIN SUBMIT
loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    let email = loginForm.querySelector('input[type="email"]').value;
    let password = loginForm.querySelector('input[type="password"]').value;

    if(email === "" || password === ""){
        alert("Fill all fields");
    } else {
        alert("Login Successful");
        window.location.href = "../RetrauntHomepage/rest.html";
    }
});

// SIGNUP SUBMIT
signupForm.addEventListener("submit", function(e){
    e.preventDefault();

    let name = signupForm.querySelector('input[type="text"]').value;
    let email = signupForm.querySelector('input[type="email"]').value;
    let password = signupForm.querySelector('input[type="password"]').value;

    if(name === "" || email === "" || password === ""){
        alert("Fill all fields");
    } else {
        alert("Signup Successful");
    }
});

