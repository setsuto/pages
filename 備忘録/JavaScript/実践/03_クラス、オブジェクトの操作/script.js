/////////////////////////
// thisの挙動について確認。
// thisは直近で囲まれているオブジェクトを参照する。
// 1.はコンストラクーの中で呼ばれているため、インスタンス化されたtaのことを指す。
// 2.直近のwindowオブジェクトを参照している。
// 3.thisで参照しているwindowオブジェクトにelが格納されていないためエラーが発生している状況。
// 4.bindを使用して前のオブジェクトに参照先を強制、window ⇒ TextAnimation エラー解消。
// 5-1.<button id="btn">Animation</button>を参照
// 5-2.<button id="btn">Animation</button>になっているためbindで束縛、taが参照される
// ※アロー関数を使った場合には、そのコンテキストが作成するthisは無視されるので、一つ外側のthisを参照



document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('#btn');
  const ta = new TextAnimation('.animate-title');
  // ta = オブジェクト

  const ta2 = new TextAnimation('.animate-title-2');
  setTimeout(() => {
    ta.animate();
    ta2.animate();
    // オブジェクトのメソッドを実行している。

    btn.addEventListener('click', ta.animate.bind(ta));
    // 5-2.bindで束縛、taが参照される
    
  }, 1000);

});

console.log(this);
// windowを参照

class TextAnimation {
  constructor(el) {
    console.log(this);
    // 1.TextAnimationを参照

    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(' ', '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  } 
  // animate() {
  //   console.log(this);
  //   // 1.TextAnimationを参照

  //   window.setTimeout(function () {
  //     console.log(this);
  //     // 2.setTimeoutの中だとwindowオブジェクトを参照している

  //     this.el.classList.toggle('inview');
  //     // 3.エラーが発生、

  //   }.bind(this));
  //   // 4.bindを用いたthisの束縛を行う

  // }
  animate() {
    console.log(this);
    // 5-1.<button id="btn">Animation</button>を参照
    　   
    this.el.classList.toggle('inview');
  }
}

// classとはオブジェクトを生成するための一つのまとまり

const obj = {
  first_name: 'Tanabe',
  last_name: 'Setsuto',
  printFullName: function() {
    console.log('hello');
  }
}

class MyObj {
  constructor() {
    console.log(this);
    this.first_name = 'Tanabe';
    this.last_name = 'Setsuto';
    // classの中ではプロパティ: 値の形式では書けないためthisを用いて表現。
    // この時点ではオブジェクトが生成されていない。

  }

  printFullName() {
    console.log('hello');
  }
}

const obj2 = new MyObj();

obj.printFullName();
obj2.printFullName();

// objectとthisの関係


