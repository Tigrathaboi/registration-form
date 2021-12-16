function checkPasswordMatch() {
  let password = $("#password").val();
  let confirmPassword = $("#repeat_password").val();
  let check1 = $("#check1").val();
  let check2 = $("#check2").val();
  let mail = $("#mail").val();
  let flag = false;

  $("#submit").addClass("danger").removeClass("success");

  if (password && confirmPassword) {
    if (password != confirmPassword) {
      // $("#divCheckPasswordMatch").html("Passwords do not match!");
      flag = false;
    } else {
      // $("#divCheckPasswordMatch").html("Passwords match.");
      flag = true;
    }
  }

  if (flag == true && mail && check1 && check2) {
    $("#submit").addClass("success").removeClass("danger");
  }
}

$(document).ready(function () {
  $("#password, #repeat_password, #mail").keyup(checkPasswordMatch);
});
