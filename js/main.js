// import {modal} from "/js/components/modal.js"

  const modalOpenBtn= document.querySelector("#modal-open-btn");
  const modalCloseBtn= document.querySelector("#modal-close-btn");
  const ratingBtn=   document.getElementById('rating');
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


  document.getElementById('rating-id').addEventListener('click', function(event) {
  if(event.target.classList.contains('checked')) {
    event.target.classList.remove('checked');
  } else {
    Array.prototype.forEach.call(document.getElementsByClassName('checked'), function(el) {
      el.classList.remove('checked');
    });
    event.target.classList.add('checked');
  }
});

  const modalClicked=()=>{
    const modalContainer= document.querySelector(".modal-container");
    if (! (modalContainer.style.display)){
      modalContainer.style.display="flex";
    }else{
      modalContainer.style.display=null;
    }
  }


  modalOpenBtn.addEventListener('click', ()=>modalClicked());
  modalCloseBtn.addEventListener("click", ()=>modalClicked());
