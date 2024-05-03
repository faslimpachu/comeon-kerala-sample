document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});


// count down

document.addEventListener("DOMContentLoaded", function() {
    // Set the date to count down to
    const countDownDate = new Date("May 12, 2024 00:00:00").getTime();
  
    // Update the countdown every 1 second
    const countdownInterval = setInterval(function() {
      // Get the current date and time
      const now = new Date().getTime();
      
      // Calculate the remaining time
      const distance = countDownDate - now;
      
      // Calculate days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Display the countdown
      document.getElementById("days-value").textContent = days.toString().padStart(2, '0');
      document.getElementById("hours-value").textContent = hours.toString().padStart(2, '0');
      document.getElementById("minutes-value").textContent = minutes.toString().padStart(2, '0');
      document.getElementById("seconds-value").textContent = seconds.toString().padStart(2, '0');
      
      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  });


// crad function

function toggleLoginForm() {
    var modal = document.getElementById("loginModal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  }