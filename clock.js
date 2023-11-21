//Creating a ticking time

//inputting the dates
const currentDate = new Date();

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//the arrays    
const dayOfWeek = dayNames[currentDate.getDay()];
const month = monthNames[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

// Create the full date string
const fullDate = `${dayOfWeek}, ${month} ${day}, ${year}`;

// Outputting the results for the element with the id 'fullDate'
document.getElementById('fullDate').textContent = fullDate;

// Creating the time
function clock () {
const now = new Date();

let hours = now.getHours();
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = (hours % 12 || 12).toString().padStart(2, '0'); 

const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');

const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

const clockElement = document.getElementById('clock');
clockElement.innerHTML = timeString;
}
setInterval(clock, 1000);
clock();





