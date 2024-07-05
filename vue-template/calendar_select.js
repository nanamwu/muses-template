"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
  const prevWeekButton = document.getElementById("prevWeek");
  const nextWeekButton = document.getElementById("nextWeek");
  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
  const timeSlots = [
    "09:10-09:40",
    "09:50-10:20",
    "10:30-11:00",
    "11:10-11:40",
    "11:50-12:20",
    "12:30-13:00",
    "13:10-13:40",
    "13:50-14:20",
    "14:30-15:00",
    "15:10-15:40",
    "15:50-16:20",
    "16:30-17:00",
  ];

  const today = new Date();
  let currentStartDate = new Date(today);
  const oneMonthLater = new Date(today);
  oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

  function renderCalendar(startDate) {
    calendar.innerHTML = ""; // カレンダーをクリア

    // 今日の曜日から始まる一週間の曜日を計算
    const startDay = startDate.getDay();
    const startDateNumber = startDate.getDate();
    const currentWeek = [];
    for (let i = 0; i < 7; i++) {
      const currentDay = (startDay + i) % 7;
      const date = new Date(startDate);
      date.setDate(startDateNumber + i);
      currentWeek.push({
        day: daysOfWeek[currentDay],
        month: date.getMonth() + 1, // 月は0から始まるので+1
        date: date.getDate(),
      });
    }

    // ヘッダーを追加
    const emptyCell = document.createElement("div");
    calendar.appendChild(emptyCell);

    currentWeek.forEach((dayInfo) => {
      const dayDiv = document.createElement("div");
      dayDiv.className = "day";
      dayDiv.innerText = `${dayInfo.month}/${dayInfo.date} (${dayInfo.day})`;
      calendar.appendChild(dayDiv);
    });

    // 時間スロットと空き情報を追加
    timeSlots.forEach((slot) => {
      const timeHeader = document.createElement("div");
      timeHeader.className = "time-header";
      timeHeader.innerText = slot;
      calendar.appendChild(timeHeader);

      for (let i = 0; i < 7; i++) {
        const availability = Math.random() > 0.5 ? "○" : "×"; // ランダムに○または×を表示
        const availabilityDiv = document.createElement("div");
        availabilityDiv.className = "availability";
        availabilityDiv.innerText = availability;
        if (availability === "○") {
          availabilityDiv.classList.add("available");
          availabilityDiv.addEventListener("click", () => {
            const params = new URLSearchParams({
              day: currentWeek[i].day,
              month: currentWeek[i].month,
              date: currentWeek[i].date,
              time: slot,
            });
            window.location.href = `consult.html?${params.toString()}`;
          });
        } else {
          availabilityDiv.classList.add("unavailable"); // ×の場合は追加クラス
        }
        calendar.appendChild(availabilityDiv);
      }
    });

    // ボタンの有効/無効を設定
    prevWeekButton.disabled = startDate <= today;
    nextWeekButton.disabled = startDate >= oneMonthLater;
  }

  prevWeekButton.addEventListener("click", () => {
    currentStartDate.setDate(currentStartDate.getDate() - 7);
    renderCalendar(currentStartDate);
  });

  nextWeekButton.addEventListener("click", () => {
    if (currentStartDate <= oneMonthLater) {
      currentStartDate.setDate(currentStartDate.getDate() + 7);
      renderCalendar(currentStartDate);
    }
  });

  renderCalendar(currentStartDate); // 初期表示
});
