const pannels = document.querySelectorAll(".pannel");

pannels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.classList.contains("active")) {
      removeActiveClasses();
    } else {
      removeActiveClasses();
      panel.classList.add("active");
    }
  });
});

function removeActiveClasses() {
  pannels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
