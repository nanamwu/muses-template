"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
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

  // 今日の日付を取得
  const today = new Date();
  const startDay = today.getDay();
  const startDate = today.getDate();

  // 今日の曜日から始まる一週間の曜日を計算
  const currentWeek = [];
  for (let i = 0; i < 7; i++) {
    const currentDay = (startDay + i) % 7;
    const date = new Date(today);
    date.setDate(startDate + i);
    currentWeek.push({
      day: daysOfWeek[currentDay],
      date: date.getDate(),
    });
  }

  // ヘッダーを追加
  const emptyCell = document.createElement("div");
  calendar.appendChild(emptyCell);

  currentWeek.forEach((dayInfo) => {
    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.innerText = `${dayInfo.date} (${dayInfo.day})`;
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
});
