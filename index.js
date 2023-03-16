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
  if(body.matches(".menu-expanded")) {
    body.classList.remove("menu-expanded"); 
   } else {
    body.classList.add("menu-expanded");
   };
  }

//------ WRITING EFFECT --------
let i = 0;
const tag = document.querySelector("h1");
const html = document.querySelector("h1").innerHTML;
tag.setAttribute("data", html);
const txt = tag.getAttribute("data");
let speed = 170;

function typeWriter() {
	if (i <= txt.length) {
		document.querySelector("h1").innerHTML = txt.slice(0 , i + 1);
		i++;
		setTimeout(typeWriter, speed);
	}
}
typeWriter();


ScrollReveal({
		origin: 'top',
    distance: '30px',
    duration: 700,
	}).reveal(`
		.mysite-Navigation, 
		.mysite-Home, 
		.mysite-About, 
		.mysite-About-container > h2, 
		.mysite-About-container > h3, 
		.mysite-About-container > p, 
		.mysite-Works,
		.mysite-Works-links
`);

ScrollReveal().reveal('.mysite-Home-container > p', {delay: 500})
ScrollReveal().reveal('.mysite-Home-container-buttons > li', {delay: 800})