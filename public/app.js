let maxTime = 30;
let countdownOn = false;
let interval;

let timerCircle = document.getElementById("timer-circle");
let photo = document.getElementById("photo");

// Decrements the timer when called by `interval` (in variable and on screen)
// Also checks whether the timer is out, and resets it if so
function updateTime() {
    if (time === 0) {
        clearInterval(interval);
        countdownOn = false;
        timerCircle.innerHTML = ""; // clear the numbers from the circle
        const btn = document.createElement("button"); // create button
        btn.id = "start-btn";
        btn.innerText = "start";
        timerCircle.appendChild(btn); // insert button into circle
    } else {
        time -= 1;
        timerCircle.innerHTML = time;
    }
}

// Gets new image and starts the timer by creating an Interval
function startTimer() {
    // photo refresh code from https://stackoverflow.com/questions/1077041/refresh-image-with-a-new-one-at-the-same-url
    photo.src = "https://picsum.photos/500?t=" + new Date().getTime();
    time = maxTime;
    timerCircle.innerHTML = time;
    interval = setInterval(updateTime, 1000); //updates every 1 second
}

// Calls startTimer when circle is clicked
timerCircle.addEventListener("click", function () {
    if (!countdownOn) {
        countdownOn = true;
        startTimer();
    }
})