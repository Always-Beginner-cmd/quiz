// Get the final score from localStorage and display it
const finalScore = localStorage.getItem('finalScore');
if (finalScore) {
    document.getElementById('finalScore').textContent = finalScore;
}

// Event listener for the button to trigger confetti
document.getElementById('popBtn').addEventListener('click', function() {
    const confettiContainer = document.getElementById('confetti-container');
    createConfetti(confettiContainer, 100); // Create 100 confetti pieces
});
function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    createConfetti(confettiContainer, 100); // Create 100 confetti pieces
}


// Function to create confetti
function createConfetti(container, numberOfPieces) {
    container.innerHTML = ''; // Clear any previous confetti
    for (let i = 0; i < numberOfPieces; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti'); // Add confetti class for styling
        
        // Randomize the confetti colors
        const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Randomize positions and animation directions
        confetti.style.setProperty('--random-x', Math.random() * 2 - 1); // Randomize x-axis movement
        confetti.style.setProperty('--random-y', Math.random() * 2);     // Randomize y-axis movement
        
        // Set random starting position within the container
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        
        container.appendChild(confetti); // Append confetti to the container

        // Remove the confetti after animation ends (2 seconds)
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}
