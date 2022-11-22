const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const pitanja = [{
    title: "Ko je osvojio svjetsko prvenstvo u fudbalu 2014?",
    questionNumber: "Prvo pitanje:",
    answers: ["Hrvatska", "Brazil", "Njemačka", "Francuska"],
    correctAnswer: ["Njemačka"],
},
{
    title: "Kako se zove najpoznatija pjesma The Weeknda?",
    questionNumber: "Drugo pitanje:",
    answers: ["Reminder", "Blinding Lights", "Starboy", "Call Out My Name"],
    correctAnswer: ["Blinding Lights"],
},
{
    title: "Koji je najveći čovjekov organ?",
    questionNumber: "Treće pitanje:",
    answers: ["Srce", "Koža", "Bubreg", "Jetra"],
    correctAnswer: ["Koža"],
}]
changeHTML = () => {
    h3.innerHTML = pitanja[2].title;
    h2.innerHTML = pitanja[2].questionNumber;
    btn1.textContent = pitanja[2].answers[0];
    btn2.textContent = pitanja[2].answers[1];
    btn3.textContent = pitanja[2].answers[2];
    btn4.textContent = pitanja[2].answers[3];
}
changeHTML()