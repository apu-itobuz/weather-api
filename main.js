function searchInput() {
  const inputLocation = document.getElementById("text").value;
  const apiKey = "0c80b2b56f1943ada19100744230103";
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputLocation}&aqi=no`;
  const locationText = document.querySelector(".location");
  const tempShow = document.querySelector(".temp");
  const conditionTitle = document.querySelector(".title");
  const sectionMain = document.getElementsByClassName("section-main")[0];

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const placeName = data.location.name;
      const temparature = data.current.temp_c;
      const condition = data.current.condition.text;
      const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
      locationText.innerText = placeName;
      tempShow.innerText = temparature;
      conditionTitle.innerText = condition;
      sectionMain.classList.remove("day", "night", "rainy");
      if (condition.toLowerCase().includes("sunny")) {
        sectionMain.classList.add("day");
      } else if (condition.toLowerCase().includes(["cloud", "Partly cloudy"])) {
        sectionMain.classList.add("night");
      } else sectionMain.classList.add("rainy");
    });
}
