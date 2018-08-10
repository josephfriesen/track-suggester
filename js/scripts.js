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
    console.log(firstName, lastName, q1response, q2response, q3response, q4response, q5response);
  });
});
