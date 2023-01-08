'use strict';

console.clear();

// 現在の年月を取得
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();

// 前月分の日付を取得
function getCalendarHead(){
  const dates = [];
  // その前の月の末日を取得
  const d = new Date(year, month, 0).getDate();
  // その月の曜日を取得
  const n = new Date(year, month, 1).getDay();

  for(let i=0; i<n; i++){
    dates.unshift({
      date: d - i,
      isToday: false,
      isDisabled: true,
    });
  }

  return dates;
}

// 翌月分の日付を取得
function getCalendarTail(){
  const dates = [];
  const lastDay = new Date(year, month + 1, 0).getDay();

  for(let i = 1; i < 7 - lastDay; i++){
    dates.push({
      date: i,
      isToday: false,
      isDisabled: true,
    });
  }

  return dates;
}

function getCalendarBody(){
  const dates = []; // date: 日付, day: 曜日
  const lastDate = new Date(year, month + 1, 0).getDate();

  for (let  i=1; i<=lastDate; i++){
    dates.push({
      date: i,
      isToday: false,
      isDisabled: false,
    });
  }

  // 現在の日にちを太字にする。
  if(year === today.getFullYear() && month === today.getMonth()){
    dates[today.getDate() - 1].isToday = true;
  }

  return dates;
}

  // createCalendar()が呼び出される度にtbodyの中身をremoveする処理
function clearCalendar(){
  const tbody = document.querySelector('tbody');

  while(tbody.firstChild){
    tbody.removeChild(tbody.firstChild);
  }
}

// createCalendar()が呼び出される度に年月を更新する処理
function rendertitle(){
  const title = `${year}/${String(month + 1).padStart(2, '0')}`;
  document.getElementById('title').textContent = title;
}

// 各週、日付ごとの要素を動的に生成する処理
function renderWeeks(){
  const dates = [
    ...getCalendarHead(),
    ...getCalendarBody(),
    ...getCalendarTail(),
  ];

  const weeks = [];
  // 何週分あるかを変数weeksCountに代入
  const weeksCount = dates.length / 7;

  for(let i=0; i<weeksCount; i++){
    weeks.push(dates.splice(0, 7));
  }

  weeks.forEach(week => {
    const tr = document.createElement('tr');
    week.forEach(date => {
      const td = document.createElement('td');

      td.textContent = date.date;
      if(date.isToday){
        td.classList.add('today');
      }
      if(date.isDisabled){
        td.classList.add('disabled');
      }

      tr.appendChild(td);
    });
    document.querySelector('tbody').appendChild(tr);
  });
}

// カレンダーの内容をまとめて、スプリット構文(...)で展開する。
function createCalendar(){
  clearCalendar();
  rendertitle();
  renderWeeks();
  
}

// prevクリックイベント
document.getElementById('prev').addEventListener('click', () => {
  month--;
  if(month < 0){
    year--;
    month = 11;
  }

  createCalendar();
});

// nextクリックイベント
document.getElementById('next').addEventListener('click', () => {
  month++;
  if(month > 11){
    year++;
    month = 0;
  }

  createCalendar();
});

// todayクリックイベント
document.getElementById('today').addEventListener('click', () => {
  year = today.getFullYear();
  month = today.getMonth();

  createCalendar();
});

createCalendar();