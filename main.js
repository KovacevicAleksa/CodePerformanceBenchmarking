//Making array with random number

form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let repetition = document.getElementById("repetition").checked;
  let sorted = document.getElementById("sorted").checked;
  let numElements = document.getElementById("numElements").value;
  let minNumElements = document.getElementById("minNumElements").value;
  let maxNumElements = document.getElementById("maxNumElements").value;
  let buffer = document.getElementById("buffer").checked;

  let uniqueNumbers = generateUniqueNumbers(
    numElements,
    minNumElements,
    maxNumElements,
    repetition,
    sorted,
    buffer
  );
  console.log(
    "%cCreated Array:",
    "color: green; font-size: 16px; font-weight: bold"
  );
  console.log(uniqueNumbers);
  compareLoopsCopyMethods(uniqueNumbers);
});

function generateUniqueNumbers(quantity, min, max, repetition, sorted, buffer) {
  let uniqueNumbers;
  let num;
  if (repetition) {
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
  if (sorted) {
    uniqueNumbers = Array.from(uniqueNumbers).sort((a, b) => a - b);
  } else {
    uniqueNumbers = Array.from(uniqueNumbers);
  }
  if (buffer) {
    // Max size +32,767 per element Int16
    // Max size +2,147,483,647 per element Int32
    let buffer = new ArrayBuffer(
      max > 32767
        ? uniqueNumbers.length * Int32Array.BYTES_PER_ELEMENT
        : uniqueNumbers.length * Int16Array.BYTES_PER_ELEMENT
    );
    let intBuffer =
      max > 32767 ? new Int32Array(buffer) : new Int16Array(buffer);

    intBuffer.set(uniqueNumbers);
    return intBuffer;
  } else {
    return uniqueNumbers;
  }
}

function compareLoopsCopyMethods(uniqueNumbers) {
  let uniqueNumbers0 = [...uniqueNumbers];
  let uniqueNumbers1 = [...uniqueNumbers];
  let uniqueNumbers2 = [...uniqueNumbers];
  let uniqueNumbers3 = [...uniqueNumbers];

  /*
   * let uniqueNumbers0 = new Array(100000).fill(Math.random());
   * let uniqueNumbers1 = new Array(100000).fill(Math.random());
   * let uniqueNumbers2 = new Array(100000).fill(Math.random());
   */

  console.log(
    "%cCopy Array:",
    "color: green; font-size: 16px; font-weight: bold"
  );

  // ForLoop
  console.time("forLoop");
  let ArrForLoop = [];
  for (let i = 0; i < uniqueNumbers.length; i++) {
    ArrForLoop[i] = uniqueNumbers[i];
  }
  console.timeEnd("forLoop");
  console.log(ArrForLoop);

  // ForLoopCached
  console.time("forLoopCached");
  let ArrForLoopCached = [];
  const uniqSize = uniqueNumbers.length;
  for (let i = 0; i < uniqSize; i++) {
    ArrForLoopCached[i] = uniqueNumbers[i];
  }
  console.timeEnd("forLoopCached");
  console.log(ArrForLoopCached);

  // ForEachLoop
  console.time("ArrForEach");
  let ArrForEach = [];
  uniqueNumbers.forEach((item) => {
    ArrForEach.push(item);
  });
  console.timeEnd("ArrForEach");
  console.log(ArrForEach);

  console.time("ArrForOf");
  let ArrForOf = [];
  for (let number of uniqueNumbers3) {
    ArrForOf.push(number);
  }
  console.timeEnd("ArrForOf");
  console.log(ArrForOf);
}
