const button10s = document.getElementById("button-10s");
const button15s = document.getElementById("button-15s");
const button30s = document.getElementById("button-30s");
const clickButton = document.getElementById("click-button");
let timeLeft;
let clickCount = 0;
let clickCountDisplay = document.getElementById("click-count");
let countdown = false; // Declare a variable to hold the interval
const timerDisplay = document.getElementById("timer");
const modal = document.getElementById("modal");
const score = document.getElementById("score");
const closeButton = document.getElementById("close");
const closeButton2 = document.getElementById("close2");
const modal2 = document.getElementById("modal2");
function startCountdown(time) {
  if (countdown) {
    clearInterval(countdown); // Clear the previous interval
  }

  timeLeft = time;
  countdown = setInterval(() => {
    if (timeLeft > 0) {
      timerDisplay.textContent = `Time: ${timeLeft}s`; // Display the time
      timeLeft--; // Decrease the time by 1 second
    } else {
      clearInterval(countdown); // Stop the countdown
      timerDisplay.textContent = "Time's Up!"; // Display "Time's Up!" first
      setTimeout(() => {
        score.innerHTML = `Your score is <span style="color: rgb(78, 176, 241); font-weight: bold;">${clickCount}</span>`;
        modal.style.display = "block";
        clickCount = 0;
        clickCountDisplay.textContent = clickCount;
        timerDisplay.textContent = "Time:";
        countdown = false;
      }, 500); // Add a small delay before showing the alert
    }
  }, 1000); // Run every 1000 milliseconds (1 second)
}

button10s.addEventListener("click", () => {
  startCountdown(10);
  clickCount = 0;
  clickCountDisplay.textContent = clickCount;
});

button15s.addEventListener("click", () => {
  startCountdown(15);
  clickCount = 0;
  clickCountDisplay.textContent = clickCount;
});

button30s.addEventListener("click", () => {
  startCountdown(30);
  clickCount = 0;
  clickCountDisplay.textContent = clickCount;
});

function click() {
  if (!countdown) {
    modal2.style.display = "block";
  } else {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
  }
}

clickButton.addEventListener("click", () => {
  click();
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  score = 0;
  clickCount = 0;
  clickCountDisplay.textContent = clickCount;
  timerDisplay.textContent = "Time:";
  countdown = false;
});

closeButton2.addEventListener("click", () => {
  modal2.style.display = "none";
});
