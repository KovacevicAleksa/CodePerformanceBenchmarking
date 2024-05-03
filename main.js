//Making array with random number

form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let repetition = document.getElementById("repetition").checked;
  let sorted = document.getElementById("sorted").checked;
  let numElements = document.getElementById("numElements").value;
  let minNumElements = document.getElementById("minNumElements").value;
  let maxNumElements = document.getElementById("maxNumElements").value;

  let uniqueNumbers = generateUniqueNumbers(
    numElements,
    minNumElements,
    maxNumElements,
    repetition,
    sorted
  );
  console.log(uniqueNumbers);
  loopsCopyArray(uniqueNumbers);
});

function generateUniqueNumbers(quantity, min, max, repetition, sorted) {
  sumArr1 = [];
  sumArr = [];
  let uniqueNumbers;
  let num;
  if (repetition == true) {
    uniqueNumbers = new Set();
    while (uniqueNumbers.size < quantity) {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(num);
    }
  } else {
    uniqueNumbers = [];
    for (let i = 0; i < quantity; i++) {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers[i] = num;
    }
  }
  if (sorted == true) {
    uniqueNumbers = Array.from(uniqueNumbers).sort((a, b) => a - b);
  } else {
    uniqueNumbers = Array.from(uniqueNumbers);
  }
  return uniqueNumbers;
}

function loopsCopyArray(uniqueNumbers) {
  let ArrForLoop = [];
  let ArrForLoopCached = [];
  let ArrForEach = [];

  let uniqueNumbers0 = [...uniqueNumbers];
  let uniqueNumbers1 = [...uniqueNumbers];
  let uniqueNumbers2 = [...uniqueNumbers];

  /*
   * let uniqueNumbers0 = new Array(100000).fill(Math.random());
   * let uniqueNumbers1 = new Array(100000).fill(Math.random());
   * let uniqueNumbers2 = new Array(100000).fill(Math.random());
   */

  //ForLoop
  console.time("forLoop");
  for (let i = 0; i < uniqueNumbers0.length; i++) {
    ArrForLoop[i] = uniqueNumbers0[i];
  }
  console.timeEnd("forLoop");
  console.log(ArrForLoop);

  //forLoopCached
  console.time("forLoopCached");
  const uniqSize = uniqueNumbers1.length;
  for (let i = 0; i < uniqSize; i++) {
    ArrForLoopCached[i] = uniqueNumbers1[i];
  }
  console.timeEnd("forLoopCached");
  console.log(ArrForLoopCached);

  //ForEachLoop
  console.time("ArrForEach");
  uniqueNumbers2.forEach((item) => {
    ArrForEach.push(item);
  });
  console.timeEnd("ArrForEach");
  console.log(ArrForEach);
}
