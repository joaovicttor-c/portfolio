//----- SCROLL EFFECT --------
const navigation = document.querySelector(".mysite-Navigation");
window.addEventListener('scroll', showNavOnScroll)

function showNavOnScroll() {
  if(scrollY > 0) {
    navigation.classList.add("scroll")
  } else {
    navigation.classList.remove("scroll")
  }

}
showNavOnScroll()

//------ MENU EXPANDED --------
const body = document.querySelector(".mysite");

function openMenu() {
  body.classList.add("menu-expanded");
}

function closeMenu() {
  body.classList.remove("menu-expanded");
}
