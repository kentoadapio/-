(function(){
  'use strict';

  // console.log('sample');

  // var btn=document.getElementsByClassName('button');
  const btn=document.getElementById('button');
  const inst=document.getElementById('instruction');
  const blue=document.getElementById('blue');
  const yellow=document.getElementById('yellow');
  const red=document.getElementById('red');
  let isRunning=false;

  blue.classList.add('blue');

  function toBlue(){
      yellow.classList.remove('yellow');
      red.classList.add('red');
      setTimeout(function(){
        red.classList.remove('red');
        blue.classList.add('blue');
        inst.textContent='ボタンを押してください'
        isRunning=false;
      },20000);
  }

  btn.addEventListener('click',function(){
    if(isRunning){
      return;
    }
    isRunning=true;
    blue.classList.remove('blue');
    yellow.classList.add('yellow');
    inst.textContent='';
    setTimeout(toBlue,3000);
    // setTimeout(function(){
    //   yellow.classList.remove('yellow');
    //   red.classList.add('red');
    // },3000);
    // console.log('sample');
  });
})();
