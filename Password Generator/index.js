const uppercasechar='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercasechar='abcdefghijklmnopqrstuvwxyz'
const number='0123456789'
const symbols='!@#$%^&*()_+/~'         
const passbox=document.getElementById("pass-box")
const totalchar=document.getElementById("total-char")
const lowerchar=document.getElementById("lower-char")
const upperchar=document.getElementById("upper-char")
const numbersInput=document.getElementById('numbers')
const  symbolsInput=document.getElementById('symbols')

const getrandomData=(dataset)=>{
  return random=dataset[Math.floor(Math.random()*dataset.length)]

}

const generatePassword=(password='')=>{
if(lowerchar.checked){
  password+=getrandomData(lowercasechar)
}
if(upperchar.checked){
  password+=getrandomData(uppercasechar)
}
if(symbolsInput.checked){
  password+=getrandomData(symbols)
}
if(numbersInput.checked){
  password+=getrandomData(number)
}
if(password.length< totalchar.value){
  return generatePassword(password)
  
}

passbox.innerText=truncatestring(password,totalchar.value)
}
generatePassword()
document.querySelector('.generate-btn').addEventListener('click',()=>{
  generatePassword()
})
function truncatestring(str,num){
  if(str.length>num){
    let substr=str.substring(0,num);
    return substr
  }
else
return str

}