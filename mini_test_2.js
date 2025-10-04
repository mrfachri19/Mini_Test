const https = require("https");

const API_KEY = "e9f0056d6585e8dc2808ed1354f3d43e";
const CITY = "Jakarta";

function getWeatherForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`;

  https
    .get(url, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        const json = JSON.parse(data);
        if (!json.list) {
          console.error("Error", json);
          return;
        }

        console.log("Weather Forecast:");

        const dailyData = json.list.filter((_, index) => index % 8 === 0);

        dailyData.slice(0, 5).forEach((item) => {
          const date = new Date(item.dt * 1000);
          const day = date.toLocaleDateString("en-GB", { weekday: "short" });
          const formattedDate = date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
          const temp = item.main.temp.toFixed(2);

          console.log(`${day}, ${formattedDate}: ${temp}°C`);
        });
      });
    })
    .on("error", (err) => {
      console.error("Error:", err.message);
    });
}

getWeatherForecast();
