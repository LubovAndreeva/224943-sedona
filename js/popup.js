var link = document.querySelector(".btn-search");
var popup = document.querySelector(".box-search");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.toggle("box-search-show");
});