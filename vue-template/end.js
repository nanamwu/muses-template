document.addEventListener("DOMContentLoaded", function () {
  const selectedDropdown = localStorage.getItem("selectedDropdown");
  const selectedRadio = localStorage.getItem("selectedRadio");
  if (selectedDropdown) {
    document.getElementById(
      "displayDropdown"
    ).textContent = `選択されたドロップダウン: ${selectedDropdown}`;
  } else {
    document.getElementById("displayDropdown").textContent =
      "選択されたドロップダウンはありません。";
  }
  if (selectedRadio) {
    document.getElementById(
      "displayRadio"
    ).textContent = `選択されたラジオボタン: ${selectedRadio}`;
  } else {
    document.getElementById("displayRadio").textContent =
      "選択されたラジオボタンはありません。";
  }
});
