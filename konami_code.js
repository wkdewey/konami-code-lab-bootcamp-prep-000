const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0;

function onKeyDownHandler(e) {
  const key = e.key;
  console.log(key);
  if (key === codes[index]) {
    index++;
    console.log(`index is ${index}`);
    console.log(index === codes.length)
    if (index === codes.length) {
      console.log("Alert!")
      window.alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}

function init() {
  document.addEventListener('keydown', onKeyDownHandler);
  
}
init();