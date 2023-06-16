// Get references to the HTML elements
const localScoreElement = document.getElementById("localScore");
const sessionScoreElement = document.getElementById("sessionScore");
const incrementLocalButton = document.getElementById("incrementLocal");
const incrementSessionButton = document.getElementById("incrementSession");

// Check if local score exists in Local Storage and initialize it if not
let localScore = localStorage.getItem("localScore");
if (!localScore) {
  localStorage.setItem("localScore", "0");
} else {
  localScoreElement.textContent = localScore;
}

// Check if session score exists in Session Storage and initialize it if not
let sessionScore = sessionStorage.getItem("sessionScore");
if (!sessionScore) {
  sessionStorage.setItem("sessionScore", "0");
} else {
  sessionScoreElement.textContent = sessionScore;
}

// Event listener for incrementing local score
incrementLocalButton.addEventListener("click", () => {
  // Increment the local score
  localScore++;
  localScoreElement.textContent = localScore;

  // Update the local score in Local Storage
  localStorage.setItem("localScore", localScore.toString());
});

// Event listener for incrementing session score
incrementSessionButton.addEventListener("click", () => {
  // Increment the session score
  sessionScore++;
  sessionScoreElement.textContent = sessionScore;

  // Update the session score in Session Storage
  sessionStorage.setItem("sessionScore", sessionScore.toString());
});