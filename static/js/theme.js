// the theme class is set inline in head.html before first paint.
// this file only wires up the toggle, which needs the DOM to exist.

const handleToggleClick = () => {
  const element = document.documentElement;
  element.classList.toggle("dark");

  const isDark = element.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

if (document.documentElement.classList.contains("dark")) {
  document.querySelector("#theme-toggle input").checked = true;
}

document
  .getElementById("theme-toggle")
  .addEventListener("click", handleToggleClick);
