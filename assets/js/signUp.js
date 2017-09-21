$(document).on("click", "#saveDriverInfo", function() {
  // Grab the id associated with the article from the submit button
  //var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/driverSignup",
    data: {
      name: $("#firstnameInput").val() + $("#lastnameInput").val(),
      mobile: $("#mobileInput").val(),
      email: $("#emailInput").val(),      
      password: $("#passwordInput").val(),
      confirm: $("#confirmPasswordInput").val(), 
    }
  }).done(function(data) {
      console.log(data);
  });
});