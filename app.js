const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropwnDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", function() {
  dropwnDownMenu.classList.toggle("open");
  const isOpen = dropwnDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen 
  ? "fa-solid fa-xmark" 
  : "fa-solid fa-bars" 
});
