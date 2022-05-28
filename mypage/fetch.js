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
