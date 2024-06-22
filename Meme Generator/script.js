const button =document.querySelector('.generatebutton')
const tittle=document.querySelector('.memetitle')
const image=document.querySelector('.memeimg')
const authorname=document.querySelector('.author')
function memeGenerator(){
  fetch('https://meme-api.com/gimme/wholesomememes').then((res)=>res.json())
  .then((data)=>{
    const {author,title,url}=data
    tittle.innerText=`${title}`
    image.src=url
authorname.innerText=`Meme by:${author}`

    console.log(data)
  })
}
memeGenerator()
button.addEventListener('click',()=>{
  memeGenerator()
})
