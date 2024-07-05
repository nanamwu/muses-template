document.addEventListener("DOMContentLoaded", function () {
  const scrollTop = document.querySelectorAll("scrollTop");

  // スクロールイベントリスナーを追加
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      scrollTop.style.display = "table-row";
    } else {
      scrollTop.style.display = "none";
    }
  });

  // ボタンがクリックされたときにトップに戻る
  scrollTop.forEach((row) => {
    row.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // スムーズなスクロールを実現
      });
    });
  });
});
