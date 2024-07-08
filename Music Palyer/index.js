let progr=document.getElementById('progress')
  let song=document.getElementById('song')
let ctrlicon=document.getElementById('ctrl')
song.onloadedmetadata=a()
function playpause(){
  if(ctrlicon.classList.contains('fa-pause')){
    song.pause();
    ctrlicon.classList.remove('fa-pause')
    ctrlicon.classList.add('fa-play')
  }
    else{
      song.play()
      ctrlicon.classList.add('fa-pause');
    ctrlicon.classList.remove('fa-play');
    }
   
  
}
if(song.play()){
  setInterval(()=>{
    progr.value=song.currentTime;
  },500)
}
progr.onchange=function(){
  song.play()
  song.currentTime=progr.value;
  ctrlicon.classList.add('fa-pause')
  ctrlicon.classList.remove('fa-play')
}
function a(){
  progr.max=song.duration;
  progr.value=song.currentTime;
  }