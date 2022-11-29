const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const h1 = document.querySelector(".h1");
const buttons = document.querySelector(".buttons");
let counter = 20;
const pitanja = [
  {
    title: "Ko je osvojio svjetsko prvenstvo u fudbalu 2014?",
    questionNumber: "Prvo pitanje:",
    answers: ["Hrvatska", "Brazil", "Njemačka", "Francuska"],
    correctAnswer: "Njemačka",
  },
  {
    title: "Kako se zove najpoznatija pjesma The Weeknda?",
    questionNumber: "Drugo pitanje:",
    answers: ["Reminder", "Blinding Lights", "Starboy", "Call Out My Name"],
    correctAnswer: "Blinding Lights",
  },
  {
    title: "Koji je najveći čovjekov organ?",
    questionNumber: "Treće pitanje:",
    answers: ["Srce", "Koža", "Bubreg", "Jetra"],
    correctAnswer: "Koža",
  },
];


let interval = setInterval(() => {
        counter--;
        h1.innerHTML = counter;
        if (counter === 0) {
          clearInterval(interval)
          btn5.style.display = "flex"
        }
        else if (counter === 5) {
            h1.style.color = "red";
        }
      }, 1000);
let index = 0;

const changeHTML = () => {
  h3.innerHTML = pitanja[index].title;
  h2.innerHTML = pitanja[index].questionNumber;
  btn1.innerHTML = pitanja[index].answers[0];
  btn2.innerHTML = pitanja[index].answers[1];
  btn3.innerHTML = pitanja[index].answers[2];
  btn4.innerHTML = pitanja[index].answers[3];
};
changeHTML();
const checkAnswer1 = () => {
  if (btn1.innerHTML == pitanja[index].correctAnswer) {
    changeN();
    h1.innerHTML = 20;
    counter = 20;
    h1.style.color = "white";
  } else {
    clearInterval(interval)
    btn1.classList.add("false");
    btn5.style.display = "flex";
  }
};
const checkAnswer2 = () => {
  if (btn2.innerHTML == pitanja[index].correctAnswer) {
    changeN();
    h1.innerHTML = 20;
    counter = 20;
    h1.style.color = "white";
} else {
    clearInterval(interval)
    btn2.classList.add("false");
    btn5.style.display = "flex";
  }
};
const checkAnswer3 = () => {
  if (btn3.innerHTML == pitanja[index].correctAnswer) {
    changeN();
    h1.innerHTML = 20;
    counter = 20;
    h1.style.color = "white";
  } else {
    clearInterval(interval)
    btn3.classList.add("false");
    btn5.style.display = "flex";
  }
};
const checkAnswer4 = () => {
  if (btn4.innerHTML == pitanja[index].correctAnswer) {
    changeN();
    h1.innerHTML = 20;
    counter = 20;
    h1.style.color = "white";
  } else {
    clearInterval(interval)
    btn4.classList.add("false");
    btn5.style.display = "flex";
  }
};
const changeN = () => {
  index++;
  changeHTML();
  btn1.classList.remove("false");
  btn2.classList.remove("false");
  btn3.classList.remove("false");
  btn4.classList.remove("false");
};

const newGame = () => {
  h3.innerHTML = pitanja[0].title;
  h2.innerHTML = pitanja[0].questionNumber;
  btn1.innerHTML = pitanja[0].answers[0];
  btn2.innerHTML = pitanja[0].answers[1];
  btn3.innerHTML = pitanja[0].answers[2];
  btn4.innerHTML = pitanja[0].answers[3];
  btn5.style.display = "none";
  btn1.classList.remove("false");
  btn2.classList.remove("false");
  btn3.classList.remove("false");
  btn4.classList.remove("false");
  h1.innerHTML = 20;
  counter = 20;
  interval = setInterval(() => {
    counter--;
    h1.innerHTML = counter;
    if (counter === 0) {
      clearInterval(interval)
      btn5.style.display = "flex"
    }
    else if (counter === 5) {
        h1.style.color = "red";
    }
  }, 1000);
  h1.style.color = "white";
};
btn1.addEventListener("click", () => checkAnswer1());
btn2.addEventListener("click", () => checkAnswer2());
btn3.addEventListener("click", () => checkAnswer3());
btn4.addEventListener("click", () => checkAnswer4());
btn5.addEventListener("click", () => newGame());
