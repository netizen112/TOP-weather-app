const apiKey = "ac32969a25604e7a878114301230710";

export default async function getData(location) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`,
        {
            mode: "cors",
        }
    );
    return response;
}
