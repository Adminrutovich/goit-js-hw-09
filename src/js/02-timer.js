import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector(`.js-start`);
const days = document.querySelector(`.js-days`);
const hours = document.querySelector(`.js-hours`);
const minutes = document.querySelector(`.js-minutes`);
const seconds = document.querySelector(`.js-seconds`);
const timerHtml = document.querySelector('.timer');
const calendarInput = document.querySelector('#datetime-picker');
startBtn.disabled = true;
let intervalId = null;


startBtn.addEventListener(`click`, startTimer);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
        window.alert("Please choose a date in the future");
        startBtn.disabled = true;
      } else {
        startBtn.disabled = false;
      }
    },
  };

flatpickr(calendarInput, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

function startTimer(){
    let timer = setInterval(()=>{
        let countDown = new Date(calendarInput.value) - new Date();
        startBtn.disabled = true;
        console.log(countDown);
        if (countDown >= 0) {
            let timeObject = convertMs(countDown);
            days.textContent = addLeadingZero(timeObject.days);
            hours.textContent = addLeadingZero(timeObject.hours);
            minutes.textContent = addLeadingZero(timeObject.minutes);
            seconds.textContent = addLeadingZero(timeObject.seconds);
            if (countDown <= 60000) {
              timerHtml.style.color = 'tomato';
              timerHtml.style.fontWeight = "700";
            }
        } else {
            timerHtml.style.color = 'black';
            clearInterval(timer);
            }
    
    },1000)
};


