const amountentered=document.querySelector('.bill-amount')
const no_ofpeople=document.querySelector('.noofpeople')
const bill_generate=document.querySelector('.bill-generate')
const perpersonbill=document.querySelector('.eachpers span')
const totalbilloutput=document.querySelector('.Total span')
const tipamount=document.querySelector('.tipamount span')
const customtip=document.querySelector('.custom-tip')
const tipscontainer=document.querySelector('.button-div')
const resetbtn=document.querySelector('.reset')
let tippercent=0

bill_generate.addEventListener('click',()=>{
 
 const amount=parseInt(amountentered.value)
  
  const people=parseInt(no_ofpeople.value)

  const tipmoney=amount*(tippercent /100)
  const totalamount=amount+tipmoney
  totalbilloutput.innerText=`$ ${totalamount}` 
  tipamount.innerText=`$ ${tipmoney}`



const eachpersonbill=totalamount/people
  console.log(eachpersonbill)
  perpersonbill.innerText=`$ ${eachpersonbill}`
  resetbtn.disabled=false
 
})
tipscontainer.addEventListener('click',(e)=>{
  if(tipscontainer.classList.contains('disabled')) return
  if(e.target!==tipscontainer){
   [... tipscontainer.children].forEach((tip) => 
      tip.classList.remove('selected')
    )
    e.target.classList.add('selected')
    tippercent=(parseInt(e.target.innerText))
    customtip.value=''
    if(no_ofpeople.value && tippercent){
      bill_generate.disabled=false
    }
else{
  bill_generate.disabled=true
}  
   
  }
  
})
customtip.addEventListener('input',()=>{

  tippercent=parseInt(customtip.value);
  [... tipscontainer.children].forEach((tip) => 
    tip.classList.remove('selected')
  )
  if(no_ofpeople.value && tippercent){
    bill_generate.disabled=false
  }
else{
bill_generate.disabled=true
}  
})
resetbtn.addEventListener('click',()=>{
  tippercent=0
  amountentered.value=''
  no_ofpeople.value=''
  customtip.value='';
  [... tipscontainer.children].forEach((tip) => 
    tip.classList.remove('selected')
  )
  totalbilloutput.innerText=`` 
tipamount.innerText=``
perpersonbill.innerText=``
resetbtn.disabled=true
bill_generate.disabled=true
})
amountentered.addEventListener('input',()=>{
  if(amountentered.value){
    customtip.disabled=false
    no_ofpeople.disabled=false
    tipscontainer.classList.remove('disabled')
 
  }
  else{
    customtip.disabled=true
    no_ofpeople.disabled=true
    tipscontainer.classList.add('disabled')
  }
})
no_ofpeople.addEventListener('input',()=>{
  if(tippercent && no_ofpeople.value){
    bill_generate.disabled=false
  }
  else{
    bill_generate.disabled=true
  }
 
})
