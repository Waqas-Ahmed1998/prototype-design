$(document).ready(function () {
  $("#step-2").click(function () {
    $("#video").show();
    $("#email-input").hide();
    $("#disclaimer").hide();
    $("#headline").text(
      "Watch This Video Below To Discover What Your Next Step Is"
    );
    $("#sub-headline").text("Thank you for subscribing");
  });
});
