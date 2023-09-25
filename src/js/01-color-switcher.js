
const startBtn = document.querySelector(`.data-start`);
const stopBtn = document.querySelector(`.data-stop`);
stopBtn.disabled = true;
let intervalId = null;


startBtn.addEventListener(`click`, changeBackgraundColor);
stopBtn.addEventListener(`click`, stopChangeBackgraundColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };


function changeBackgraundColor(){
    startBtn.disabled = true;
    stopBtn.disabled = false;

    intervalId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
      }, 1000);
};

function stopChangeBackgraundColor(){
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
};
