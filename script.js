// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var promptLength = window.prompt ("How many characters would you like in your password?");
    if (promptLength < 8 || promptLength > 128) {
        window.alert("You need to provide a valid answer! Please try again.");
        return generatePassword();
    }



    //Step 1 Prompt the user for the password criteria
    //a. Password Lenght 8 < 128 
    //b. Lowercase, uppercase, Special Characters

    //Step 2 Validate the input 
    //Step 3 Generate password based on Criteria




    //Step 3 Display generated password
    return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);