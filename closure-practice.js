/* LOTR example*/

var keepItSecret = function(forSafekeeping){
  what = forSafekeeping;
  var keepItSafe = function(where){
    if (where === "The Shire"){
      return "The " + what + " is safe.";
    } else if (where === "Mordor"){
      return "The " + what + " is lost; and with it, all hope.";
    } else {
      return "My business is my own.";
    };
  };
  return keepItSafe;
};
var isItSafe = new keepItSecret("ring");


/* Password example */

var credentials = function(inputtedPassword){
   password = inputtedPassword;
   var testPassword = function(loginAttempt){
 if (loginAttempt === password){
   return "Login successful";
} else if (loginAttempt == ""){
  return "Please input your password.";
} else {
  return "Failed login attempt.";
};
   };
return testPassword;
};
var loginNow = new credentials("password123");
console.log(loginNow("password123"));
// "Login successful"
console.log(loginNow(""));
// "Please input your password"
console.log(loginNow("blocpassword"));
// "Failed login attempt"
console.log(password);
// error "password is not defined"


/* PIN example */

var setPin = function(createdPin){
  let pin = createdPin;
  var testPin = function(attempt){
    if(attempt === pin){
      return "Success";
    } else if(attempt !==pin){
      return "Failed";
    } else {
      return "Error";
    }
  };
  return testPin;
};
let accessAccount = setPin("5678");
console.log(accessAccount("1234")); // Failed
console.log(accessAccount("5678")); // successful
console.log(createdPin); // ReferenceError: createdPin is not defined
