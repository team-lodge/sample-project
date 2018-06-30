function errorMessage(){
    const form = document.form1;
    const names = form.names.value;

    const data ={};
   console.log(names);
   console.log(names.length);
   
   

   // const message = 'error'
   // if(names.length < num.length){
   //     // console.log(message);
   //     alert(message);
   // }
   // return message
 }

 /**
  * メンバーを抽選する1
  */
 function chooseMember() {
   errorMessage();
   const form = document.form1;
   const names = form.names.value;
   const list = names.split(',');

   const count = form.num.value;
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
   output(winners);
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
     li.innerText = winners[i]+' さん';
     ul.appendChild(li);
   }

   elem.appendChild(ul);
 }

