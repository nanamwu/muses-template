document.getElementById("saveButton").addEventListener("click", function () {
  const selectDropdown = document.getElementById("dropdown").value;
  const selectRadio = document.querySelector(
    'input[name="radioGroup"]:checked'
  ).value;
  localStorage.setItem("selectedDropdown", selectedDropdown);
  localStorage.setItem("selectedRadio", selectedRadio);
  window.location.href = "end.html";
});
