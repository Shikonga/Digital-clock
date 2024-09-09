// Date object : new Date() for hours , minutes and seconds and day and yearS
// setInterval - updating time
// adding zero for numbers less than 10
// DOM manipuliation- documem=nt.getElementById


/* const currentDate = document.getElementById('currentDate');
const currentMonth = document.getElementById('currentMonth');
const currentYear = document.getElementById('currentYear'); */



function updateClock() {
const d = new Date();
let day = d.getDate();
let month = d.toLocaleString('default',{month:'long'})
let year = d.getFullYear();
let hour = d.getHours();
let mins = d.getMinutes();
let secs = d.getSeconds();


let min = mins < 10 ? "0" + mins : mins;
let sec = secs < 10 ? "0" + secs : secs;
let period = hour >= 12 ? 'PM' : 'AM';
hour = hour % 12 || 12;
let hrs = hour < 10 ? "0" + hour : hour; 

document.getElementById('period').innerHTML = period;

document.getElementsByTagName('h1')[0].innerHTML = `${day} ${month} ${year}`;
document.getElementById('currentHour').innerHTML = `${hrs}`;  
document.getElementById('currentMins').innerHTML = `${min}`;
document.getElementById('currentSecs').innerHTML = `${sec}`;
}

setInterval(updateClock, 1000);
updateClock();

setInterval(function() {
    const colon = document.getElementById('colon');
    colon.style.visibility = (colon.style.visibility === 'hidden') ? 'visible' : 'hidden';
}, 1000);










