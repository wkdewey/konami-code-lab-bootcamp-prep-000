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

function onKeyDownHandler(e) {
  const key = e.key;
  console.log(key);
  if (key === codes[index]) {
    index++;
    if (index === alphabet.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}

function init() {
  let index = 0;
  document.addEventListener('keydown', onKeyDownHandler);
  
}
init();