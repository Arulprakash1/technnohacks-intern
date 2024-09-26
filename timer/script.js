let countdown;
let isRunning = false;

document.getElementById('startButton').addEventListener('click', function() {
    const timeInput = document.getElementById('timeInput').value;
    let timeLeft = parseInt(timeInput);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    if (isRunning) {
        clearInterval(countdown);
    }

    isRunning = true;
    document.getElementById('stopButton').disabled = false;

    document.getElementById('timerDisplay').textContent = formatTime(timeLeft);

    countdown = setInterval(() => {
        timeLeft--;
        document.getElementById('timerDisplay').textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert('Time is up!');
            isRunning = false;
            document.getElementById('stopButton').disabled = true;
        }
    }, 1000);
});

document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(countdown);
    isRunning = false;
    document.getElementById('stopButton').disabled = true;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
