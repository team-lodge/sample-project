function onSubmitClick(){
  if (validation()){
    var winners = chooseMember()
    output(winners) 
  } else {
    alert('当選者数が多すぎます')
  }
}

function validation(){
  var names = document.querySelector('.names').value
  var num = document.querySelector('.num').value

  var list = names.split(',')
  if(num <= list.length){
    return true;
  } else {
    return false;
  }
}

/**
* メンバーを抽選する1
*/
function chooseMember() {
    
  var names = document.querySelector('.names').value
  var list = names.split(',')
  
  var count = document.querySelector('.num').value

  let winners = [];

  // 指定された当選者数分だけ for で回す
  for (let i = 0; i < count; i++) {
    /**
    * 乱数の取得に関して、このサイトがわかりやすいです。
    * https://www.sejuku.net/blog/22432
    */
    const chosen_index = Math.floor(Math.random() * list.length);
    // 当選者を当選者用配列に詰める
    winners.push(list[chosen_index]);
  
    // 応募者リストから、当選したメンバーを除外する
    list.splice(chosen_index, 1);
  }
  return winners
}

/**
* HTML タグを生成して出力する
* @param {string[]} winners 当選者の配列
*/
function output(winners) {
  let elem = document.getElementById('js-list');
  elem.innerText = '';
  let ul = document.createElement('ul');
  for (let i = 0; i < winners.length; i++) {
    let li = document.createElement('li');
    li.className = 'winnersList';
    li.innerText = winners[i]+' さん';
    ul.appendChild(li);
  }

  elem.appendChild(ul);
}
