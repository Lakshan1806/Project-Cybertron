document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("login").addEventListener("click", function () {
    validateform();
  });

  function validateform() {
    var uname = document.forms["form2"]["email"].value;
    var pass = document.forms["form2"]["password"].value;

    if (uname === "") {
      alert("Username must be filled out");
      return false;
    }

    if (pass === "") {
      alert("Please enter your Password");
      return false;
    }
  }
});
