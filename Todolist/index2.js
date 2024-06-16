const lists=document.querySelector('.lists')

const newwork=document.querySelector('.new-todo');
const addbtn=document.querySelector('.add-btn')
function addTask(){
  const newdiv=document.createElement('div')
  newdiv.className="big-div ";
newdiv.innerHTML=`

<i class="fa-solid fa-check  completed-btn" style="color: white;"
   ></i>


<p class="addedTask">${newwork.value}</p>
<button class="delbtn">X</button>
` 

lists.appendChild(newdiv) 
saveData();
document.querySelectorAll('.completed-btn').
forEach((ele)=>{
ele.addEventListener('click',completedTask
)
})
document.querySelectorAll('.delbtn').
forEach((ele)=>{
ele.addEventListener('click',DeletedTask
)
})


  newwork.value=''

}
addbtn.addEventListener('click',()=>{
 addTask();

 
 })
 
function completedTask(event){
  
  const task=event.target
  console.log(task)
  task.classList.toggle('style-btn')
  task.nextElementSibling.classList.toggle("js-completed")
saveData()
}

function DeletedTask(event){
  const Task=event.target.parentElement;
  lists.removeChild(Task);
  saveData()
}

function saveData(){
  localStorage.setItem('tasks',lists.innerHTML)

}
function showData(){
  lists.innerHTML=localStorage.getItem('tasks')
}
showData();