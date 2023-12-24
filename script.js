let startTime;
let isRunning = false;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    startTime = new Date().getTime();
    updateStopwatch();
  }
}

function stopStopwatch() {
  isRunning = false;
}

function resetStopwatch() {
  stopStopwatch();
  document.getElementById('stopwatch').textContent = '00:00:00';
}

function updateStopwatch() {
  if (isRunning) {
    const currentTime = new Date().getTime();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = padNumber(elapsedTime.getUTCHours());
    const minutes = padNumber(elapsedTime.getUTCMinutes());
    const seconds = padNumber(elapsedTime.getUTCSeconds());

    document.getElementById('stopwatch').textContent = `${hours}:${minutes}:${seconds}`;

    requestAnimationFrame(updateStopwatch);
  }
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}
