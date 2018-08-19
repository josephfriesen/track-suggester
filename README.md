# Track Suggester

#### _Epicodus Track Suggester, submitted for Epicodus code review August 10th, 2018._

### _Created by_ **Joseph Friesen**

***

## Description

This project consists of a single web page, containing an introductory header, a form under the heading Questionnaire, and an output panel. The user, a hypothetical prospective Epicodus that is unsure which programming language track they might pursue while at Epicodus, will enter their first and last name, complete a series of five multiple-choice questions, then submit their input. The page, using JavaScript and jQuery, will accept the user input and reveal one of three Epicodus tracks that is best suited for the user in the output panel on the right.

There are currently two branches in this repository. The first, master, is the result of the first attempt at writing the JavaScript to display output based on the user's responses to the multiple-choice questionnaire. It has full functionality, but the functions are written based on the questionnaire having exactly five questions -- with this script, adding or removing questions in the questionnaire will cause the logic governing output display to fail.

The second branch, better-functions, features rewritten JavaScript to allow for adjusting the questionnaire. Now, questions can be added to and removed from the questionnaire, and the logic will cause the correct output display. It also allows for further options beyond just the three tracks available now; the HTML in the form and output will need to be added to, but the business-side logic can accommodate further multiple-choice options without being added to.

***

## Setup Instructions

1. Clone this GitHub repository to your local machine.
2. Open file _/track-suggester/index.html_ in your web browser of choice.

***

## Technology Employed

* HTML
* Custom CSS styling
* Bootstrap CSS
* JavaScript
* jQuery

***

##### Legal

Licensed under the MIT license.

Copyright (c) 2018 [Joseph Friesen](mailto:friesen.josephc@gmail.com) All Rights Reserved.
