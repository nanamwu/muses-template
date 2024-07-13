document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextButton");
  nextButton.disabled = true; // 最初はボタンを無効にする

  // 「次へ」ボタンのイベントリスナー
  nextButton.addEventListener("click", function () {
    const dropdown = document.getElementById("dropdown");
    const selectedContent = dropdown.options[dropdown.selectedIndex].text;
    const radioGroup = document.querySelector(
      'input[name="radioGroup"]:checked'
    );

    if (selectedContent && radioGroup) {
      const selectedDateTime =
        document.getElementById("selectedDateTime").innerText;
      const params = new URLSearchParams({
        datetime: selectedDateTime,
        content: selectedContent,
        method: radioGroup.value,
      });

      window.location.href = `end.html?${params.toString()}`;
    } else {
      alert("相談内容と対応方法を選択してください。");
    }
  });

  // ドロップダウンとラジオボタンの選択状態を監視して、「次へ」ボタンの有効・無効を切り替える関数
  function enableNextButton() {
    const dropdown = document.getElementById("dropdown");
    const radioGroup = document.querySelector(
      'input[name="radioGroup"]:checked'
    );

    nextButton.disabled = !(dropdown.selectedIndex !== 0 && radioGroup);
  }

  // ドロップダウンの変更時のイベントリスナー
  document
    .getElementById("dropdown")
    .addEventListener("change", enableNextButton);

  // ラジオボタンの変更時のイベントリスナー
  const radioButtons = document.querySelectorAll('input[name="radioGroup"]');
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", enableNextButton);
  });

  // 初期設定時にもチェックを行う
  enableNextButton();
});

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const day = params.get("day");
  const month = params.get("month");
  const date = params.get("date");
  const time = params.get("time");

  const selectedDateTime = `${month}/${date} (${day}) ${time}`;
  document.getElementById("selectedDateTime").innerText = selectedDateTime;
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
