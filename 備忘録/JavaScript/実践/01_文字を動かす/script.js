
// ノーマル
document.addEventListener('DOMContentLoaded', function() {
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim();
  // trim()取得したHTMLの余計な余白を削除
  let concatStr = '';

  for (let c of str) {
    c = c.replace(' ', '&nbsp;');
    // PLAY ANIMATIONの半角スペースを実現するために、replaceメソッドを使用。
    // ループ処理の際、半角スペースがわたってきたら特殊文字に置換するように処理。
    concatStr += `<span class="char">${c}</span>`;
  }
  el.innerHTML = concatStr;
});

// reduce関数を使用
document.addEventListener('DOMContentLoaded', function() {
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim().split('');
 
  el.innerHTML = str.reduce((accu,curr) => {
    curr = curr.replace(' ', '&nbsp;');
    return `${accu}<span class="char">${curr}</span>`;
  }, '');
});

// reduceメソッドを使ったことにより、ループ文とconcatStrという変数を定義する必要がなくなった。
// 文字列(const str = el.innerHTML.trim().split('');)ができた段階で、innerHTMLに代入することができる。
// なんでもできるfor文よりも、できることが限定されているreduceを使用したほうがコードの意味がわかりやすい。
// 用途に合わせたメソッドを使用することで開発意図が他の人に伝わりやすい。
