let menu = document.querySelector(".open-nav")
let close = document.querySelector(".close-nav")
let navbar = document.querySelector(".nav-links")

menu.addEventListener('click',function () {
navbar.classList.toggle("active")
menu.style.display = "none"
    
})
close.addEventListener('click',function () {
    navbar.classList.remove("active")
    menu.style.display = "flex"
    
})