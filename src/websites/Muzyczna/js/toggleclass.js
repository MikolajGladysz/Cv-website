document.getElementById("menu-nav").addEventListener("click", toggle_nav);
function toggle_nav(){
    var elem = document.getElementById("mobilenav");
    elem.classList.toggle("active");
}