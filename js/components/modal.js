const modalClicked=action=>{
  const modalContainer= document.querySelector(".modal-container");
  if (! (modalContainer.style.display)){
    modalContainer.style.display="flex";
  }else{
    modalContainer.style.display=null;
  }
}

export function modal(){
 return modalClicked
}
