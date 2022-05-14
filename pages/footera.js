const footera = document.querySelector(".footera");
fetch("footera.html")
  .then((res) => res.text())
  .then((data) => {
    footera.innerHTML = data;
  });
