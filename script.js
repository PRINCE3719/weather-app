


function weather() {
    const city = document.getElementById("search").value;
    const apiKey = "6513a5f53d7f6c725815d0934af80e65";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    const city_name = document.getElementById("wee");
    const Temp = document.getElementById("temp");
    const des = document.getElementById("description");
    const h = document.getElementById("humidity");
    const s = document.getElementById("speed");
    const p = document.getElementById("cloud");
    const msg = document.getElementById("msg");

    fetch(url, { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
            console.log("d", data)
            city_name.innerText = `Weather in ${data.name}`;
            let T = ((data.main.temp - 32) * 5 / 9).toFixed(2);
            Temp.innerText = `${T}\u00B0 C`;
            des.innerText = `${data.weather[0].description}`;
            h.innerText = `Humidity : ${data.main.humidity}%`;
            s.innerText = `Speed : ${data.wind.speed} km/h`;
            if(data){
                p.style.display="block";
                msg.style.display = "none";
            }
            else{
                p.style.display="none";
                msg.style.display = "block";
            }
        })

}


