/*
function updateClock() {

    timer.innerHTML =
        now = new Date(); 
        tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 9, 30);
        timeDiff = tomorrow - now;
  
        console.log("clock updated");
  }

function setTimeout() {
    timeDiff -= 1000; 
    if (timeDiff > 0) {
      const seconds = Math.floor((timeDiff / 1000) % 60);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      
      console.log(`Countdown: ${hours}:${minutes}:${seconds}`);

      timer.innerHTML = hours + ":" + minutes + ":" + seconds;

    } else {
      console.log("Countdown terminato!");
      clearInterval(interval);
    }

    

  }
  
  const interval = setInterval(updateCountdown, 1000); 
*/

function updateCountdown() {
    const now = new Date(); // Data corrente
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 0); // Domani alle 9:30
    let timeDiff = tomorrow - now; // Differenza in millisecondi
  
    const timer = document.getElementById("timer");

    if (timeDiff > 0) {
      const seconds = Math.floor((timeDiff / 1000) % 60);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      
      console.log(`Countdown: ${hours}:${minutes}:${seconds}`);
  
      timer.innerHTML = hours + ":" + minutes + ":" + seconds;
    } else {
      console.log("Countdown terminato!");
      clearInterval(interval);
    }
  }
  
  const interval = setInterval(updateCountdown, 1000); // Esegue updateCountdown ogni secondo
  
  
  