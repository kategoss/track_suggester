$(document).ready(function() {

  $("#formOne").submit (function(event) {
    var nameInput = $("#name").val();
    var focusInput = $("#focus").val();
    var employerInput = $("#employer").val();
    var buildInput = $("#build").val();
    var environmentInput = $("#environment").val();
    var interestInput = $("#interest").val();

    $(".name").text(nameInput)
    $(".focus").text(focusInput);
    $(".employer").text(employerInput);
    $(".build").text(buildInput);
    $(".environment").text(environmentInput);
    $(".interest").text(interestInput);

    if (focusInput === "Back-end" && buildInput === "Interactive web applications" && interestInput === "How things work") {
      $("#ruby").show();
      $("#ruby").siblings().hide();
    } else if (focusInput === "Front-end" && interestInput === "How things look") {
      $("#css").show();
      $("#css").siblings().hide();
    } else if (focusInput === "Back-end" && buildInput === "Windows desktop applications" && interestInput === "How things work") {
      $("#c").show();
      $("#c").siblings().hide();
    } else {
      alert("So many roads to take! Talk to an instructor to figure out your path.")
    }
    event.preventDefault();
  });
});
