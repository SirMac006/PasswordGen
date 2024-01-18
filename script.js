// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){

var finalPass = [];
/*character arrays*/
var lowercase = "abcdefghijklmnopqrstuvwxyz" .split ("")
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split ("")
var numbers = "1234567890" .split ("")
var special = "!@#$%^&*" .split ("")

//ask user which characters
var isLowercase = confirm("Do you vant lovercase leeetters") 
var isUppercase = confirm("Do you vant uppercase letters")
var isNumbers = confirm("Do you want numbers")
var isSpecials = confirm("Do you vant special characters")

while((!isLowercase)&&(!isNumbers)&&(!isSpecials)&&(!isUppercase)){
  alert("Must make a selection")
  isLowercase = confirm("Do you vant lovercase leeetters") 
  isUppercase = confirm("Do you vant uppercase letters")
  isNumbers = confirm("Do you want numbers")
  isSpecials = confirm("Do you want special characters")
}

var looongPW = prompt("Select 8-128 characters")


for (var x = 0; x < looongPW;){
  if (isLowercase) {
    var randonCharacter = Math.floor(Math.random()*lowercase.length);
    finalPass.push(lowercase[randonCharacter]);
  }
  
  if (isUppercase) {
    var randonCharacter = Math.floor(Math.random()*uppercase.length);
    finalPass.push(uppercase[randonCharacter]);
  }
  
  if (isNumbers) {
    var randonCharacter = Math.floor(Math.random()*numbers.length);
    finalPass.push(numbers[randonCharacter]);
  }
  
  if (isSpecials) {
    var randonCharacter = Math.floor(Math.random()*special.length); 
    finalPass.push(special[randonCharacter]);
  }
  x = finalPass.length;
}

var digits = finalPass.length - looongPW;
for(var i = 0; i < digits; i++){
  finalPass.pop();
}
var temppass = '';
for(var j = 0; j < finalPass.length; j++){
  temppass += finalPass[j];
}
return temppass
}
