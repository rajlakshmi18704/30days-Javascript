const input = document.querySelector('input')
let previousvalue = ''
let initialfirstcharacter=''
input.addEventListener('input', (e) => {
  const inputvalue = e.target.value
  // console.log(inputvalue, previousvalue)
  // use of regx Learn it 
  if (/\d+$/g.test(inputvalue)) {
    input.value=inputvalue
  }
  else {
    input.value=inputvalue.substring(0,inputvalue.length-1)
  }
  if(inputvalue.length==4 && previousvalue<inputvalue)
  {
    initialfirstcharacter=inputvalue.substring(0,3)
    input.value =  `+(${inputvalue.substring(0, 3)}) - ${inputvalue[inputvalue.length-1]}`
  
    console.log(input.value)
  }
  else if (inputvalue.length == 9 && previousvalue.length>inputvalue.length) {
    input.value=initialfirstcharacter
  }
previousvalue=inputvalue
})