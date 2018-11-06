const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function () {
//     let number = btns[i].getAttribute('data-num');

    //* adds output to the screen
//     screen.value += number;
//   });
// };

// * forEach method

btns.forEach(function(btn){
  btn.addEventListener('click', function(){
    let number = btn.getAttribute('data-num');
    screen.value += number;
  });
});

// ? there is an error in let result = eval(screen.value); line giving the result as null
equal.addEventListener('click', function () {
  if (screen.value === '') {
    screen.value = `Input is empty`;
  } else {
    let result = eval(screen.value);
    screen.value = result;
  }
})

clear.addEventListener('click', function () {
  screen.value = '';
})