 ;(()=>{
  const input=document.querySelector('.in')
  const hint=document.querySelector('.hint')
  const form=document.querySelector('.form')
  const submitbtn=document.querySelector('.submit')
  const startbtn=document.querySelector('.start')
  console.log(startbtn)
  console.log(submitbtn)
  let guessArray=[]
  console.log(input)
  let html=''
  let count=0;
  let num=Math.floor(Math.random()*100)+1;
 
  form.addEventListener('submit',(e)=>{
  e.preventDefault();
 
 let temp=parseInt(input.value)
 guessArray.push(temp)
 count+=1;
 console.log(num)
 if(count==10){
   hint.innerHTML=`You Lost! The number was ${num}
   `
   document.querySelector('.para').innerHTML=`Your guess is `+guessArray.join(',')
 }
 else if(num>temp){
 hint.innerHTML='Too Low!'
 
 
 document.querySelector('.para').innerHTML=`Your guess is `+guessArray.join(',')
 }
  else if(num<temp){
   hint.innerHTML='Too High!'
 
 document.querySelector('.para').innerHTML=`Your guess is `+guessArray.join(',')
 }
 else if(num==temp){
   hint.innerHTML=' You got it!! Congrats'
 startbtn.disabled=false
 submitbtn.disabled=true
   document.querySelector('.para').innerHTML=`Your guess is `+guessArray.join(',')
 }
 input.value=''
   }
  )
 startbtn.addEventListener('click',()=>{
   
   count=0
   hint.innerHTML=' '
   startbtn.disabled=true
   submitbtn.disabled=false
   num=Math.floor(Math.random()*100)+1;
   document.querySelector('.para').innerHTML=` `
   guessArray=[]
  })
 
 })()
