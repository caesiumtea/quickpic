let maxTime = 30;
let countdownOn = false;
let interval;

let timerCircle = document.getElementById("timer-circle");
let photo = document.getElementById("photo");
// function endTimer() {
//     countdownOn = false;
//     console.log("done")
//     timerCircle.innerText = "start";
// }

function updateTime() {
    if (time === 0) {
        clearInterval(interval);
        countdownOn = false;
        console.log("done")
        timerCircle.innerText = "start";
    } else {
        time -= 1;
        timerCircle.innerText = time;
    }
    // console.log(time);
}

function startTimer() {
    // photo refresh code from https://stackoverflow.com/questions/1077041/refresh-image-with-a-new-one-at-the-same-url
    photo.src = "https://picsum.photos/500?t=" + new Date().getTime();
    time = maxTime;
    timerCircle.innerHTML = time;
    interval = setInterval(updateTime, 1000);
}



timerCircle.addEventListener("click", function () {
    if (!countdownOn) {
        countdownOn = true;
        startTimer();
    }
})