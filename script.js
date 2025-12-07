// HERO SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}
setInterval(changeSlide, 3000);

// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.style.right = mobileMenu.style.right === "0px" ? "-50%" : "0px";
});


// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Toggle max-height for slide effect
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null; // Collapse
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px"; // Expand
    }
  });
});


const apiKey = "72e4451b862ca94d366bb7db748994eb"; 
const getWeatherBtn = document.getElementById("get-weather");
const cityInput = document.getElementById("city-input");

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) return alert("Please enter a city name!");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        alert("City not found!");
        return;
      }

      document.getElementById("city-name").textContent = data.name;
      document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
      document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      document.getElementById("weather-info").style.display = "block";
    })
    .catch(err => alert("Error fetching weather data!"));
});
