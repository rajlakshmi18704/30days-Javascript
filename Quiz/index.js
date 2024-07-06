const questionContent=document.querySelector('.quiz h2')
const answerscontainer=document.querySelector('.Answers')
const nextques=document.querySelector('.nextbtn')

const questions=[
  {question:'What does CSS stand for',
    answers:[
      {text:'Creative Style Sheets',corrrect:false},
      { text:'Computer Style Sheets',corrrect:false},
      { text:'Cascading Style Sheets',corrrect:true},
      { text:'Colorful Style Sheets',corrrect:false},

    ]
  },
    {
      question:'Which CSS property is used for changing the text color of an element?',
      answers:[
        {text:'color',corrrect:true},
        { text:'text-color',corrrect:false},
        { text:'font-color',corrrect:false},
        { text:'textColor',corrrect:false},
      ]   
      
    }

,
{
  question:'How do you select an element with the ID "example"?',
  answers:[
    {text:'#example',corrrect:true},
    { text:'.example',corrrect:false},
    { text:'$example',corrrect:false},
    { text:'@example',corrrect:false},
  ]   
  
}

,
{
  question:'In CSS, what is the default value of the position property?',
  answers:[
    {text:'relative',corrrect:false},
    { text:'static',corrrect:true},
    { text:'fixed',corrrect:false},
    { text:'absolute',corrrect:false},
  ]   
  
}

,


]
let currequesindex=0
let score=0
 
function Startquiz(){
  currequesindex=0
 score=0
  showques();
  nextques.innerText="Next"
}

function  showques(){
  resetState()
  let cureentQues=questions[currequesindex]
  
  let quesNo= currequesindex+1
  questionContent.innerText=`${quesNo}.${cureentQues.question}`
cureentQues.answers.forEach(answer=>{
  const button=document.createElement('button')
  button.classList.add('btn')
  button.innerText=answer.text
 answerscontainer.appendChild(button)
 if(answer.corrrect){
 button.dataset.corrrect=answer.corrrect
 }
 button.addEventListener('click',selectAnswer)
  
})
}
function resetState(){
  nextques.computedStyleMap.display='none'
  while(answerscontainer.firstChild){
    answerscontainer.removeChild(answerscontainer.firstChild)
  }
}
function selectAnswer(e){
const selectedbtn=e.target 
const isCorrect=selectedbtn.dataset.corrrect==='true'
// console.log(isCorrect)
if(isCorrect){
  selectedbtn.classList.add('correct')
  score++;
}
else{
  selectedbtn.classList.add('incorrect')
}

Array.from(answerscontainer.children).forEach(button=>{
  if(button.dataset.corrrect==='true'){
    button.classList.add('correct');
      
  }
   button.disabled=true;


});
  nextques.style.display='block'
}
nextques.addEventListener('click',()=>{
  if(currequesindex<questions.length){
    handleNextBtn()
  }
  else{
    Startquiz()
  }
})
function handleNextBtn(){
  currequesindex++;
  if(currequesindex<questions.length){
    showques()
  }
    else{
      showscore()
    
  }
}
function showscore(){
  resetState()
  questionContent.innerText=`You scored ${score} out of the length of ${questions.length}!`
  nextques.innerHTML=`Play Again`
  nextques.style.display='block'
}
Startquiz()
