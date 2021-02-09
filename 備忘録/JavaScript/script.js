// const arry = [1,2,3,4,5];

// // forEach
// arry.forEach(v => console.log(v));
// // forEachメソッドを通してコールバック関数が実行、


// // for
// for(let i = 0; i < arry.length; i++) {
//   const v = arry[i];
//   console.log(v);
// }

// const str = 'animation';
// const strArry = str.split('');
// // 1.文字列が一つずつ分割されて配列に置き換わる、strArryに格納。

// const result = strArry.reduce((accu, curr) => {
//   return accu + '<' + curr + '>';
// },'')
// // 2.currに値が一つずつ渡る。それをリターンで渡すと次のaccuの値に設定される
// //   このままだとaだけ<>に囲われないため、第二引数に初期値''（空文字）を設定。aが2ループ目に渡る。

// console.log(result);


// const str = 'animation';
// const strArry = str.split('');
// // 配列に処理

// function tag(accu, curr) {
//   console.log(accu, curr);
//   return `${accu}<${curr}>`;
// }
// // <>で囲む処理

// function reduce(arry, callback, defaultValue) {
// // arry=>strArry 、callback=>tag、defaultValue=>""

//   let accu = defaultValue;
//   // let accu = defaultValueは実質let accu = ""
//   // accuの第一ループ目で空文字が渡るようにしてやる。

//   for(let i = 0; i < arry.length; i++) {
//     let curr = arry[i];
//     accu = callback(accu,curr);
//     // この時点でaccuの中身が "" からtagのreturnで返された値が格納される。
//     // 第二ループ目以降にfor文の処理が行われる。
//   }
//   return accu;
//   // 最終的に文字列が結合したものが返される。
// }

// const result = reduce(strArry, tag, "");
// console.log(result);

// document.addEventListener('DOMContentLoaded', function() {
//   const el = document.querySelector('.animate-title');
//   const str = el.innerHTML.trim();
//   // trim()取得したHTMLの余計な余白を削除

//   for (let i of str) {
//     console.log(`<span class="char>${i}</span>`);
//   }
// });



