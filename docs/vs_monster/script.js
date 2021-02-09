'use strict';

// コマンド
const battleEL = document.querySelector('.battle');
const skillEL = document.querySelector('.skill');
const magicEL = document.querySelector('.magic');
const itemEL = document.querySelector('.item');
const escapeEL = document.querySelector('.escape');
const againEL = document.querySelector('.again');

// テキスト
const battleTxt0 = document.querySelector('.log1');
const battleTxt1 = document.querySelector('.log2');
const monsterTxt = document.querySelector('.monster-text');

// ステータス
let HP, LP, MP, SP, playing;

const status = function() {
  document.querySelector('.HP').textContent = HP;
  document.querySelector('.LP').textContent = LP;
  document.querySelector('.MP').textContent = MP;
  document.querySelector('.SP').textContent = SP;
};

// リセット
const reset = function() {
  HP = 100;
  LP = 200;
  MP = 0;
  SP = 0;
  playing = true;

  battleTxt0.textContent = 'バトルスタート';
  battleTxt1.textContent = '';
  monsterTxt.textContent = 'キメラ が あらわれた ！';

  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.monster').style.display = 'inline-block'
  document.querySelector('.monster').style.width = '150px';
  document.querySelector('.monster').style.animation = 'none';
  document.querySelector('.fuwafuwa').style.animation = 'fuwafuwa 2s linear infinite';

  status();
};
reset();

// 乱数ダメージ
const calcDMG = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  //The maximum is exclusive and the minimum is inclusive
};



///////////////////////////////////////////
//// 攻撃フロー
///////////////////////////////////////////

battleEL.addEventListener('click', function() {
  if (playing === true && HP >= 0) {
    let PDMG = calcDMG(10,20);
    let EDMG = calcDMG(20,30);
    HP -= EDMG;
    LP -= PDMG;
    MP += 15;
    SP += 15;
    battleTxt0.textContent = `プレイヤーの攻撃 キメラに ${PDMG} ダメージ !`;
    battleTxt1.textContent = `キメラの攻撃 プレイヤーに ${EDMG} ダメージ !`;
    monsterTxt.textContent = LP >= 120 ? 'キメラは にやついている' : 'キメラは あせっている';
    status();

    if (LP <= 0) {
      playing = false;
      battleTxt0.textContent = 'たたかいに勝利した !';
      battleTxt1.textContent = '';
      monsterTxt.textContent = 'キメラは こなごなに くだけちった';
      document.querySelector('.monster').style.display = 'none';
      document.querySelector('.HP').textContent = HP; 
     
    } else if (HP <= 0) {
      playing = false;
      battleTxt0.textContent = 'プレイヤーは ころされてしまった...';
      battleTxt1.textContent = '';
      monsterTxt.textContent = 'あなたの まけです !';
      document.querySelector('.HP').textContent = 0; 
      document.querySelector('body').style.backgroundColor = '#E2263A';
      document.querySelector('.monster').style.animation = 'zoomIn 4s ease-in-out forwards';
    }
  }
});

///////////////////////////////////////////
//// とくぎフロー
///////////////////////////////////////////

skillEL.addEventListener('click', function() {
  if (playing === true && SP >= 15) {
  let PDMG = calcDMG(70,80);
  let EDMG = calcDMG(25,35);
  HP -= EDMG;
  LP -= PDMG;
  SP -= 15;
  battleTxt0.textContent = `プレイヤーの はやぶさ斬り ! ${PDMG} ダメージ`;
  battleTxt1.textContent = `キメラの攻撃 プレイヤーに ${EDMG} ダメージ !`;
  monsterTxt.textContent = LP >= 120 ? 'キメラは にやついている' : 'キメラは あせりはじめた';
  status();
  
    if (LP <= 0) {
      playing = false;
      battleTxt0.textContent = 'たたかいに勝利した !';
      battleTxt1.textContent = '';
      monsterTxt.textContent = 'キメラは こなごなに くだけちった';
      document.querySelector('.monster').style.display = 'none';
     
    } else if (HP <= 0) {
      playing = false;
      battleTxt0.textContent = 'プレイヤーは ころされてしまった...';
      battleTxt1.textContent = '';
      monsterTxt.textContent = 'あなたの まけです !';
      document.querySelector('.HP').textContent = 0; 
      document.querySelector('body').style.backgroundColor = '#E2263A';
      document.querySelector('.monster').style.animation = 'zoomIn 4s ease-in-out forwards';
    }
  } else if (SP <= 15) {
      battleTxt0.textContent = 'SPが足りない。攻撃してためよう';
      battleTxt1.textContent = '';
  }
});



/////////////////////////////////////////////
////// じゅもんフロー
/////////////////////////////////////////////

magicEL.addEventListener('click', function() {
  if (playing === true && MP >= 15) {
  let EDMG = calcDMG(25,35);
  HP -= EDMG;
  HP += 40;
  MP -= 15;
  battleTxt0.textContent = `プレイヤーは ホイミの呪文を唱えた HPが 30 回復した`;
  battleTxt1.textContent = `キメラの攻撃 プレイヤーに ${EDMG} ダメージ !`;
  monsterTxt.textContent = LP >= 120 ? 'キメラは にやついている' : 'キメラは あせりはじめた';
  status();
  
    if (LP <= 0) {
      playing = false;
      battleTxt0.textContent = 'たたかいに勝利した !';
      battleTxt1.textContent = '';
      monsterTxt.textContent = 'キメラは こなごなに くだけちった';
      document.querySelector('.monster').style.display = 'none';
     
    } else if (HP <= 0) {
      playing = false;
      battleTxt0.textContent = 'プレイヤーは ころされてしまった...';
      battleTxt1.textContent = '';
      monsterTxt.textContent = 'あなたの まけです !';
      document.querySelector('.HP').textContent = 0; 
      document.querySelector('body').style.backgroundColor = '#E2263A';
      document.querySelector('.monster').style.animation = 'zoomIn 4s ease-in-out forwards';
    }
  } else if (MP <= 15) {
      battleTxt0.textContent = 'MPが足りない。攻撃してためよう';
      battleTxt1.textContent = '';
  }
});

///////////////////////////////////////////
//// アイテムフロー
///////////////////////////////////////////



///////////////////////////////////////////
// //// 逃げるフロー
///////////////////////////////////////////

escapeEL.addEventListener('click', function() {
  battleTxt0.textContent = 'まわりこまれてしまった！';
  battleTxt1.textContent = '';
});

///////////////////////////////////////////
//// リトライ
///////////////////////////////////////////

againEL.addEventListener('click', reset);
