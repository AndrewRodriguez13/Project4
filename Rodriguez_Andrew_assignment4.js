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

}; // Email Check Complete

// 3. URL Check
// Is the string a URL? (Does it start with http: or https:?)
var CheckURL = function(Val) {
	var url = val;
	var http = url.indexOf("http://");
	var https = url.indexOf("https://");

	if (http != -1 || https != -1) {
	    // if(url substring 0, 5) == "http" || url substring 0, 6) == "https"

      return true;
  } else {
  	return false;

  } // Conditinal End
	
}; // Url Check Complete

// Number Questions

// 4. Return Number Value
//Given a string version of a number such as "42", return the value as an actual Number, such as 42.
var StringTONumber = function(sTN);
{
	var StringTONumber = parseInt(sTN);
	// turns the string into a number
	return StringTONumber;

};
var StringTONumberReturn = StringTONumber(NumberParse)

// 5. Number of Decimal places
//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
var numberdecimal = function(numb,decimal){
	var number - numb.tofixed(decimal)
	    return number;
};

// Array Questions

// 6. Smallest number value
//Find the smallest value in an array that is greater than a given number.
var smallNumber = function() {
	var array = [1,4,7,9,10,14,15];
	var x = Math.max(12,14);
	for (var x =14; x < array.length; x++);
	return x;
};
smallNumber(14)
