// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*+<></>";
//var allchars= "";
function writePassword() {
  var allchars = "";
  let password = "";
  var length = parseInt(prompt('Enter length of password'));
       if(length < 8 || length > 128){
  var passLen = ('Password must be between 8 to 128 characters')
return "alertpassLen"
};

  var useLowercase= confirm('would you like to use lowercase');  
       if(useLowercase == true){
    allchars +=lowercase;
  }

  var useUppercase = confirm("would you like to use uppercase")
      if(useUppercase == true){
    allchars += uppercase;
  }
  
var useNumber = confirm('Would you like to use number');
     if(useNumber == true){
  allchars += number;
}
var useSymbol = confirm("would you like to add symbol");
    if(useSymbol == true){
  allchars += symbol;
}

while(password.length < length){
  password += allchars[Math.floor(Math.random() * allchars.length)];

}
var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

