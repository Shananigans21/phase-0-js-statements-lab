// Provided variables
const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// 1. Check the temperature
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

// 2. Check the time of day
if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

// 3. Increase soilMoisture to 40
while (soilMoisture < 40) {
  soilMoisture += 5;
  console.log(soilMoisture);
}

// Needed for testing
module.exports = {
  temperature,
  timeOfDay,
  soilMoisture
};
