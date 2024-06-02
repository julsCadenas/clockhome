function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = h % 12;
    h = h ? h : 12; 
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    
    let day = today.getDay()
    let date = today.getDate()
    let year = today.getFullYear()
    let month = today.getMonth()

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById('day').innerHTML = days[day] + ", ";
    document.getElementById('date').innerHTML = months[month] + " " + date + ", " + year;

    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

const apiKey = "put your api key here";
const city = "Marikina";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const location = data.name;
        const temperature = (data.main.temp - 273.15).toFixed(0);
        const feelsLike = (data.main.feels_like - 273.15).toFixed(0);
        const weatherDescription = data.weather[0].description;

        document.getElementById('city').innerHTML = `${location}`;
        document.getElementById('weather').innerHTML = `${weatherDescription}`;
        document.getElementById('temp').innerHTML = `${temperature}°C`;
        document.getElementById('feels').innerHTML = `${feelsLike}°C`;
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });

const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('sidebarBtn');
    
menuBtn.addEventListener('click', function() {
    if (sidebar.style.right === '0px') {  
        sidebar.style.right = '-230px';
        sidebarBtn.style.right = "0px";
    } else {
        sidebar.style.right = '0px';
        sidebarBtn.style.right = "230px";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    startTime();
});