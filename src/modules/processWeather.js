import getData from "./weatherAPI";

export default async function getWeather(location) {
    const data = await getData(location);

    const response = await data.json();

    return {
        location: {
            countryName: response.location.country,
            name: response.location.name,
            time: response.location.localtime_epoch,
        },
        day1: {
            minTemp: response.forecast.forecastday[0].day.mintemp_c,
            maxTemp: response.forecast.forecastday[0].day.maxtemp_c,
            icon: response.forecast.forecastday[0].day.condition.icon,
            description: response.forecast.forecastday[0].day.condition.text,
        },
        day2: {
            minTemp: response.forecast.forecastday[1].day.mintemp_c,
            maxTemp: response.forecast.forecastday[1].day.maxtemp_c,
            icon: response.forecast.forecastday[1].day.condition.icon,
            description: response.forecast.forecastday[1].day.condition.text,
        },
        day3: {
            minTemp: response.forecast.forecastday[2].day.mintemp_c,
            maxTemp: response.forecast.forecastday[2].day.maxtemp_c,
            icon: response.forecast.forecastday[2].day.condition.icon,
            description: response.forecast.forecastday[2].day.condition.text,
        },
    };
}
