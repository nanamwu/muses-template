document.getElementById("nextButton").addEventListener("click", function () {
  const selectedDropdown = document.getElementById("dropdown").value;
  const selectedRadio = document.querySelector(
    'input[name="radioGroup"]:checked'
  );

  if (!selectedRadio) {
    alert("ラジオボタンを選択してください。");
    return;
  }

  const selectedName = localStorage.getItem("selectedName");

  if (selectedName) {
    document.getElementById("displayName").textContent = `${selectedName}`;
  } else {
    document.getElementById("displayName").textContent =
      "選択された名前はありません。";
  }

  localStorage.setItem("selectedDropdown", selectedDropdown);
  localStorage.setItem("selectedRadio", selectedRadio.value);
  window.location.href = "end.html"; // 次のページにリダイレクト
});

document.addEventListener("DOMContentLoaded", function () {
  const selectedText = localStorage.getItem("selectedText");
  if (selectedText) {
    const displayNameElement = document.getElementById("displayName");
    if (displayNameElement) {
      displayNameElement.textContent = selectedText;
    }
  }
});
