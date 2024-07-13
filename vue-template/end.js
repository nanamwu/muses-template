document.addEventListener("DOMContentLoaded", function () {
  const selectedDropdown = localStorage.getItem("selectedDropdown");
  const selectedRadio = localStorage.getItem("selectedRadio");

  if (selectedDropdown) {
    document.getElementById(
      "displayDropdown"
    ).textContent = `${selectedDropdown}`;
  } else {
    document.getElementById("displayDropdown").textContent =
      "選択されたドロップダウンはありません。";
  }

  if (selectedRadio) {
    document.getElementById("displayRadio").textContent = `${selectedRadio}`;
  } else {
    document.getElementById("displayRadio").textContent =
      "選択されたラジオボタンはありません。";
  }
});

// script.jsファイル

// ボタンの要素を取得
const nextButton = document.getElementById("nextButton");

// ボタンがクリックされたときの処理
nextButton.addEventListener("click", function () {
  // 次のページのURL
  const nextPageURL = "end2.html";

  // 次のページに移動
  window.location.href = nextPageURL;
});

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const datetime = params.get("datetime");
  const content = params.get("content");
  const method = params.get("method");

  document.getElementById("displayDateTime").innerText = datetime;
  document.getElementById("displayDropdown").innerText = content;
  document.getElementById("displayRadio").innerText = method;
});
