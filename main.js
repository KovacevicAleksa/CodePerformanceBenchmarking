//Making array with random number

form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let numElements = document.getElementById("numElements").value;
  let minNumElements = document.getElementById("minNumElements").value;
  let maxNumElements = document.getElementById("maxNumElements").value;
  let repetition = document.getElementById("withoutRepetition").checked;
  let sorted = document.getElementById("sorted").checked;
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
  let uniqueNumbers4 = [...uniqueNumbers];
  uniqueNumbers = null; //Garbage Collection

  /*
   * let uniqueNumbers0 = new Array(100000).fill(Math.random());
   * let uniqueNumbers1 = new Array(100000).fill(Math.random());..
   */

  console.log(
    "%cCopy Array:",
    "color: green; font-size: 16px; font-weight: bold"
  );

  // ForLoop
  console.time("forLoop");
  let ArrForLoop = [];
  for (let i = 0; i < uniqueNumbers0.length; i++) {
    ArrForLoop[i] = uniqueNumbers0[i];
  }
  console.timeEnd("forLoop");
  console.log(ArrForLoop);
  ArrForLoop = null; //Garbage Collection

  // ForLoopCached
  console.time("forLoopCached");
  let ArrForLoopCached = [];
  const uniqSize = uniqueNumbers1.length;
  for (let i = 0; i < uniqSize; i++) {
    ArrForLoopCached[i] = uniqueNumbers1[i];
  }
  console.timeEnd("forLoopCached");
  console.log(ArrForLoopCached);
  ArrForLoopCached = null; //Garbage Collection

  // ForEachLoop
  console.time("ArrForEach");
  let ArrForEach = [];
  uniqueNumbers2.forEach((item) => {
    ArrForEach.push(item);
  });
  console.timeEnd("ArrForEach");
  console.log(ArrForEach);
  ArrForEach = null; //Garbage Collection

  // ForOfLoop
  console.time("ArrForOf");
  let ArrForOf = [];
  for (let number of uniqueNumbers3) {
    ArrForOf.push(number);
  }
  console.timeEnd("ArrForOf");
  console.log(ArrForOf);
  ArrForOf = null; //Garbage Collection

  // Map
  window.performance.mark("unified-pipeline");
  console.time("ArrMap");
  let ArrMap = uniqueNumbers4.map((e) => e);
  console.timeEnd("ArrMap");
  console.log(ArrMap);
  console.log(window.performance.measure("unified-pipeline"));
  ArrMap = null; //Garbage Collection
}
