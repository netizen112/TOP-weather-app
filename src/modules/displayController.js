import getWeather from "./processWeather";

export default function initializeSearchBtn() {
    let btnSearch = document.getElementById("btnSearch");
    btnSearch.onclick = (event) => {
        event.preventDefault();
        let location = document.getElementById("search").value;
        startSearch(location);
    };
}

async function startSearch(city) {
    let weatherData = await getWeather(city);

    const divLocation = document.getElementById("divLocation");
    const locationName = document.createElement("p");
    locationName.id = "locationName";
    locationName.innerText = `${weatherData.location.name}, ${weatherData.location.countryName}`;
    divLocation.appendChild(locationName);
    // TODO: add time

    for (let i = 1; i < 4; i += 1) {
        let divId = `day${i}`;
        let divDay = document.getElementById(divId);

        let minTemp = document.createElement("p");
        minTemp.className = "minTemp";
        minTemp.innerText = `Min: ${weatherData[divId].minTemp} °C`;
        divDay.appendChild(minTemp);

        let maxTemp = document.createElement("p");
        minTemp.className = "maxTemp";
        maxTemp.innerText = `Max: ${weatherData[divId].maxTemp} °C`;
        divDay.appendChild(maxTemp);
    }
}
