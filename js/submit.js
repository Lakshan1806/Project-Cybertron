document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit1").addEventListener("click", function () {
    validateform();
  });

  function validateform() {
    var name1 = document.forms["form1"]["fname"].value;
    var name2 = document.forms["form1"]["lname"].value;
    var cnum = document.forms["form1"]["cno"].value;
    var subj = document.forms["form1"]["sub"].value;

    if (name1 === "") {
      alert("First name must be filled out");
      return false;
    }

    if (name2 === "") {
      alert("Last name must be filled out");
      return false;
    }

    if (cnum === "") {
      alert("Please enter your contact number");
      return false;
    }

    if (subj === "") {
      alert("Please enter subject");
      return false;
    }
  }
});
