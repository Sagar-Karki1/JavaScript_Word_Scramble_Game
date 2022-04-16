const msg = document.querySelector(".msg__area");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");

let play = false;
let newWords = "";
let randWords = "";

let sWords = [
  "python",
  "javascript",
  "c++",
  "php",
  "java",
  "c#",
  "sql",
  "angular",
  "reactjs",
  "swift",
  "android",
];
const createNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWords.length);
  let newTempWords = sWords[ranNum];
  //   console.log(newTempWords.split(""));
  return newTempWords;
};

const scrambleWords = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    // console.log(temp);
    let j = Math.floor(Math.random() * (i + 1));
    // console.log(i);
    // console.log(j);
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden__area");
    newWords = createNewWords();
    randWords = scrambleWords(newWords.split("")).join("");
    // console.log(randWords.join(""));
    msg.innerHTML = `Guess the word: ${randWords}`;
  } else {
    let tempWord = guess.value;
    if (tempWord === newWords) {
      //   console.log("correct");
      play = false;
      msg.innerHTML = `Hurray...It is ${newWords}`;
      btn.innerHTML = "Next";
      guess.classList.toggle("hidden__area");
      guess.value = "";
    } else {
      //   console.log("incorrect");
      msg.innerHTML = `Sorry...its incorrect... ${randWords}`;
    }
  }
});
