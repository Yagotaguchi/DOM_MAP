///https://api.adviceslip.com/advice
const API_URL = 'https://api.adviceslip.com/advice';

let count = 0;

const askForAdvice = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    const slip = data.slip;
    const advice = slip.advice;
    const shortAdivice = document.getElementById("advice");
    shortAdivice.innerText = `"${advice}"`;


    count++;
    document.querySelector(".advices-counter").innerHTML = `<b>${count}</b>`;
    document.querySelector(".advices-counter").style.color = "red";

};

askForAdvice();

document.getElementById("btn-unic").addEventListener("click", askForAdvice);

