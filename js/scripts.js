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
  return count;
};

var coinFlip = function() {
  return Math.floor(Math.random() * 2);
}

/*
Given 3 arrays of type array = [option(i), responseCount(i)], where option(i) is the string "option i" and responseCount(i) is the result of calling the above function for the ith option, determineDominantReponse will return the array with the largest responseCount, or, in the case where two options have equally many responses, will chose one option at random as the dominant response and the other repsonse as secondary.
*/
var determineDominantResponse = function(array1, array2, array3) {
  var rand = coinFlip();
  if (array1[1] >= 3) {
    return [array1[0], "none"];
  } else if (array2[1] >= 3) {
    return [array2[0], "none"];
  } else if (array3[1] >= 3) {
    return [array3[0], "none"];
  } else if (array1[1] === 2 && array2[1] === 2) {
    if (rand === 0) {
      return [array1[0], array2[0]];
    } else {
      return [array2[0], array1[0]];
    };
  } else if (array1[1] === 2 && array3[1] === 2) {
    if (rand === 0) {
      return [array1[0], array3[0]];
    } else {
      return [array3[0], array1[0]];
    };
  } else if (array2[1] === 2 && array3[1] === 2) {
    if (rand === 0) {
      return [array2[0], array3[0]];
    } else {
      return [array3[0], array2[0]];
    };
  };
};


/* User interface logic */

$(document).ready(function() {
  $("form#questionnaire").submit(function(event) {
    event.preventDefault();

    /* Get values supplied by user in form and store as variables */

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var q1response = $("input:radio[name=question-1]:checked").val();
    var q2response = $("input:radio[name=question-2]:checked").val();
    var q3response = $("input:radio[name=question-3]:checked").val();
    var q4response = $("input:radio[name=question-4]:checked").val();
    var q5response = $("input:radio[name=question-5]:checked").val();
    var qResponseArray = [q1response, q2response, q3response, q4response, q5response];

    /* Print user's first name in each of the three output sections */

    $(".name-here").text(firstName);

    /* Determine the frequency with which the user selected each of the 3 options */

    var option1count = responseCount(qResponseArray, "option-1");
    var option2count = responseCount(qResponseArray, "option-2");
    var option3count = responseCount(qResponseArray, "option-3");

    /* Determine which option was selected most of the 3 */

    var option1Array = ["option 1", option1count];
    var option2Array = ["option 2", option2count];
    var option3Array = ["option 3", option3count];
    var theWinnerIs = determineDominantResponse(option1Array, option2Array, option3Array);

    /* Determine which output section to display based on the determination of which answer was selected most often in the above */

    var outputDisplay = "";
    var secondaryDisplay = "";
    if (theWinnerIs[0] === "option 1") {
      outputDisplay = "rails";

    } else if (theWinnerIs[0] === "option 2") {
      outputDisplay = "react";
    } else if (theWinnerIs[0] === "option 3") {
      outputDisplay = "csharp";
    };

    if (theWinnerIs[1] === "option 1") {
      secondaryDisplay = "rails";
    } else if (theWinnerIs[1] === "option 2") {
      secondaryDisplay = "react";
    } else if (theWinnerIs[1] === "option 3") {
      secondaryDisplay = "csharp";
    } else {
      secondaryDisplay = "none"
    };

    if (outputDisplay === "rails") {
      $("#rails").show();
      $("#react").hide();
      $("#csharp").hide();
    } else if (outputDisplay === "react") {
      $("#rails").hide();
      $("#react").show();
      $("#csharp").hide();
    } else if (outputDisplay === "csharp") {
      $("#rails").hide();
      $("#react").hide();
      $("#csharp").show();
    };

    if (secondaryDisplay === "rails") {
      $("#rails-secondary").show();
      $("#react-secondary").hide();
      $("#csharp-secondary").hide();
    } else if (secondaryDisplay === "react") {
      $("#rails-secondary").hide();
      $("#react-secondary").show();
      $("#csharp-secondary").hide();
    } else if (secondaryDisplay === "csharp") {
      $("#rails-secondary").hide();
      $("#react-secondary").hide();
      $("#csharp-secondary").show();
    } else if (secondaryDisplay === "none") {
      $("#rails-secondary").hide();
      $("#react-secondary").hide();
      $("#csharp-secondary").hide();
    };


  });
});
