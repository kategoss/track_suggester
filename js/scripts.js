$(document).ready(function() {

  $("#survey").submit (function(event) {
    var focusInput = $("#focus").val();
    var employerInput = $("#employer").val();
    var buildInput = $("#build").val();
    var environmentInput = $("#environment").val();
    var interestInput = $("#interest").val();

    $(".focus").text(focusInput);
    $(".employer").text(employerInput);
    $(".build").text(buildInput);
    $(".environment").text(environmentInput);
    $(".interest").text(interestInput);

    if (focusInput === "Back-end" && employerInput === "Startups/Smaller Company" && buildInput === "Interactive web applications") {
      $("#Ruby").show();
      $("#Ruby").siblings().hide();
    } else if (focusInput === "Front-end" && buildInput === "Design-focused websites" && interestInput === "How things look") {
      $("#CSS").show();
      $("#CSS").siblings().hide();
    } else if (focusInput === "Back-end" && employerInput === "Larger company" && environmentInput === "Corporate") {
      $("#C").show();
      $("#C").siblings().hide();
    }
    event.preventDefault();
  });
});
