function forLoop(arr) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push("I am ${i} strange loop.");
    } else {
      arr.push("I am ${i} strange loops.");
    }
  }
  return arr;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number);
    number--;
  }
  return 'done';
}

function doWhileLoop(arr) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    arr.pop();
  } while (arr.length > 0 || maybeTrue());
  return arr;
}
