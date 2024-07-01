function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date("2024-09-01T00:00:00");
    const now = new Date();
    const timeDifference = targetDate - now;
  
    if (timeDifference < 0) {
      countdownElement.innerHTML = "The date has passed!";
      return;
    }
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    countdownElement.innerHTML = `${days}д ${hours}г ${minutes}хв ${seconds}с`;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();