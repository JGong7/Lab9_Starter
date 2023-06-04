let form = document.querySelector('form');
  form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  });

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
errorBtns[0].addEventListener('click', ()=>{
  console.log("console log button clicked");
})

errorBtns[1].addEventListener('click', ()=>{
  console.error("console error button clicked");
})

errorBtns[2].addEventListener('click', ()=>{
  console.count("console count button clicked");
})

errorBtns[3].addEventListener('click', ()=>{
  console.warn("console warn button clicked");
})

errorBtns[4].addEventListener('click', ()=>{
  console.assert(1 + 1 == 3, "console assert button clicked");
})

errorBtns[5].addEventListener('click', ()=>{
  console.clear();
})

errorBtns[6].addEventListener('click', ()=>{
  console.dir(document.location);
})

errorBtns[7].addEventListener('click', ()=>{
  console.dirxml(document.querySelector("form"));
})

errorBtns[8].addEventListener('click', ()=>{
  console.group();
  console.log("this is when group starts");
})

errorBtns[9].addEventListener('click', ()=>{
  console.groupEnd();
  console.log("this is when group ends");
})

errorBtns[10].addEventListener('click', ()=>{
  console.table(["first", "second", "third"]);
})

errorBtns[11].addEventListener('click', ()=>{
  console.time();
})

errorBtns[12].addEventListener('click', ()=>{
  console.timeEnd();
})

errorBtns[13].addEventListener('click', ()=>{
  foo();
})

function foo() {
  bar();
}

function bar() {
  baz();
}

function baz() {
  console.trace();
}

errorBtns[14].addEventListener('click', ()=>{
  throw new Error("This is a global error")
})

class CustomUndefinedError extends Error{
  constructor(message){
    super(message);
    this.name = "CustomUndefinedError";
  }
}

function test(){
  throw new CustomUndefinedError("Testing out the custom error");
}

try{
  test();
}catch(error){
  alert(error.message);
  alert(error.name);
  alert(error.stack);
} finally{
  alert("The test is over!");
}

window.onerror = function(message, source, line, column, error){
  console.log(message);
  let errorPayload = {
    message: message,
    source: source,
    line: line,
    column: column,
  };

  TrackJS.track("testing TrackJS!");
  
}