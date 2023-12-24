const modal = document.querySelector(".video-modal")
const closeModal = document.querySelector(".bx-x-circle")
const openModal = document.querySelector("#imagem")

openModal.addEventListener("click", ()=>{
    modal.classList.remove("disable")
    modal.classList.add("active")
})

closeModal.addEventListener("click", ()=>{
    modal.classList.remove("active")
    modal.classList.add("disable")
})