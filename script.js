


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
    const err = document.getElementById("error");

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




document.addEventListener("DOMContentLoaded", function () {

const arr = "https://restcountries.com/v3.1/all?fields=name";

const Search = document.getElementById("search");
const filteredList = document.getElementById("filteredList");
let list;
let country_array = [];

Search.addEventListener("keyup", filterRest);

function filterRest() {

        const new_value = Search.value.toLowerCase();
        const filtered_arr = country_array.filter((item) => item.toLowerCase().includes(new_value));

        filteredList.innerHTML ="";

        if (!new_value.trim()) {
            filteredList.style.display = "none";
            return;
        }
        


        for(const d of filtered_arr){
            list = document.createElement("li");
            list.textContent = d;
            list.addEventListener("click",() =>{
                Search.value = d;
                filteredList.style.display = "none";
                filteredList.innerHTML = "";
            });
            filteredList.appendChild(list);
        }
        if(list == ""){
            filteredList.style.display = "none";
        }else{
             filteredList.style.display = "block";
        }
        
        

}
window.onload = function(){
    fetch(arr, { method: "GET" })
    .then((res) => res.json())
    .then((country) => {
        country.map((c) => {
            const loop = c.name.common;
            country_array.push(loop);
        })
    });
}

});

