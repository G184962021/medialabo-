// id が sevenOcean の h2 要素を検索
// （次の行を完成させる）
let h2sevenOcean = document.querySelector('h2#sevenOcean');

// 7大洋　の名前を配列に代入
let oceans = [
  '北極海',
  '北大西洋',
  '南大西洋',
  'インド洋',
  '北太平洋',
  '南太平洋',
  '南極海'
]

// ul 要素を新規作成する．（次の行を完成させる）
ul = document.createElement('ul');

// ul 要素を h2sevenOcean の次に追加する（次の行を書く）
h2sevenOcean.insertAdjacentElement('beforeend', ul);  

// ul に7つの大陸を追加する
for (let o of oceans) {
  // （この中を完成させる）
  li = document.createElement('li');
  li.textContent = o;
  ul.insertAdjacentElement('beforeend', li);
}

let h1 = document.querySelector('h1');

h1.style.color = 'blue';

h1.style.fontSize = '10';

 // すべての h2 要素を検索する（次の行を完成させる）
let h2s = document.querySelectorAll('h2');;

// h2 要素に対して繰り返す
for (let h2 of h2s) {
  // h2 の背景色を 'palegreen' に変更する
  //   (次の行を書く)
  h2.style.backgroundColor = 'palegreen';
}

let ls = document.querySelectorAll('li');
for (let li of ls) {
    li.classList.add('orangeUnderline');
  }

  li = document.querySelector('li#NA');

 li.classList.contains('orangeUnderline');

 li.classList.contains('na');

 li.classList.contains('blueUnderline');
