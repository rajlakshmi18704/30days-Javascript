const hamberger=document.querySelector('.hamberger-menu')
const header_container=document.querySelector('.header-container')
const closeicon=document.querySelector('.closeicon')
const nav=document.querySelector('nav')
const back=document.querySelector('.go-to-top')
hamberger.addEventListener('click',(e)=>{
  e.stopPropagation()
  header_container.classList.add('menu-open')
})
closeicon.addEventListener('click',(e)=>{

  header_container.classList.remove('menu-open')
})
window.addEventListener('click',()=>{
 
  header_container.classList.remove('menu-open')
})


nav.addEventListener('click',(e)=>{
  e.stopPropagation();
})
back.addEventListener('click',(e)=>{
document.querySelector('.main-content').scrollTo(0,0)
})