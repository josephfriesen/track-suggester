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

/* Helper function, returns a random integer from 0 to n-1. */
var coinFlip = function(n) {
  return Math.floor(Math.random() * n);
}

/*
Given 3 arrays of type array = [option(i), responseCount(i)], where option(i) is the string "option i" and responseCount(i) is the result of calling the above function for the ith option, determineDominantReponse will return the array with the largest responseCount, or, in the case where two options have equally many responses, will chose one option at random as the dominant response and the other repsonse as secondary.
*/
var determineDominantResponse = function(array1, array2, array3) {
  var rand = coinFlip(2);
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




/* NEW STUFF?? */

/* Given an array with possibly duplicated entries, will return a new array with duplicates removed -- in other words, each (possibly duplicated) entry of the input array will appear exactly once in the output array.
  Ex: let var array = ["1", "2", "2", "3"].
    Then createUniqueArray(array) will return the array ["1", "2", "3"]. */
var createUniqueArray = function(array) {
  var n;
  var m;
  var unique;
  var uniqueArray = [];
  for (n = 0; n < array.length; n++) {
    currentItem = array[n];
    unique = 1;
    for (m = 0; m < uniqueArray.length; m++) {
      if (currentItem === uniqueArray[m]) {
        unique = 0;
      };
    };
    if (unique == 1) {
      uniqueArray.push(currentItem);
    };
  };
  return uniqueArray;
};

/* Given an array, returns an array that lists the number of times each unique entry in that array appears in the array. To be used in tandem with function createUniqueArray, i.e. the frequency with which the ith entry in the array returned by createUniqueArray appears in the given array is given by the ith entry in the array returned by createFrequencyArray.
  Ex. let hi = ["1", "2", "2", "4"]. Call unique = createUniqueArray(hi) = ["1", "2", "4"]. Then createFrequencyArray(hi) = [1, 2, 1], meaning "1" appears in hi once, "2" appears in hi twice, and "4" appears in hi once. */
var createFrequencyArray = function(array) {
  var n;
  var m;
  var count;
  var currentItem;
  var uniqueArray = createUniqueArray(array);
  var freqArray = [];
  for ( n = 0; n < uniqueArray.length; n++ ) {
    currentItem = uniqueArray[n];
    count = 0;
    for ( m = 0; m < array.length; m++ ) {
      if (currentItem === array[m]) {
        count = count + 1;
      }
    };
    freqArray[n] = count;
  };
  return freqArray;
};

/* Given an array, returns an array listing those elements which appear with the greatest frequency; an array with a single element if one element appears in the given array more than any other, an array with multiple elements if more than one element appear with the maximal frequency.
  Ex. let hi = ["1", "2", "2", "3", "5", "1"]. Then collectMaxElements(hi) returns the array ["1", "2"], "1" and "2" having both appeared twice in the given array, more frequently than the other elements. */
var collectMaxElements = function(array) {
  var uniqueArray = createUniqueArray(array);
  var frequencyArray = createFrequencyArray(array);
  var max = Math.max(...frequencyArray);
  var n;
  var maxValuesArray = [];
  for (n = 0; n < uniqueArray.length; n++) {
    if (frequencyArray[n] == max) {
      maxValuesArray.push(uniqueArray[n]);
    };
  };
  return maxValuesArray;
};

/* Given an array, will return a two element array consisting of two randomly chosen maximally occuring elements of that array (or, if only one element appears maximally, will return an array with that element in the first position and the string "none" in the second position).
  Ex: let hi = ["1", "2", "2", "3", "3", "4", "4"]. then pickTwo(hi) will return an array of two elements randomly chosen from the elements "2", "3", "4", such as ["2", "4"] or ["4", "3"].*/
var pickTwo = function(array) {
  var uniqueArray = createUniqueArray(array);
  var frequencyArray = createFrequencyArray(array);
  var maxElements = collectMaxElements(array);
  var len = maxElements.length;
  var result = [];
  if (len == 1) {
    result = [maxElements[0], "none"];
  } else {
    firstChoice = coinFlip(len);
    firstChoiceElement = maxElements[firstChoice];
    secondChoice = coinFlip(len);
    while (firstChoice == secondChoice) {
      secondChoice = coinFlip(len);
    };
    secondChoiceElement = maxElements[secondChoice];
    result = [firstChoiceElement, secondChoiceElement];
  };
  return result;
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
    console.log(qResponseArray);

    /* Print user's first name in each of the three output sections */

    $(".name-here").text(firstName);

    /*

    =-=-=-=-=-=-=  OLD  =-=-=-=-=-=-=-=

    var option1count = responseCount(qResponseArray, "option-1");
    var option2count = responseCount(qResponseArray, "option-2");
    var option3count = responseCount(qResponseArray, "option-3");

    var option1Array = ["option 1", option1count];
    var option2Array = ["option 2", option2count];
    var option3Array = ["option 3", option3count];
    var theWinnerIs = determineDominantResponse(option1Array, option2Array, option3Array);

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

    =-=-=-=-=-=-=  OLD  =-=-=-=-=-=-=-=

    */

    var theWinnerIs = pickTwo(qResponseArray);
    var outputDisplay;
    var secondaryDisplay;
    if (theWinnerIs[0] === "option-1") {
      outputDisplay = "rails";
    } else if (theWinnerIs[0] === "option-2") {
      outputDisplay = "react";
    } else if (theWinnerIs[0] === "option-3") {
      outputDisplay = "csharp";
    };
    if (theWinnerIs[1] === "option-1") {
      secondaryDisplay = "rails";
    } else if (theWinnerIs[1] === "option-2") {
      secondaryDisplay = "react";
    } else if (theWinnerIs[1] === "option-3") {
      secondaryDisplay = "csharp";
    } else {
      secondaryDisplay = "none";
    };

    if (outputDisplay === "rails") {
      $("#rails").slideDown();
      $("#react").slideUp();
      $("#csharp").slideUp();
    } else if (outputDisplay === "react") {
      $("#rails").slideUp();
      $("#react").slideDown();
      $("#csharp").slideUp();
    } else if (outputDisplay === "csharp") {
      $("#rails").slideUp();
      $("#react").slideUp();
      $("#csharp").slideDown();
    };

    if (secondaryDisplay === "rails") {
      $("#rails-secondary").slideDown();
      $("#react-secondary").slideUp();
      $("#csharp-secondary").slideUp();
    } else if (secondaryDisplay === "react") {
      $("#rails-secondary").slideUp();
      $("#react-secondary").slideDown();
      $("#csharp-secondary").slideUp();
    } else if (secondaryDisplay === "csharp") {
      $("#rails-secondary").slideUp();
      $("#react-secondary").slideUp();
      $("#csharp-secondary").slideDown();
    } else if (secondaryDisplay === "none") {
      $("#rails-secondary").slideUp();
      $("#react-secondary").slideUp();
      $("#csharp-secondary").slideUp();
    };


  });
});
