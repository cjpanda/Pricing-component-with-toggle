const toggleButton = document.getElementById("toggleButton");
const toggleBg = document.getElementById("toggleBg");
const priceTag1 = document.getElementById("priceTag1");
const priceTag2 = document.getElementById("priceTag2");
const priceTag3 = document.getElementById("priceTag3");

let isToggled = false;

toggleBg.addEventListener("click", function () {
  if (isToggled) {
    toggleButton.style.left = "0"; // Move to the left
    priceTag1.textContent = `$199.99`;
    priceTag2.textContent = `$249.99`;
    priceTag3.textContent = `$399.99`;
  } else {
    toggleButton.style.left = "35px"; // Move to the right
    priceTag1.textContent = `$19.99`;
    priceTag2.textContent = `$24.99`;
    priceTag3.textContent = `$39.99`;
  }
  isToggled = !isToggled; // Toggle the state
});
