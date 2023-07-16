const modalContainer = document.querySelector(".modal-container");
const modalContainerTwo = document.querySelector(".modal-containerTwo");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalClickables = document.querySelectorAll(".modal-clickable");
const header = document.querySelector(".header");
const sidebar = document.querySelector(".sidebar");


modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

modalClickables.forEach(clickable => clickable.addEventListener("click", toggleModalTwo));

function toggleModal(){
    modalContainer.classList.toggle("active");
    header.classList.toggle("active");
    sidebar.classList.toggle("active");
}

function toggleModalTwo(){
    modalContainerTwo.classList.toggle("active");
    header.classList.toggle("active");
    sidebar.classList.toggle("active");
}