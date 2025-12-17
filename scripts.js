  /*
Name: Firas Iqbal
Date created: 09/26/2025
Date last edited: 12/6/2025
Version: 1.0
Description: Homework 1 JS 
*/

//dynamic date 
const date = new Date();
let text = date.toLocaleDateString();
document.getElementById("todayDate").innerHTML = text;


//name slider 
let slider = document.getElementById("pain");
let output = document.getElementById("pain-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

//lower case uid

function lowerUid() {
    uid = document.getElementById("uID").value.toLowerCase();
    document.getElementById("uID").value = uid;
}

//password validation
function validatePword() {
    const pass = document.getElementById("pass").value;
    const uID = document.getElementById("uID").value.toLowerCase();
    const fname = document.getElementById("fname").value.toLowerCase();
    const lname = document.getElementById("lname").value.toLowerCase();

    if (pass.trim() === "") {
        errorElement.innerHTML = "";
        return;
    }
    
    let errorMessage = [];

    if (!pass.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
    if (!pass.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
    if (!pass.match(/[0-9]/)) errorMessage.push("Enter at least one number");
    if (!pass.match(/[!@#$%&*\-_.+()]/)) errorMessage.push("Enter at least one special character");
    if (pass.toLowerCase().includes(uID) && uID) errorMessage.push("Password can't contain user ID");
    if (pass.toLowerCase().includes(fname) && fname) errorMessage.push("Password can't contain user first name");
    if (pass.toLowerCase().includes(lname) && lname) errorMessage.push("Password can't contain user last name");

    const errorElement = document.getElementById("pword1-error");
    if (errorMessage.length > 0) {
        errorElement.innerHTML = errorMessage.join("<br>");
        return false;
    } else {
        errorElement.innerHTML = "";
    }
}

//confirm password validation 
function confirmPword() {
    pword1 = document.getElementById("pass").value;
    pword2 = document.getElementById("confirmPass").value;

        if (pword2.trim() === "") {
        errorElement.innerHTML = "";
        return;
    }

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='2'>Review Your Information:</th></tr>";

    for (let i = 0; i < formcontent.elements.length; i++) {
        let el = formcontent.elements[i];
        if (el.value !== "" || el.checked) {
            switch (el.type) {
                case "checkbox":
                    if (el.checked) {
                        formoutput += `<tr><td class='output'>${el.name}</td><td class='output'>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (el.checked) {
                        formoutput += `<tr><td class='output'>${el.name}</td><td class='output'>${el.value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td class='output'>${el.name}</td><td class='output'>${el.value}</td></tr>`;
            }
        }
    }


    formoutput += "</table>";
    formoutput += '<button id="remove" onlclick="removeReview()">Remove</button>';
    document.getElementById("showInput").innerHTML = formoutput;
}

//Validate DOB
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

//Validate Soical
function validateSsn() {
    const ssn = document.getElementById("social").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("social-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("social-error").innerHTML = "";
        return true;
    }
}

//Validate Phone
function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phoneR = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (!phoneR.test(phone)) {
        document.getElementById("phone-error").innerHTML = 
        "Please enter a valid Phone Number";
        return false;
    } else {
        document.getElementById("phone-error").innerHTML = "";
        return true;
    }
}

//Validate Email

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailr.test(email)) {
        document.getElementById("email-error").innerHTML = 
        "Please enter a valid Email";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}



//Validate Zipcode

function validateZcode() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zip-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

//Validate User ID
function validateUid() {
    uid = document.getElementById("uID").value.toLowerCase();
    document.getElementById("uID").value = uid;

    if (uid.length == 0) {
        document.getElementById("uID-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uID-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uID-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uID-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uID-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uID-error").innerHTML = "";
        return true;
    }
}
// Validate City
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

// Valicate First Name

function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

//Validate Inital
function validateMini() {
    mini = document.getElementById("mintial").value;
    var namePattern = /^[A-Z]+$/;

    mini = mini.toUpperCase();
    document.getElementById("mintial").value = mini;

    if (!mini.match(namePattern)) {
        document.getElementById("mintial-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mintial-error").innerHTML = "";
        return true;
    }
}

//Validate Last Name
function validateLname() {
    Lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (Lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty"
        return false;
    } else if (Lname != "") {
        if (!Lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (Lname.length < 2) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (Lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}


//Alert Box
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}
// Validat Everything
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePword()) {
        valid = false;
    }
    if (!confirmPword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }


// saves input form
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}


// receives cookie name
function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

//inputs vlaue for each field
inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // Prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // Set a cookie when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});


// welcome message using getCookie function
var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}


// remeber me 
document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // If "Remember Me" is unchecked, delete cookies
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } else {
        // If "Remember Me" is checked or rechecked, save cookies
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});


// delete all cookies
function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}

//ensures cookies are deleted
document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});





