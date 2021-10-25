// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var promptLength = window.prompt ("How many characters would you like in your password?");
    if (promptLength < 8 || promptLength > 128) {
        window.alert("You need to provide a valid answer! Please try again.");
        return generatePassword();
    }
    var confirmlowecase = window.confirm ("Click ok to confirm including lowercase characters");
    if (confirmlowecase) { function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
console.log(getRandomLower());
    }

    var confirmuppercase = window.confirm ("Click ok to confirm including uppercase characters");
    if (confirmuppercase) { function getRandomUpper() {
        return String.fromCharCode(Math.floor(math.random() * 26) + 65);
    }

    }    

    var confirmnumeric = window.confirm ("Click ok to confirm including numeric characters");
    if (confirmnumeric)  { function getRandomNumber() {
        return String.fromCharCode(Math.floor(math.random() * 10) + 48);
    }

    }

    var confirmspecial = window.confirm ("Click ok to confirm including special characters");
    if (confirmspecial) { function getRandomSpecial() {
        const special = "!#$%&'()*+,-./:;<=>?@[]_{}|~";
       return special[Math.floor(Math.random() * special.length)];
    }
    }
    
    //Step 3 Generate password based on Criteria
    //Step 3 Display generated password
    //return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





