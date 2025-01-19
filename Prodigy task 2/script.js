// Select elements
const timeDisplay = document.getElementById('time-display');
const startStopBtn = document.getElementById('start-stop-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const lapList = document.getElementById('lap-list');

let timerInterval;
let isRunning = false;
let time = 0; // Time in seconds
let laps = [];

// Start or Stop the timer
startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Start';
    } else {
        timerInterval = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

// Reset the timer
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    time = 0;
    laps = [];
    timeDisplay.textContent = formatTime(time);
    lapList.innerHTML = '';
    startStopBtn.textContent = 'Start';
});

// Record a lap time
lapBtn.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = formatTime(time);
        laps.push(lapTime);
        const li = document.createElement('li');
        li.textContent = `Lap ${laps.length}: ${lapTime}`;
        lapList.appendChild(li);
    }
});

// Update the stopwatch display
function updateTime() {
    time++;
    timeDisplay.textContent = formatTime(time);
}

// Format time into MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${pad(minutes)}:${pad(remainingSeconds)}`;
}

// Pad single-digit numbers with a leading zero
function pad(number) {
    return number < 10 ? `0${number}` : number;
}

