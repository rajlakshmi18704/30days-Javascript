const pagecheckbox=document.querySelector('#wholepagedarkmode')
const containercheckbox=document.querySelector('#containerdarkmode')
const container=document.querySelector('.container')
const pagecol=JSON.parse(localStorage.getItem('pagecolor'))
const containcol=
JSON.parse(localStorage.getItem('containercolor'))

if(pagecol){
  pagecheckbox.checked=true
  if(pagecheckbox.checked){
    document.body.classList.add('dark')
    localStorage.setItem('pagecolor',true)
  }

else{

  document.body.classList.remove('dark')
  localStorage.setItem('pagecolor',false)
}
}
if(containcol){
  containercheckbox.checked=true
  if(containercheckbox.checked){

    container.classList.add('dark')
    localStorage.setItem('containercolor',true)
  }


    else{
      container.classList.remove('dark')
      localStorage.setItem('containercolor',false)
    }

}
pagecheckbox.addEventListener('click',()=>{
  if(pagecheckbox.checked){
    document.body.classList.add('dark')
    localStorage.setItem('pagecolor',true)
  }

else{

  document.body.classList.remove('dark')
  localStorage.setItem('pagecolor',false)
}

  
})

containercheckbox.addEventListener('click',()=>{
  if(containercheckbox.checked){

    container.classList.add('dark')
    localStorage.setItem('containercolor',true)
  }


    else{
      container.classList.remove('dark')
      localStorage.setItem('containercolor',false)
    }
  

})