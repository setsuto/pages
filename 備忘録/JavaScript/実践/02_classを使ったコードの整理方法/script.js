// document.addEventListener('DOMContentLoaded', function() {
//   const el = document.querySelector('.animate-title');
//   const str = el.innerHTML.trim().split('');
 
//   el.innerHTML = str.reduce((accu,curr) => {
//     curr = curr.replace(' ', '&nbsp;');
//     return `${accu}<span class="char">${curr}</span>`;
//   }, '');
// });

document.addEventListener('DOMContentLoaded', function() {
  const ta = new TextAnimation('.animate-title');
  const ta2 = new TextAnimation('.animate-title-2');
  setTimeout(() => {
    ta.animate();
    ta2.animate();
  }, 1000);

});

class TextAnimation {
  constructor(el) {
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
  animate() {
    this.el.classList.toggle('inview');
  }
}
