const buttons=document.querySelectorAll('.btns')
const result=document.querySelector('.head h1')
const reset=document.querySelector('.reset-btn ')
const winningpattern=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [3,4,5],
  [6,7,8],
  [2,5,8],
  [2,4,6],
  [1,4,7],
  [2,4,6]
]
let turn=true;
let count=0
buttons.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    if(turn){
      btn.innerText='X'
      turn=false
    }
    else{
      btn.innerText='0'
      turn=true
    }
    count+=1;
   btn.disabled=true
  checkwinner()
  draw()

  })

})

function checkwinner(){
  for( let pattern of winningpattern){
    
   
     let posvalue0=buttons[pattern[0]].innerText
     let posvalue1=buttons[pattern[1]].innerText
     let posvalue2=buttons[pattern[2]].innerText
     if(posvalue0!='' && posvalue1!='' && posvalue2!=''){
      if(posvalue0===posvalue1 && posvalue1===posvalue2){
        
       
        result.innerText=`Winner is ${posvalue0}`
disablebutton()
        reset.classList.remove('hide');
      }
   
    }
   
     
    
      }
    
      // console.log(winningpattern)
}
reset.addEventListener('click',()=>{
  resetGame()
})
function resetGame(){
  turn=true;

  for(let btn of buttons){
      btn.innerText=''
    
  }
  enablebtn()
  count=0
  result.innerText=''
  
  reset.classList.add('hide')
}
function disablebutton(){
  for(let btn of buttons){
    
    btn.disabled=true
  }
}
function enablebtn(){
  for(let btn of buttons){
    
    btn.disabled=false
  }
}
function draw(){
  if(count===9 && result.innerText==''){
    result.innerText='It was a Draw'
    reset.classList.remove('hide');
  }
}