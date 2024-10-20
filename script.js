function nextp() {
    window.location.href = 'quiz.html';
}

function cprog() {
    window.location.href = 'c.html';
}

function javaprog() {
    window.location.href = 'jaava.html'; 
}

// Function to create a star
function createStar() {
    const star = document.createElement('div'); // Create a star element
    star.classList.add('star'); // Add star class

    // Set random horizontal position and random falling duration
    star.style.left = `${Math.random() * 100}vw`; // Randomize x position
    const fallDuration = Math.random() * 3 + 2; // Duration between 2s and 5s
    star.style.animationDuration = `${fallDuration}s`; // Apply duration

    // Append the star to the stars container
    document.querySelector('.stars').appendChild(star);

    // Remove star after it falls
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// Create a star every 300 milliseconds
setInterval(createStar, 300);

// Optionally add a resize event to handle responsive adjustments
window.addEventListener('resize', () => {
    // Add any dynamic adjustments here if needed
});
