// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Generator
function generatePassword() {
  console.log("I'm inside generate password.");

  // Prompt to process password length input.
  // Requirements: 8 to 128 characters.
  passwordLength = prompt("Choose a password length between 8 and 128 characters.");
  console.log("passwordLength = " + passwordLength);

  // ***
  //if (typeof passwordLength) == "number") {
  //  alert("Length must be a number.");
  //  return;
  //}
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Password must be between 8 and 128 characters in length.");
    return;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

