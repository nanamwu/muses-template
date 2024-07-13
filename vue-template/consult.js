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

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const day = params.get("day");
  const month = params.get("month");
  const date = params.get("date");
  const time = params.get("time");

  const selectedDateTime = `${month}/${date} (${day}) ${time}`;
  document.getElementById("selectedDateTime").innerText = selectedDateTime;

  document.getElementById("nextButton").addEventListener("click", function () {
    const dropdown = document.getElementById("dropdown");
    const selectedContent = dropdown.options[dropdown.selectedIndex].text;
    const radioGroup = document.querySelector(
      'input[name="radioGroup"]:checked'
    ).value;

    const params = new URLSearchParams({
      datetime: selectedDateTime,
      content: selectedContent,
      method: radioGroup,
    });

    window.location.href = `end.html?${params.toString()}`;
  });
});
