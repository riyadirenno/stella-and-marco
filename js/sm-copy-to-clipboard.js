function copyToClipboard(text) {
  const tempElement = document.createElement("textarea");
  tempElement.value = text;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand("copy");
  document.body.removeChild(tempElement);
}

// Function to show and hide the message element
function showMessage(element, message, duration) {
  element.textContent = message;
  element.style.display = "block";
  setTimeout(() => {
    element.style.display = "none";
  }, duration);
}

// Add click event listeners to the buttons
const copyMarcoButton = document.getElementById("copyMarcoButton");
const copyStellaButton = document.getElementById("copyStellaButton");

copyMarcoButton.addEventListener("click", function () {
  const marcoText = document.getElementById("sm-marco").textContent;
  copyToClipboard(marcoText);
  showMessage(
    document.getElementById("marcoMessage"),
    "Account number copied!",
    5000
  );
});

copyStellaButton.addEventListener("click", function () {
  const stellaText = document.getElementById("sm-stella").textContent;
  copyToClipboard(stellaText);
  showMessage(
    document.getElementById("stellaMessage"),
    "Account number copied!",
    5000
  );
});
