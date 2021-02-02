import DOM from './DOM.js';

const elements = DOM();

const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

let time = new Date();

function updateClock() {
    const time = new Date();
    // time = new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), time.getMinutes() + 5)
    const hours = (time.getHours() + 11) % 12 + 1
    const minutes = time.getMinutes();
    elements.am.classList.toggle('active', time.getHours() < 12);
    elements.pm.classList.toggle('active', time.getHours() >= 12);
    elements.time.innerText = `${hours}:${("" + minutes).padStart(2, '0')}`;
    elements.day.innerText = DAYS[time.getDay()];
    elements.date.innerText = `${time.getDate()} ${MONTHS[time.getMonth()]} ${time.getFullYear()}`
}

const clockInterval = setInterval(()=>{
    updateClock();
}, 1000)

updateClock();