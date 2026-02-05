function getWeather(){
    let city = document.getElementById("cityInput").value.trim();
    let output = document.getElementById("weatherOutput");
    if(city===""){
        output.innerText = "Please enter a city name";
        output.style.color = "red";
        return;
    }
    output.innerText = "Fetching Weather";
    let apiKey = "ce4b286fc3583a0871cd0682264bbed7";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        if(data.cod===404){
            output.innerText = "City not found";
            output.style.color = "red";
            return;
        }
        output.innerText = `${data.name}\n
        ${data.main.temp}
        ${data.weather[0].main}`;
        output.style.color = "white";
    })
    .catch(()=>{
        output.innerText = "Error fetching weather";
        output.style.color = "red";
    });
}
function searchMovie(){
    let movie = document.getElementById("movie").value;
    let output = document.getElementById("movieOutput");
    if(movie===""){
        output.innerText = "Please enter a movie name";
        output.style.color = "red";
        return;
    }
    output.innerText = "Loading Movie";
    output.style.color = "pink";
    let apiKey = "217430e3";
    let url = `https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        if(data.Response==="False"){
            output.innerText = "Movie not found";
            output.style.color = "red";
            return;
        }
        output.innerHTML =  `<h3>${data.Title} (${data.Year})</h3>
                <img src="${data.Poster}" width="240">
                <p><b>IMDB:</b> ${data.imdbRating}</p>
                <p>${data.Plot}</p>`;
                output.style.color = "beige";
    })
    .catch(()=>{
        output.innerText = "Error fecthing movie";
        output.style.color = "red";
    });
}
function updateClock(){
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById("clock").innerText = time;
}
setInterval(updateClock,1000);
updateClock();