const btnToggle = document.querySelector(".sm-gifts-toggle");
const giftsHide = document.querySelector(".sm-gifts-hide");

// Add a click event listener to the button
btnToggle.addEventListener("click", function () {
  // Toggle the visibility of the element
  giftsHide.classList.toggle("hidden");
});
