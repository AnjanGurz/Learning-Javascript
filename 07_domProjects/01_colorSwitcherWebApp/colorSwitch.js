
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (btn) => {
  console.log(btn);
  btn.addEventListener('click',  (color) => {
    // console.log(color);
    // console.log(color.target);

    // optimized by anjan
    body.style.backgroundColor = color.target.id


  })

})