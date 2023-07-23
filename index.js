const worker = new Worker('worker.js');

const sumBtn = document.getElementById('sumBtn');
const bgBtn = document.getElementById('bgBtn');

sumBtn.addEventListener('click', (event) => {
  worker.postMessage('hello worker ');
});
worker.onmessage = function (message) {
  alert(`the finale sum is ${message.data}`);
};
bgBtn.addEventListener('click', (event) => {
  if (document.body.style.background != 'green') {
    document.body.style.background = 'green';
  } else document.body.style.background = 'blue';
});