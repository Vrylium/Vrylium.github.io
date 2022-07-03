const music = document.querySelector(".music");
fetch("music.html")
  .then((res) => res.text())
  .then((data) => {
    music.innerHTML = data;
  });

const philo = document.querySelector(".philo");
fetch("philos.html")
  .then((res) => res.text())
  .then((data) => {
    philo.innerHTML = data;
  });

const edc = document.querySelector(".edc");
fetch("edc.html")
  .then((res) => res.text())
  .then((data) => {
    edc.innerHTML = data;
  });

const interests = document.querySelector(".interests");
fetch("interests.html")
  .then((res) => res.text())
  .then((data) => {
    interests.innerHTML = data;
  });

const cars = document.querySelector(".cars");
fetch("cars.html")
  .then((res) => res.text())
  .then((data) => {
    cars.innerHTML = data;
  });
