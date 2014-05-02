//alert("JavaScript works!");

// Andrew Rodriguez
// Sdi - 1404	
// Assignment 4 project 4
// JavaScript Code Problems and Answers
// "String", "Number", "Array"

// String questions

// 1. Checking A Phone Number
// Does a string follow a 123-456-7890 pattern like a phone number?
var PhoneNumCheck = function(val) {
	var PhoneNumber = val;
	var dash1 = (PhoneNumber.substring(3, 4));
	var dash2 = (PhoneNumber.substring(7, 8));

    if (dash1 == "_" && dash2 == "_") {
        if (PhoneNumber.length == 12) {
        return true;
        } else {
        	return false;

        }
    } // Conditional End

}; // PhoneNumCheck Complete 

// 2. Checking E-mail Address
// Does a string follow an aaa@bbb.ccc pattern like an email address?
var EmailCheck = function(val) {
	var email = val;
	var atsymbol = email.indexOf("@");
	var dotsymbol = last.indexOf(".");

	if (atsymbol == -1 || dotsymbol == -1 || (atsymbol + 2) >= dotsymbol) {
		return false;
	} else {
		return true;
	} // Conditional End	
