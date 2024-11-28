// icon
var menuBtn = document.querySelector(".navbar-toggler")
 
// close icon
var menuCls = document.querySelector(".cls")

// menu
var menu = document.querySelector(".menu-items")

// eventlistener
menuBtn.addEventListener("click",function(){
      menu.classList.toggle("active")
})

menuCls.addEventListener("click",function(){
    menu.classList.toggle("active")
})