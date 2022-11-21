MIN_LENGTH = 8;

function testStrength() {
    // Get Password
    password = document.getElementById('password').value;
    console.log(password);
    password_strength = "";
    setProgressBar(100, "neutral");
    if (password.length < MIN_LENGTH) {
        setStatus("invalid");
    }
    else {
        isPasswordCompromised(password).then(isCompromised => {
            console.log('Is compromised?', isCompromised)
            var strength = 0;
            strength += /[A-Z]+/.test(password) ? 1 : 0;
            strength += /[a-z]+/.test(password) ? 1 : 0;
            strength += /[0-9]+/.test(password) ? 1 : 0;
            strength += /[\W]+/.test(password) ? 1 : 0;

            switch (strength) {
                case 1:
                    setStatus("poor");
                    break;
                case 2:
                    if (isCompromised) {
                        setStatus("poor");
                    }
                    else {
                        setStatus("good");
                    }
                    break;
                case 3:
                    if (isCompromised) {
                        setStatus("poor");
                    }
                    else {
                        setStatus("good");
                    }
                    break;
                case 4:
                    if (isCompromised) {
                        setStatus("good")
                    }
                    else {
                        setStatus("excellent");
                    }

            }
            toggleAlertIsCompromised(isCompromised);
            // Display password strength
        });

    }


}

function setStatus(status) {

    if (status.toLowerCase() == "poor") {
        password_strength = "poor";
        document.getElementById('password-strength').className = "fair";
        setProgressBar(50, "fair");
    }
    if (status.toLowerCase() == "good") {
        password_strength = "Good";
        document.getElementById('password-strength').className = "good";
        setProgressBar(80, "good");
    }
    if (status.toLowerCase() == "excellent") {
        password_strength = "Excellent";
        document.getElementById('password-strength').className = "excellent";
        setProgressBar(100, "excellent");
    }
    if (status.toLowerCase() == "invalid") {
        password_strength = "Too short";
        document.getElementById('password-strength').className = "invalid";
        setProgressBar(5, "invalid");
    }

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
    size = (percent / 5)
    td = document.body.getElementsByTagName("td");
    for (i = 0; i < size; i++) {
        td[i].className = className;
    }
}

function toggleAlertIsCompromised(isCompromised) {
    alert_div = document.getElementById("compromised-alert");
    if (isCompromised) {
        alert_div.style.display = "block";
    }
    else {
        alert_div.style.display ="none";
    }
} 