//data set for word scramble game

let wordList = [
  {
    word: "addition",
    hint: "The process of adding numbers",
  },
  {
    word: "meeting",
    hint: "Event in which people come together",
  },
  {
    word: "number",
    hint: "Math symbol used for counting",
  },
  {
    word: "exchange",
    hint: "The act of trading",
  },
  {
    word: "canvas",
    hint: "Piece of fabric for oil painting",
  },
  {
    word: "garden",
    hint: "Space for planting flower and plant",
  },
  {
    word: "position",
    hint: "Location of someone or something",
  },
  {
    word: "feather",
    hint: "Hair like outer covering of bird",
  },
  {
    word: "comfort",
    hint: "A pleasant feeling of relaxation",
  },
  {
    word: "tongue",
    hint: "The muscular organ of mouth",
  },
  {
    word: "expansion",
    hint: "The process of increase or grow",
  },
  {
    word: "country",
    hint: "A politically identified region",
  },
  {
    word: "group",
    hint: "A number of objects or persons",
  },
  {
    word: "taste",
    hint: "Ability of tongue to detect flavour",
  },
  {
    word: "store",
    hint: "Large shop where goods are traded",
  },
  {
    word: "field",
    hint: "Area of land for farming activities",
  },
  {
    word: "friend",
    hint: "Person other than a family member",
  },
  {
    word: "pocket",
    hint: "A bag for carrying small items",
  },
  {
    word: "needle",
    hint: "A thin and sharp metal pin",
  },
  {
    word: "expert",
    hint: "Person with extensive knowledge",
  },
  {
    word: "statement",
    hint: "A declaration of something",
  },
  {
    word: "second",
    hint: "One-sixtieth of a minute",
  },
  {
    word: "library",
    hint: "Place containing collection of books",
  },
];

let randomWord = document.querySelector(".word");
let word_num = wordList[Math.floor(wordList.length * Math.random())].word;
console.log(word_num);
let len;
let inputs = document.querySelector(".inputs");
let word = word_num;
let mistake = "";
let i = 0;
let k = 0;
let mistakeElemet = document.getElementById("mis");
let chances = document.getElementById("tri");
let correctLetters = "";

function defaultInputSetter() {
  len = word_num.length;
  console.log(len);
  for (var i = 1; i < len; i++) {
    inputs.insertAdjacentHTML(
      "beforeend",
      `<input type="text" maxlength="1" disabled='disabled' id=input${i} class="inputWord" onchange="checkInput(event)" >`
    );
  }
  let shuffle = word_num
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  console.log(shuffle);
  randomWord.innerText = shuffle;
}

function checkInput(event) {
  if (word_num.charAt(i) === event.target.value) {
    correctLetters += event.target.value;
    document.getElementsByClassName("inputWord")[0].style.background = "purple";
    i++;
    // j=i+1
    id = "input" + i;
    console.log(id);
    

    //code for win the match
    console.log(correctLetters);
    if (correctLetters.length == word_num.length) {
      alert("Congratulation! You have won");
      location.reload();
    }

    if (i <= word_num.length - 1) {
      document.getElementById(id).removeAttribute("disabled");
      document.getElementById(id).style.background = "purple";
    }
  } else {
    if (k <= 4) {
      console.log(k);
      k++;
    } else {
      alert("Game Over");
      location.reload();
      mistakeElemet.innerText = "";
      mistake = "";
    }

    mistake += event.target.value;
    console.log(mistake);
    mistakeElemet.innerText = mistake;
    chances.innerText = k;
    let box = (document.getElementsByClassName("chance")[
      k - 1
    ].style.backgroundColor = "purple");
  }
}
defaultInputSetter();

function changeWord() {
  k = 0;
  mistakeElemet.innerText = "";
  mistake = "";
  inputs.innerHTML = "";
  word_num = wordList[Math.floor(wordList.length * Math.random())].word;
  console.log(word_num);
  len = word_num.length;
  console.log(len);
  for (var i = 0; i < len; i++) {
    inputs.insertAdjacentHTML(
      "beforeend",
      `<input type="text" maxlength="1" disabled='disabled' id=input${i} class="inputWord" onchange="checkInput(event)" >`
    );
  }
  let shuffle = word_num
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  console.log(shuffle);
  randomWord.innerText = shuffle;
  document.getElementById("input0").removeAttribute("disabled");

  var elements = document.getElementsByClassName("chance");

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "rgb(141, 131, 131)";
  }
  chances.innerText = "0";
}

//function for reset button
function resetPage() {
  window.location.reload();
}
