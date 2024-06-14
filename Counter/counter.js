const sec=document.querySelector('.seconds')
const min=document.querySelector('.minutes')
const hours=document.querySelector('.hours')
let active=false;
const start=document.querySelector('.startTimer')
const stop=document.querySelector('.stopTimer')
let a=''
start.addEventListener('click',()=>{

  active=true;
  a=setInterval(()=>
    Timer() ,1000)



 });
 document.querySelector('.stop').addEventListener('click',()=>{
  clearInterval(a);
  sec.value=sec.value
  min.value=min.value
  hours.value=hours.value
 })

  // if(seconds>60){
  //  seconds=seconds-60
    
  //  sec.value=seconds;
  //  min.value=minutes;
  //  if(seconds==60){
  //   minutes-=1;
  //   sec.value=seconds;
  //   min.value=minutes;
  //  };
    
    
  // }
  // if(seconds!=0 && minutes!=0&& hours!=0){
  //   seconds=seconds-1;
  //   sec.value=seconds;
  //   if(seconds<=60){
  //     seconds-=1;
  //     minutes-=1;
  //     min.value=minutes;
  //     sec.value=seconds;
  //   }
      
    
  // }

  function Timer(){
   
    if(sec.value>60){
      min.value++;
      sec.value=parseInt(sec.value)-59
    }
    if(min.value>60){
     hours.value++;
      min.value=parseInt(min.value)-60
    }
    if(hours.value==0&& min.value==0 && sec.value==0){
      hours.value=''
      min.value=''
      sec.value=''
      stopInterval();
    }

    else if(sec.value!=0){
      sec.value=sec.value-1
    }
    else if(min.value!=0 && sec.value==0){
      sec.value=59
      min.value=min.value-1
    }
    else if(hours.value!=0 && min.value==0){
      min.value=60
      hours.value=hours.value-1
    }
  }
stop.addEventListener('click',()=>{
  stopInterval()
})
function stopInterval(){
  clearInterval(a)
  hours.value=0
  min.value=0
  sec.value=0
}






