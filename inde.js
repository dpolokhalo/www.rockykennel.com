<!DOCTYPE html>
<html>
<head>
    <title>Countdown Timer</title>
</head>
<body>
    <h1 id="timer"></h1>
    <script>
        function countdownTimer(seconds) {
            let timerElement = document.getElementById('timer');
            let interval = setInterval(function() {
                if (seconds <= 0) {
                    clearInterval(interval);
                    timerElement.textContent = 'Time\'s up!';
                    return;
                }
                timerElement.textContent = seconds + ' seconds remaining';
                seconds--;
            }, 1000);
        }

        countdownTimer(30); // Start a 30-second countdown
    </script>
</body>
</html>