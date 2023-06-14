const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const header = document.querySelector(".header");
const sidebar = document.querySelector(".sidebar");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

function toggleModal(){
    modalContainer.classList.toggle("active");
    header.classList.toggle("active");
    sidebar.classList.toggle("active");
}