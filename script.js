const button = document.querySelector("#test-button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  result.textContent = "Success! JavaScript is working on this page.";
  button.textContent = "JavaScript works ✓";
});
