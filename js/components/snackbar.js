const snackTrigger= document.querySelectorAll('.snackbar-trigger');
const snackBar= document.querySelector('.snackbar');

snackTrigger.forEach(trigger=>{
  console.log("clicken snackbar")
  trigger.addEventListener('click', ()=>{
    snackBar.classList.remove("hide");
    setTimeout(()=>{
      snackBar.classList.add("hide");
    }, 3000);
  });
});
