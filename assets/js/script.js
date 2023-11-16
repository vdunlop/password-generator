// Assignment Code
var generateBtn = document.querySelector("#generate");
var errorCode = -1;

// FUNCTION Password Generator
function generatePassword() {
  var passwordLength = 0;
  var characterTypes = ["n", "n", "n", "n"];
  var MAX_CHARTYPEPOINTER = 3;
  var ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var SPECIAL_CHARS = ['!', ',', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\]', '^', '_', '`', '{', '|', '}', '~'];
  var MAX_LETTERS = 26;
  var MAX_SPECIAL_CHARS = 31;
  var charTypePointer = 0;
  var passwordHolder = "";
  var randomPointer = 0;

  // Prompt to process password length input.
  // Requirements: 8 to 128 characters.
  passwordLength = prompt("Choose a password length between 8 and 128 characters.");

  // Test for the data entry being a number and not another character
  if (isNaN(passwordLength)) {
    alert("Password must be a number.")
    return (errorCode);
  }

  // Test validity of the length being entered.
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Password must be between 8 and 128 characters in length.");
    return (errorCode);
  }

  // Prompt to process password to include uppercase letters.
  characterTypes[0] = prompt("Do you want to include uppercase letters in your password? \n(Enter Y for yes or N for no)");

  if ((characterTypes[0].length < 1) || (characterTypes[0].length > 1)) {
    alert("This is not a valid answer-1.");
    return (errorCode);
  }
  if ((characterTypes[0].toUpperCase() !== "N") && (characterTypes[0].toUpperCase() !== "Y")) {
    alert("This is not a valid answer-2.");
    return (errorCode);
  }

  // Prompt to process password to include lowercase letters.
  characterTypes[1] = prompt("Do you want to include lowercase letters in your password? \n(Enter Y for yes or N for no)");

  if ((characterTypes[1].length < 1) || (characterTypes[1].length > 1)) {
    alert("This is not a valid answer.");
    return (errorCode);
  }
  if ((characterTypes[1].toUpperCase() !== "N") && (characterTypes[1].toUpperCase() !== "Y")) {
    alert("This is not a valid answer");
    return (errorCode);
  }

  // Prompt to process password to include single digit numbers.
  characterTypes[2] = prompt("Do you want to include single digit numbers in your password? \n(Enter Y for yes or N for no)");

  if ((characterTypes[2].length < 1) || (characterTypes[2].length > 1)) {
    alert("This is not a valid answer.");
    return (errorCode);
  }
  if ((characterTypes[2].toUpperCase() !== "N") && (characterTypes[2].toUpperCase() !== "Y")) {
    alert("This is not a valid answer");
    return (errorCode);
  }

  // Prompt to process password to include special characters.
  characterTypes[3] = prompt("Do you want to include special characters in your password? \n(Enter Y for yes or N for no)");

  if ((characterTypes[3].length < 1) || (characterTypes[3].length > 1)) {
    alert("This is not a valid answer.");
    return (errorCode);
  }
  if ((characterTypes[3].toUpperCase() !== "N") && (characterTypes[3].toUpperCase() !== "Y")) {
    alert("This is not a valid answer");
    return (errorCode);
  }

  // Make sure that at least one character type was selected.
  if ((characterTypes[0].toUpperCase() === "N") && (characterTypes[1].toUpperCase() === "N") &&
    (characterTypes[2].toUpperCase() === "N") && (characterTypes[3].toUpperCase() === "N")) {
    alert("You must select at least one character type.");
    return (errorCode);
  }

  //Create the password.
  charTypePointer = 0;
  var counter = 0;
  while (counter < passwordLength) {

    switch (charTypePointer) {

      // Add an uppercase character if user chose it.
      case 0:
        if (characterTypes[charTypePointer].toUpperCase() === "Y") {
          randomPointer = Math.floor(Math.random() * MAX_LETTERS);
          passwordHolder = passwordHolder + ALPHABET[randomPointer].toUpperCase();
          counter = counter + 1;
        }
        break;

      // Add a lowercase character if user chose it.
      case 1:
        if (characterTypes[charTypePointer].toUpperCase() === "Y") {
          randomPointer = Math.floor(Math.random() * MAX_LETTERS);
          passwordHolder = passwordHolder + ALPHABET[randomPointer];
          counter = counter + 1;
        }
        break;

      // Add a number if user chose it.
      case 2:
        if (characterTypes[charTypePointer].toUpperCase() === "Y") {
          randomPointer = Math.floor(Math.random() * 9);
          passwordHolder = passwordHolder + randomPointer;
          counter = counter + 1;
        }
        break;

      // Add a special character if user chose it.
      case 3:
        if (characterTypes[charTypePointer].toUpperCase() === "Y") {
          randomPointer = Math.floor(Math.random() * MAX_SPECIAL_CHARS);
          passwordHolder = passwordHolder + SPECIAL_CHARS[randomPointer];
          counter = counter + 1;
        }
        break;
      default: console.log("switch is broken");
        return (errorCode);
    }

    if (charTypePointer >= MAX_CHARTYPEPOINTER) {
      charTypePointer = 0;
    } else {
      charTypePointer = charTypePointer + 1;
    }
  }
  return (passwordHolder);  // Returns password or an error code
}
// FUNCTION Write Password
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password == errorCode) {
    passwordText.value = "Click Generate Password";
  } else {
    passwordText.value = password;
  }
}

// Add event listener to generate button. Listening for the button to be clicked.
generateBtn.addEventListener("click", writePassword);

