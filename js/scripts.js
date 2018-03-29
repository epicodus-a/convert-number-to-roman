// Roman Numerals
// Write a method to convert numbers into Roman numerals. Roman numerals are based on seven symbols:
//
// Symbol  Value
// I       1
// V       5
// X       10
// L       50
// C       100
// D       500
// M       1,000
//specs:
// The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.
  // - example input: 6
  // - exmaple output: VI

// The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.
  //example input: 3675
  //example output: MMMDCLXXV

// You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.

//business logic
var ones = ['I','II','III','IV','V','VI','VII','VIII','IX'];
var tens = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
var hundreds = ['C','CC','CCC','CD','D','DC','DCC','DCCC', 'CM'];
var thousands = ['M', 'MM', 'MMM'];
var digits = [ones,tens, hundreds,thousands];

var numberToRoman = function(number){
  var aString = number.toString();
  var len = aString.length;
  var roman = [];
  var di = 0;
  for (var i = len-1; i >= 0; i --){
    var index = parseInt(aString[i] -1);
    roman.unshift(digits[di][index]);
    di++;
  }
  return roman.join("");
};

// alert(numberToRoman(3675));

//user interface logic
$().ready(function(){
  $(".number-form").submit(function(e){
    e.preventDefault();

    var number = $("#number").val();
    var roman = numberToRoman(number);
    $(".output").append("<p class='lead mt-5'>" + roman + "</p>");
  });

});
