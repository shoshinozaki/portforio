'use strict';

const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let startTime;
let timeoutId;
let elapsedTime = 0;

function countUp(){
  // 現在時刻 - 開始時刻の計算
  const d = new Date(Date.now() - startTime + elapsedTime);
  const m = String(d.getMinutes()).padStart(2, '0');
  const s = String(d.getSeconds()).padStart(2, '0')
  const ms = String(d.getMilliseconds()).padStart(3, '0');
  timer.textContent = `${m}:${s}.${ms}`;

  // 10ミリ秒ごとにcountUp()関数を呼び出す(無限に経過を出す)
  timeoutId = setTimeout(() => {
    countUp();
  }, 10);
}

function setButtonStateInitial(){
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.add('inactive');
}

function setButtonStateRunning(){
  start.classList.add('inactive');
  stop.classList.remove('inactive');
  reset.classList.add('inactive');
}

function setButtonStateStopped(){
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.remove('inactive');
}

setButtonStateInitial();

// カウントアップ処理
start.addEventListener('click', () => {
  // inactiveクラスがついていたらreturnを返す
  if(start.classList.contains('inactive') === true){
    return;
  }

  setButtonStateRunning();
  // 開始時刻を取得
  startTime = Date.now();
  countUp();
});

// カウントストップ処理(setTimeout()をキャンセル)
stop.addEventListener('click', () => {
  // inactiveクラスがついていたらreturnを返す
  if(stop.classList.contains('inactive') === true){
    return;
  }

  setButtonStateStopped();
  clearTimeout(timeoutId);
  // stopをクリックした時刻 - startをクリックした時刻
  elapsedTime += Date.now() - startTime;
});

// カウントリセット処理(id=timerのテキストを初期状態にする)
reset.addEventListener('click', () => {
  // inactiveクラスがついていたらreturnを返す
  if(reset.classList.contains('inactive') === true){
    return;
  }

  setButtonStateInitial();

  timer.textContent = '00:00.000';
  elapsedTime = 0;
});