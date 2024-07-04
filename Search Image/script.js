const access_key='lGyn_OwbCTEwWL2w9aC_c64s509ucN4lhXAgO8yoHZw'
const searchForm=document.querySelector('form')
const searchInput=document.querySelector('.search-input')
const imageContainer=document.querySelector('.image-container')
const loadMorebtn=document.querySelector('.loadMore')
let page=1
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
const fetchImages=async(query,pageNo)=>{
  if(pageNo===1){
  imageContainer.innerHTML=''
  }

const url=`https://api.unsplash.com/photos?query=${query}&per_page=28&page=${pageNo}&client_id=${access_key}`;
const res=await fetch(url);
const data=await res.json();
 console.log(data)
 if(data.length>0){
data.forEach((photo)=>{
  const image=document.createElement('div');
  image.classList.add('imageHTML')
  image.innerHTML=`<img src="${photo.urls.regular}" />`
  const overlayElement=document.createElement('div')
  overlayElement.classList.add('overlay')
  const overlaytext=document.createElement('h3')
  overlaytext.innerText=`${photo.alt_description}`
  // creating overlaytext
  image.appendChild(overlayElement)
  overlayElement.appendChild(overlaytext)
  imageContainer.appendChild(image)
 
});
if(data.total_pages===pageNo){
  loadMorebtn.style.display='none'
}
else{
  loadMorebtn.style.display='block'
}
 

 }
else{
  imageContainer.innerHTML=`<h2>No Image Found.</h2>` 
}
}
searchForm.addEventListener('submit',(e)=>{
e.preventDefault()
const inputText=searchInput.value.trim();
if(inputText!==''){
 page=1;
  fetchImages(inputText,page)
}
else{
  imageContainer.innerHTML=`<h2>Please Enter a search query.</h2>`
}
})
loadMorebtn.addEventListener('click',()=>{
  fetchImages(searchInput.value.trim(),++page)
});