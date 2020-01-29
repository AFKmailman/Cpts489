function validateLogin() {
    let validEmail = false;
    let validPassword = false;
    let emailRGEX = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    let passwordRGEX = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    //check email
    let email = document.getElementById('emailInput');
    validEmail = emailRGEX.test(email.nodeValue);
    console.log("validEmail:" + validEmail);
    //check password
    let password = document.getElementById('passwordInput');
    validPassword = passwordRGEX.test(password.nodeValue);
    console.log("validPassword:" + validPassword);

    //alert if wrong
    if(validEmail && validPassword){
        //move to next page
        alert("move to next page");
        console.log("move to next page");
        document.getElementById('loginPageDiv').style.display = 'none';
    }
    else if (validEmail && !validPassword){
        //incorrect password
        alert("password is too weak.");
    }
    else if (!validEmail && validPassword){
        //incorrect email
        alert("email is not valid.")
    }
    else {
        //both are wrong
        alert("email is not valid and password is too weak");
    }
}