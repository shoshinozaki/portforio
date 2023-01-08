'use strict';

function createColumn(col){
  const source = [];
  // const source =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  // ↑をfor文で処理を短く
  for(let i=0; i<15; i++){
    // 1...15
    // source[i] = i + 1 + 15 * 0;
    // 16..30
    // source[i] = i + 1 + 15 * 1;
    // 31...45
    // source[i] = i + 1 + 15 * 2;
    // 引数colに数値を渡す。
    source[i] = i + 1 + 15 * col;
  }
  
  // Math.floor(Math.random() * source.length);
  
  // 配列から文字列を取り出して削除する処理。
  //  splice()は配列で処理を返す。
  // [0]を使うことで文字列として取り出すことができる。
  const column = [];
  // b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  for(let i=0; i<5; i++){
    column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  }

  return column;
}

function createColumns(){
  const columns = [];
  for (let i=0; i<5; i++){
    columns[i] = createColumn(i);
  }
  columns[2][2] = 'FREE';

  return columns;
}

// 列と行を反対にする
// function createBingo(columns){
//   const bingo = [];
//   for(let row=0; row<5; row++){
//     bingo[row] = [];
//     for(let col=0; col<5; col++){
//       bingo[row][col] = columns[col][row];
//     }
//   }
//   // console.log(bingo);
//   return bingo;
// }

// 動的に要素を生成する
function renderBingo(columns){
  for(let row=0; row<5; row++){
    const tr = document.createElement('tr');
    for(let col=0; col<5; col++){
      const td = document.createElement('td');
      td.textContent = columns[col][row];
      tr.appendChild(td);
    }
    document.querySelector('tbody').appendChild(tr);
  }
}

const columns = createColumns();
renderBingo(columns);