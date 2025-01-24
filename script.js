let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let clickCount = 0; // Tıklama sayısını tutmak için

const timerDisplay = document.getElementById('timer');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 10);
        running = true;
    } else {
        clearInterval(tInterval);
        running = false;
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);

    timerDisplay.innerHTML = `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

function pad(number) {
    return number < 10 ? "0" + number : number;
}

// Body'ye tıklama olayını ekleyelim
document.body.addEventListener('click', function(event) {
    // Tıklama sayısını artır
    clickCount++;

    // Üçüncü tıklamada süreyi sıfırla
    if (clickCount === 3) {
        clearInterval(tInterval);
        running = false;
        timerDisplay.innerHTML = "00:00.00";
        clickCount = 0; // Tıklama sayısını sıfırla
    } else {
        // İlk iki tıklamada süre başlat veya durdur
        startTimer();
    }
});
