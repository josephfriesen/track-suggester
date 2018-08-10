/* Business-side logic */

/*
Given an array of strings stringArray and a single string stringToFind, the function responseCount will traverse the array and return the number of instances in which stringToFind appears in stringArray.
  Ex: let array = ["hi", "hello", "hi"]
          str = "hi"
          responseCount(array, str) will return 2.
Below, we will call this function on the variable qResponseArray three times to determine how many times the user selected option-1, option-2, and option-3 in the questionnaire.
*/
var responseCount = function(stringArray, stringToFind) {
  var len = stringArray.length;
  var count = 0;
  var n = 0;
  for ( ; n < len; ) {
    if (stringArray[n] === stringToFind) {
      count = count + 1;
    }
    n = n + 1;
  };
  console.log(count);
  return count;
};

/*

*/



/* User interface logic */

$(document).ready(function() {
  $("form#questionnaire").submit(function(event) {
    event.preventDefault();

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var q1response = $("input:radio[name=question-1]:checked").val();
    var q2response = $("input:radio[name=question-2]:checked").val();
    var q3response = $("input:radio[name=question-3]:checked").val();
    var q4response = $("input:radio[name=question-4]:checked").val();
    var q5response = $("input:radio[name=question-5]:checked").val();
    var qResponseArray = [q1response, q2response, q3response, q4response, q5response];

    console.log(firstName, lastName, q1response, q2response, q3response, q4response, q5response, qResponseArray);
  });
});
