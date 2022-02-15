import {modal} from "/js/components/modal.js"

const main=()=>{
  const modalOpenBtn= document.querySelector("#modal-open-btn");
  const modalCloseBtn= document.querySelector("#modal-close-btn");

  modalOpenBtn.addEventListener('click', modal());
  modalCloseBtn.addEventListener("click", modal());

}

main();
