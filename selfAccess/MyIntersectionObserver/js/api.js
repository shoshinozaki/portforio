'use strict';

// Intersection Observer APIを使ってみよう
// 日本語では交差監視APIと呼ばれている
// ある要素を監視して、その要素が特定の領域に入ったときにその領域と交差したかを調べることができる仕組み

// 監視する要素・・・target
// 交差していく領域・・・root(viewport)
// targetがrootとどのくらい交差したかの割合・・・Intersection Ratio(何%交差したかを出す)

// Intersection Ratioの値に応じて処理を設定することができる
// viewportにどのくらい表示されたか判断する処理ができる


// 処理が実行されるタイミングを知ろう
// // target要素の取得
// const target = document.querySelector('img');
// // IntersectionObserverで処理する関数を作る
// function callback(){
//   console.log('filed!');
// }
// // intersection Observerのインスタンスを作成(new IntersectionObserver();)して、実行する
// // ※デフォルト時は0%交差時に実行される
// const observer = new IntersectionObserver(callback);
// // observeメソッドを使ってtargetを監視する
// observer.observe(target);


// thresholdを指定してみよう
// new IntersectionObserverに第二引数を渡す
// const target = document.querySelector('img');
// function callback(){
//   console.log('filed!');
// }

// // 交差地点をオブジェクト形式にしてthresholdキーで0から1の値を指定する
// const options = {
//   // 20%と80％の指定
//   threshold : [0.2, 0.8],
// };

// const observer = new IntersectionObserver(callback, options);
// observer.observe(target);


// 交差した要素の情報を取得しよう
// 交差したtargetの処理を引数で受け取ることができる
// const target = document.querySelector('img');
// function callback(entries){
//   console.log(entries[0]);
// }
// const options = {
//   threshold : [0.2],
// };
// const observer = new IntersectionObserver(callback, options);
// observer.observe(target);

// 受け取ることができる情報
// intersectionRatio・・・targetがrootに何%交差しているか
// isIntersecting・・・交差しているかの真偽値
// target・・・targetの要素を示している


// cssアニメーションを設定しよう
// cssファイルに記載
// img{
//   opacity : 0;
//   transform : translate(20px);
//   transition : opacity .3s transform .3s;
// }
// img .appear{
//   opacity : 1;
//   transform : translateY(0);
// }


// 要素が交差したらふわっと表示させよう
// isIntersectingを調べてあげて、trueだったらappearクラスを付ける
// const target = document.querySelector('img');
// function callback(entries){
//   console.log(entries[0]);
//   if(entries[0].isIntersecting){
//     // entries[0].targetで取得できる
//     entries[0].target.classList.add('appear');
//   }else{
//     entries[0].target.classList.remove('appear');
//   }
// }
// const options = {
//   threshold : [0.2],
// };
// const observer = new IntersectionObserver(callback, options);
// observer.observe(target);


// root、rootMarginについてみていこう
// オプションについてみてみる
// threshold・・・交差位置の指定
// root・・・root(viewport)領域を指定
// rootMargin・・・root領域の大きさを調整するためのオプション


// rootMarginを使ってみよう
// const target = document.querySelector('img');
// function callback(entries){
//   console.log(entries[0]);
//   if(entries[0].isIntersecting){
//     // entries[0].targetで取得できる
//     entries[0].target.classList.add('appear');
//   }else{
//     entries[0].target.classList.remove('appear');
//   }
// }
// const options = {
//   threshold : 1,
//   rootMargin : '0px 0px -100px',
// };
// const observer = new IntersectionObserver(callback, options);
// observer.observe(target);


// rootMarginを使ってみよう
// const target = document.querySelector('img');
// function callback(entries){
//   console.log(entries[0]);
//   if(!entries[0].isIntersecting){
//     return;
//   }

//   entries[0].target.classList.add('appear');
// }

// const options = {
//   threshold : 1,
//   rootMargin : '0px 0px -100px',
// };
// const observer = new IntersectionObserver(callback, options);
// observer.observe(target);


// targetの監視を止めてみよう
// .unocserve(監視対象)を使ってtrueの際に監視を止める
// const target = document.querySelector('img');
// function callback(entries, obs){
//   console.log(entries[0]);
//   if(!entries[0].isIntersecting){
//     return;
//   }
//   entries[0].target.classList.add('appear');
//   obs.unobserve(entries[0].target);
// }
// const options = {
//   threshold : 1,
//   rootMargin : '0px 0px -100px',
// };
// const observer = new IntersectionObserver(callback, options);
// observer.observe(target);


// 監査対象を増やしてみよう
// const targets = document.querySelectorAll('img');
// function callback(entries, obs){
//   console.log(entries[0]);
//   if(!entries[0].isIntersecting){
//     return;
//   }
//   entries[0].target.classList.add('appear');
//   obs.unobserve(entries[0].target);
// }
// const options = {
//   threshold : 1,
// };
// const observer = new IntersectionObserver(callback, options);
// targets.forEach(target => {
//   observer.observe(target);
// });


// すべての要素に処理を設定しよう
const targets = document.querySelectorAll('img');
function callback(entries, obs){
  console.log(entries);
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    entry.target.classList.add('appear');
    obs.unobserve(entry.target);
  });
}
const options = {
  threshold : 1,
};
const observer = new IntersectionObserver(callback, options);
targets.forEach(target => {
  observer.observe(target);
});