function handleClick(name) {
  localStorage.setItem("selectedName", name);
  window.location.href = "calendar_zentai.html"; // 次のページにリダイレクト
}
