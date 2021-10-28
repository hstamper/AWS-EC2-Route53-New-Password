// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "10"]; 
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "_", "{", "}", "|", "~", "]"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUppercase;
var confirmLowercase;

function generatePassword() {
var confirmLength = (prompt("How many characters would you like your password to contain?"));
{
    console.log(confirmLength);
}
 
while (confirmLength < 8 || confirmLength > 128) {
    alert("Password must be between 8-128 characters Try again");

var confirmLength = (prompt("How many characters would you like your password to contain?"));   

}
var confirmNumericCharacter = confirm("Click ok to confirm including numeric characters");


var confirmLowercase = confirm("Click Ok to confirm including lowercase characters");


var confirmUppercase = confirm("Click ok to confirm including uppercase characters");


var confirmSpecialCharacter =confirm("Click ok to confirm including special characters");


}

var passwordCharacters = []

if (confirmSpecialCharacter) {
    passwordCharacters =passwordCharacters.concat(special)
}

if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(numeric)
}



    //Step 3 Generate password based on Criteria
    //Step 3 Display generated password
    //return "Generated password will go here!";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





