// Function to generate an array with unique random numbers
function generateUniqueNumbers(quantity, min, max, repetition, sorted, buffer) {
  let uniqueNumbers;
  if (repetition) {
    uniqueNumbers = new Set();
    while (uniqueNumbers.size < quantity) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(num);
    }
  } else {
    uniqueNumbers = [];
    for (let i = 0; i < quantity; i++) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.push(num);
    }
  }
  uniqueNumbers = sorted
    ? Array.from(uniqueNumbers).sort((a, b) => a - b)
    : Array.from(uniqueNumbers);
  if (buffer) {
    const bufferType = max > 32767 ? Int32Array : Int16Array;
    const buffer = new bufferType(uniqueNumbers);
    return buffer;
  } else {
    return uniqueNumbers;
  }
}

// Function to compare different copy methods for arrays
function compareLoopsCopyMethods(uniqueNumbers) {
  console.log(
    "%cCopy Arrays:",
    "color: green; font-size: 16px; font-weight: bold"
  );

  // ForLoop
  console.time("forLoop_Copy");
  let ArrForLoop = [];
  for (let i = 0; i < uniqueNumbers.length; i++) {
    ArrForLoop[i] = uniqueNumbers[i];
  }
  console.timeEnd("forLoop_Copy");
  console.log(ArrForLoop);
  ArrForLoop = null;

  // ForLoopCached
  console.time("forLoopCached_Copy");
  let ArrForLoopCached = [];
  const uniqSize = uniqueNumbers.length;
  for (let i = 0; i < uniqSize; i++) {
    ArrForLoopCached[i] = uniqueNumbers[i];
  }
  console.timeEnd("forLoopCached_Copy");
  console.log(ArrForLoopCached);
  ArrForLoopCached = null;

  // ForEachLoop
  console.time("ArrForEach_Copy");
  let ArrForEach = [];
  uniqueNumbers.forEach((item) => {
    ArrForEach.push(item);
  });
  console.timeEnd("ArrForEach_Copy");
  console.log(ArrForEach);
  ArrForEach = null;

  // ForOfLoop
  console.time("ArrForOf_Copy");
  let ArrForOf = [];
  for (const number of uniqueNumbers) {
    ArrForOf.push(number);
  }
  console.timeEnd("ArrForOf_Copy");
  console.log(ArrForOf);
  ArrForOf = null;

  // Map1
  console.time("ArrMap1_Copy");
  let ArrMap1 = [];
  ArrMap1 = uniqueNumbers.map((e) => e);
  console.timeEnd("ArrMap1_Copy");
  console.log(ArrMap1);
  ArrMap1 = null;

  // Map2
  console.time("ArrMap2_Copy");
  let ArrMap2 = [];
  uniqueNumbers.map((e) => ArrMap2.push(e));
  console.timeEnd("ArrMap2_Copy");
  console.log(ArrMap2);
  ArrMap2 = null;

  // Slice
  console.time("ArrSlice_Copy");
  let ArrSlice = [];
  ArrSlice = uniqueNumbers.slice();
  console.timeEnd("ArrSlice_Copy");
  console.log(ArrSlice);
  ArrSlice = null;

  //Spread
  console.time("ArrSpread_Copy");
  let ArrSpread = [];
  ArrSpread = [...uniqueNumbers];
  console.timeEnd("ArrSpread_Copy");
  console.log(ArrSpread);
  ArrSpread = null;

  //From
  console.time("ArrFrom_Copy");
  let ArrFrom = [];
  ArrFrom = Array.from(uniqueNumbers);
  console.timeEnd("ArrFrom_Copy");
  console.log(ArrFrom);
  ArrFrom = null;
}
function compareLoopsMultiplyMethods(uniqueNumbers) {
  // x*2

  console.log(
    "%cMultiply Arrays:",
    "color: green; font-size: 16px; font-weight: bold"
  );

  console.log(
    "%cMultiplying an array by a number is usually faster than copying it.\n" +
      "This is because multiplication is a simpler operation for CPUs, while copying involves\n" +
      "looping and assigning values, requiring more steps.\n" +
      "Several factors contribute to multiplication's potential speed advantage ...\n" +
      "see more at WhyMultiplyFasterThenCopy.md",
    "color: blue; font-size: 12px;"
  );

  // ForLoop
  console.time("forLoop_Multiply");
  let ArrForLoop = [];
  for (let i = 0; i < uniqueNumbers.length; i++) {
    ArrForLoop[i] = uniqueNumbers[i] * 2;
  }
  console.timeEnd("forLoop_Multiply");
  console.log(ArrForLoop);
  ArrForLoop = null;

  // ForLoopCached
  console.time("forLoopCached_Multiply");
  let ArrForLoopCached = [];
  const uniqSize = uniqueNumbers.length;
  for (let i = 0; i < uniqSize; i++) {
    ArrForLoopCached[i] = uniqueNumbers[i] * 2;
  }
  console.timeEnd("forLoopCached_Multiply");
  console.log(ArrForLoopCached);
  ArrForLoopCached = null;

  // ForEachLoop
  console.time("ArrForEach_Multiply");
  let ArrForEach = [];
  uniqueNumbers.forEach((item) => {
    ArrForEach.push(item * 2);
  });
  console.timeEnd("ArrForEach_Multiply");
  console.log(ArrForEach);
  ArrForEach = null;

  // ForOfLoop
  console.time("ArrForOf_Multiply");
  let ArrForOf = [];
  for (const number of uniqueNumbers) {
    ArrForOf.push(number * 2);
  }
  console.timeEnd("ArrForOf_Multiply");
  console.log(ArrForOf);
  ArrForOf = null;

  // Map1
  console.time("ArrMap1_Multiply");
  let ArrMap1 = [];
  ArrMap1 = uniqueNumbers.map((e) => e * 2);
  console.timeEnd("ArrMap1_Multiply");
  console.log(ArrMap1);
  ArrMap1 = null;

  // Map2
  console.time("ArrMap2_Multiply");
  let ArrMap2 = [];
  uniqueNumbers.map((e) => ArrMap2.push(e * 2));
  console.timeEnd("ArrMap2_Multiply");
  console.log(ArrMap2);
  ArrMap2 = null;

  //From
  console.time("ArrFrom_Multiply");
  let ArrFrom = [];
  ArrFrom = Array.from(uniqueNumbers, (x) => x * 2);
  console.timeEnd("ArrFrom_Multiply");
  console.log(ArrFrom);
  ArrFrom = null;

  //Eval
  console.log(
    "%cNever use direct eval()!!",
    "color: orange; font-size: 16px; font-weight: bold",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_direct_eval!"
  );
  console.time("ArrEval_Multiply");
  let ArrEval = [];
  ArrEval = eval(`[${uniqueNumbers.join("*2,")}*2]`);
  console.timeEnd("ArrEval_Multiply");
  console.log(ArrEval);
  ArrEval = null;
}

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numElements = parseInt(document.getElementById("numElements").value);
  const minNumElements = parseInt(
    document.getElementById("minNumElements").value
  );
  const maxNumElements = parseInt(
    document.getElementById("maxNumElements").value
  );
  const repetition = document.getElementById("withoutRepetition").checked;
  const sorted = document.getElementById("sorted").checked;
  const buffer = document.getElementById("buffer").checked;
  const clone = document.getElementById("clone").checked;
  const multiply = document.getElementById("multiply").checked;

  const uniqueNumbers = generateUniqueNumbers(
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
  clone && compareLoopsCopyMethods(uniqueNumbers);
  multiply && compareLoopsMultiplyMethods(uniqueNumbers);
});
