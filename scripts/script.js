
// for slider menu
let sliderSubmenu = document.getElementsByClassName("slider-submenus");
let i;

for (i = 0; i < sliderSubmenu.length; i++) {

  sliderSubmenu[i].addEventListener("click", function() {
    this.classList.toggle("submenu-close");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}