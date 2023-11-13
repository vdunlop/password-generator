// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Generator
function generatePassword() {
  var passwordLength = 0;
  var characterTypes = ["n", "n", "n", "n"];
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

  // Prompt to process password including uppercase letters.
  characterTypes[0] = prompt("Do you want to include uppercase letters in your password? \n(Enter Y for yes or N for no)");
  console.log("uppercase = " + characterTypes[0]);

  if ((characterTypes[0].length < 1) || (characterTypes[0].length > 1)) {
    alert("This is not a valid answer-1.");
    return;
  }
  if ((characterTypes[0].toUpperCase() !== "N") && (characterTypes[0].toUpperCase() !== "Y")) {
      alert("This is not a valid answer-2.");
    return;
  }
  console.log(characterTypes[0].toUpperCase());



  // Prompt to process password including lowercase letters.
  characterTypes[1] = prompt("Do you want to include lowercase letters in your password? \n(Enter Y for yes or N for no)");
  console.log("lowercase = " + characterTypes[1]);

  if ((characterTypes[1].length < 1) || (characterTypes[1].length > 1)) {
    alert("This is not a valid answer.");
    return;
  }
  if ((characterTypes[1].toUpperCase() !== "N") && (characterTypes[1].toUpperCase() !== "Y")) {
    alert("This is not a valid answer");
    return;
  }

  // Prompt to process password including single digit numbers.
  characterTypes[2] = prompt("Do you want to include single digit numbers in your password? \n(Enter Y for yes or N for no)");
  console.log("numbers = " + characterTypes[2]);

  if ((characterTypes[2].length < 1) || (characterTypes[2].length > 1)) {
    alert("This is not a valid answer.");
    return;
  }
  if ((characterTypes[2].toUpperCase() !== "N") && (characterTypes[2].toUpperCase() !== "Y")) {
    alert("This is not a valid answer");
    return;
  }

  // Prompt to process password including special characters.
  characterTypes[3] = prompt("Do you want to include special characters in your password? \n(Enter Y for yes or N for no)");
  console.log("lowercase = " + characterTypes[3]);

  if ((characterTypes[3].length < 1) || (characterTypes[3].length > 1)) {
    alert("This is not a valid answer.");
    return;
  }
  if ((characterTypes[3].toUpperCase() !== "N") && (characterTypes[3].toUpperCase() !== "Y")) {
    alert("This is not a valid answer");
    return;
  }
  console.log(characterTypes);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

