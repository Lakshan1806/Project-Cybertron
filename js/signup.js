document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signup").addEventListener("click", function () {
    validateform();
  });

  function validateform() {
    var uname = document.forms["form3"]["email"].value;
    var pass = document.forms["form3"]["password"].value;

    if (uname === "") {
      alert("Email must be filled out");
      return false;
    }

    if (pass === "") {
      alert("Please enter a Password");
      return false;
    }
  }
});
