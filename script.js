console.log("Portfolio website loaded!");

const projects = document.querySelectorAll(".project-card");

projects.forEach((project) => {
  project.addEventListener("click", () => {
    console.log("Project clicked:", project.querySelector("h3").textContent);
  });
});
