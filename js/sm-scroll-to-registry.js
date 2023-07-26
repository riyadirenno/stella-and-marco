function scrollToRegistrySection() {
  const registrySection = document.getElementById("sm-registry");
  registrySection.scrollIntoView({ behavior: "smooth" });
}

// Add click event listener to the sm-textlink element
const textLink = document.querySelector(".sm-textlink");
textLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior (scrolling to the anchor)
  scrollToRegistrySection();
});
