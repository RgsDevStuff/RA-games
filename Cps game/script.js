let score = 0;
let timeLeft = 10;
let timerInterval;

function handleClick() {
    score++;
    document.getElementById('score').innerText = 'Score: ' + score;
}

function startGame() {
    score = 0;
    timeLeft = 10;
    document.getElementById('score').innerText = 'Score: ' + score;
    document.getElementById('timer').innerText = 'Time left: ' + timeLeft + 's';
    document.getElementById('click-button').disabled = false;
    document.getElementById('start-button').disabled = true;
    document.getElementById('end-message').classList.add('hidden');
    
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = 'Time left: ' + timeLeft + 's';
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('click-button').disabled = true;
            document.getElementById('start-button').disabled = false;
            document.getElementById('end-message').innerText = `Time's up! Your final score is: ${score}`;
            document.getElementById('end-message').classList.remove('hidden');
        }
    }, 1000);
}
