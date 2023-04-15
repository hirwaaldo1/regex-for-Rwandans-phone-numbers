const regex = /^\+?(25)?0(\s)?-?7(\d){2}(\s|-)?(\d){3}(\s|-)?(\d){3}$/g;
// Remember to convert your number to a string if you are using JavaScript. You can use the toString() method.
const phoneNumber = "0788539446";
const wrongNumber = "fakeNumber" || "0991234324" || "07885394461";
regex.test(phoneNumber); //true
regex.test(wrongNumber); //false
