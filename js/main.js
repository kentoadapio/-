(function(){
  'use strict';

  // console.log('sample');

  // var btn=document.getElementsByClassName('button');
  var btn=document.getElementById('button');
  var inst=document.getElementById('instruction');
  var blue=document.getElementById('blue');
  var yellow=document.getElementById('yellow');
  var red=document.getElementById('red');
  var isRunning=false;

  function toblue(){
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
    if(isRunning===true){
      return;
    }
    isRunning=true;
    blue.classList.remove('blue');
    yellow.classList.add('yellow');
    inst.textContent='';
    setTimeout(toblue,3000);
    // setTimeout(function(){
    //   yellow.classList.remove('yellow');
    //   red.classList.add('red');
    // },3000);
    // console.log('sample');
  });
})();
