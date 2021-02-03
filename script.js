// Assignment Code
var generateBtn = document.querySelector("#generate");


var passwordCharacters = {
passwordLowerCase: "abcdefghijklmnopqrstuvwxyz",
passwordUpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
passwordNumbers: "123456789",
passwordSpecialCharacter: "!@#$%^&",
}






function generatePassword() {
 
  
  var passwordLength = prompt("How many characters would you like the password to be?")
  console.log(passwordLength)
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter valid number!")

    } 
   
  var passwordLowerCase = confirm("Would you like to use Lowercase characters?")
  console.log(passwordLowerCase)
    

  var passwordUpperCase = confirm("Would you like to use Uppercase characters?")
  console.log(passwordUpperCase)
   

  var passwordNumbers = confirm("Would you like to include numbers in the password?")
  console.log(passwordNumbers)
    

  var passwordSpecialCharacters = confirm("Would you like to include special characters?")
  console.log(passwordSpecialCharacters)
   
  

}





// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 console.log(password)
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

