const menu = document.querySelector(".menu")
const burger = document.querySelector(".bars")

let b = false

burger.addEventListener("click", ()=> {
  burger.classList.toggle("reverse-rotate", !b)
  burger.classList.toggle("rotate", b)
  
  menu.classList.toggle("active")
  b = !b
})
