// the global object here is worker
onmessage = function (message) {
    let sum = 0;
    for (let i = 0; i < 100000000000000000000000000000000000000; i++) {
      sum += i;
    }
    postMessage(sum);
  };
  