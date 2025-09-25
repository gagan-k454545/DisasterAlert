export const indianWeatherData = {
  mangaluru: {
    location: {
      name: "Mangaluru, Karnataka",
      lat: 12.9141,
      lon: 74.856,
    },
    temperature: "29°C",
    feelsLike: "32°C",
    condition: "Heavy Monsoon Rain",
    precipitation: "35mm",
    humidity: "85%",
    wind: "18km/h SW",
    pressure: "1008 hPa",
    forecast: [
      { day: "Today", temp: "29°C", condition: "Heavy Rain", precipitation: "85%", humidity: "92%" },
      { day: "Tomorrow", temp: "28°C", condition: "Thunderstorms", precipitation: "75%", humidity: "88%" },
      { day: "Wednesday", temp: "30°C", condition: "Scattered Showers", precipitation: "60%", humidity: "85%" },
      { day: "Thursday", temp: "27°C", condition: "Heavy Rain", precipitation: "90%", humidity: "95%" },
      { day: "Friday", temp: "29°C", condition: "Light Rain", precipitation: "50%", humidity: "80%" },
    ],
    alerts: [
      {
        title: "Heavy Rainfall Warning",
        description:
          "Heavy rainfall expected in coastal Karnataka over the next 48 hours. Potential for flash flooding in low-lying areas.",
        severity: "High",
        issuedTime: new Date(new Date().getTime() - 2 * 60 * 60 * 1000),
      },
      {
        title: "Thunderstorm Alert",
        description: "Severe thunderstorms with lightning expected in Mangaluru and surrounding areas.",
        severity: "Moderate",
        issuedTime: new Date(new Date().getTime() - 5 * 60 * 60 * 1000),
      },
    ],
  },
  bangalore: {
    location: {
      name: "Bangalore, Karnataka",
      lat: 12.9716,
      lon: 77.5946,
    },
    temperature: "24°C",
    feelsLike: "26°C",
    condition: "Light Rain",
    precipitation: "15mm",
    humidity: "70%",
    wind: "12km/h NE",
    pressure: "1010 hPa",
    forecast: [
      { day: "Today", temp: "24°C", condition: "Light Rain", precipitation: "40%", humidity: "70%" },
      { day: "Tomorrow", temp: "25°C", condition: "Partly Cloudy", precipitation: "20%", humidity: "65%" },
      { day: "Wednesday", temp: "26°C", condition: "Mostly Sunny", precipitation: "10%", humidity: "60%" },
      { day: "Thursday", temp: "25°C", condition: "Scattered Showers", precipitation: "30%", humidity: "68%" },
      { day: "Friday", temp: "24°C", condition: "Light Rain", precipitation: "45%", humidity: "72%" },
    ],
    alerts: [],
  },
  mumbai: {
    location: {
      name: "Mumbai, Maharashtra",
      lat: 19.076,
      lon: 72.8777,
    },
    temperature: "31°C",
    feelsLike: "34°C",
    condition: "Thunderstorms",
    precipitation: "25mm",
    humidity: "78%",
    wind: "22km/h SW",
    pressure: "1005 hPa",
    forecast: [
      { day: "Today", temp: "31°C", condition: "Thunderstorms", precipitation: "65%", humidity: "78%" },
      { day: "Tomorrow", temp: "30°C", condition: "Heavy Rain", precipitation: "80%", humidity: "82%" },
      { day: "Wednesday", temp: "29°C", condition: "Thunderstorms", precipitation: "70%", humidity: "80%" },
      { day: "Thursday", temp: "30°C", condition: "Scattered Showers", precipitation: "50%", humidity: "75%" },
      { day: "Friday", temp: "31°C", condition: "Partly Cloudy", precipitation: "30%", humidity: "72%" },
    ],
    alerts: [
      {
        title: "Coastal Flooding Alert",
        description: "High tides combined with heavy rainfall may cause coastal flooding in low-lying areas of Mumbai.",
        severity: "High",
        issuedTime: new Date(new Date().getTime() - 3 * 60 * 60 * 1000),
      },
    ],
  },
}
