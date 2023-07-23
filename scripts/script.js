// for slider menu
let sliderSubmenusHandller =
  document.getElementsByClassName("menu-has-submenu");
let i;

for (i = 0; i < sliderSubmenusHandller.length; i++) {
  sliderSubmenusHandller[i].addEventListener("click", function () {
    this.classList.toggle("menu-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// for slider second submenu
let sliderSeSubmenusHandller =
  document.getElementsByClassName("menu-has-se-submenu");
let a;

for (a = 0; a < sliderSeSubmenusHandller.length; a++) {
  sliderSeSubmenusHandller[a].addEventListener("click", function () {
    var panelSecond = this.nextElementSibling;
    console.log(panelSecond);
    if (panelSecond.style.maxHeight) {
      panelSecond.style.maxHeight = null;
    } else {
      panelSecond.style.maxHeight = panelSecond.scrollHeight + "px";
    } 
  });
}
