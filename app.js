const sections = document.querySelectorAll(".section");
const sectionBtn = document.querySelectorAll(".control");
const sectionBtns = document.querySelectorAll(".controlls");
const sectionsBody = document.querySelector(".main-content");
const jokeButton = document.querySelector(".joke-container button");
const jokeText = document.querySelector(".joke-container p");

document.addEventListener("DOMContentLoaded", getJoke);
jokeButton.addEventListener("click", getJoke);

function PageTransition() {
  //Button click active class
  for (let i = 0; i < sectionBtn.length; i++) {
    sectionBtn[i].addEventListener("click", function () {
      // Remove active class from the currently active button
      document.querySelector(".active-btn").classList.remove("active-btn");

      // Add active class to the clicked button
      this.classList.add("active-btn");
    });
  }
  //Sections Active Class
  sectionsBody.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //Remove selected from other buttons
      sectionBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //Hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

//Toggle button
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("light-mode");
});

//API Call
function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((data) => data.json())
    .then((obj) => (jokeText.innerHTML = obj.joke));
}

PageTransition();
