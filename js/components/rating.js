// const clickedRating=e=>{
// console.log(e.target.class)
//   if(typeof(e.target.class)=="undefined"){
//     e.target.style.color= "var(--sec-col);"
//     console.log("in undefines")
//   }else{
//     e.target.style.color= "var(--prim-col);"
//     console.log("here")
//   }
// }
//
// export function rating(){
//   return clickedRating
// }

document.getElementById('rating').addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() != 'span') return;

  if (event.target.classList.contains('checked')) {
    event.target.classList.remove('checked');
  } else {
    Array.prototype.forEach.call(document.getElementsByClassName('checked'), function(el) {
      el.classList.remove('checked');
    });
    event.target.classList.add('checked');
  }
});
