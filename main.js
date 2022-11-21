MIN_LENGTH = 8;

function testStrength() {
    // Get Password
    password = document.getElementById('password').value;
    console.log(password);
    password_strength = "";
    setProgressBar(100, "neutral");

    // Check if it's too short
    if (password.length < MIN_LENGTH) {
        password_strength = "Too short";
        document.getElementById('password-strength').className = "invalid";
        setProgressBar(5, "invalid");
    }
    else if (password.length >= 16) {
        password_strength = "Excellent";
        document.getElementById('password-strength').className = "excellent";
        setProgressBar(100, "excellent");
    }
    else if (password.length >= MIN_LENGTH && hasUppercase(password) && hasLowerCase(password)) {
        if (hasSpecial(password) && hasNum(password)) {
            password_strength = "Good";
            document.getElementById('password-strength').className = "good"; 
            setProgressBar(80, "good");
        } else {
            password_strength = "Fair";
            document.getElementById('password-strength').className = "fair";
            setProgressBar(50, "fair");
        }
    }

    // Display password strength
    document.getElementById('password-strength').innerHTML = password_strength;
}


function hasLowerCase(password) {
    return (/[a-z]/.test(password));
}

function hasUppercase(password) {
    return (/[A-Z]/.test(password));
}

function hasSpecial(password) {
    return (/\W|_/g.test(password))
}

function hasNum(password) {
    return (/\d/.test(password));
}

// Pass in what percentage of the bar should be filled and what the class should be
function setProgressBar(percent, className) {
    size = (percent/5)
    td = document.body.getElementsByTagName("td");
    console.log(td);
    for (i = 0; i < size; i++) {
        td[i].className = className;
    }
}
