// Start screen click event
document.getElementById('start-screen').addEventListener('click', function() {
    // Hide the start screen and show the main screen
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');

    // Start background music
    const bgMusic = document.getElementById('bg-music');
    bgMusic.play();

    // Change background to background.png
    document.querySelector('.background').style.backgroundImage = "url('assets/background.png')";

    // Typewriter effect for the birthday message
    const message = document.getElementById('birthday-message');
    const birthdayText = "Happy Birthday Meri Jaan";
    let index = 0;

    function typeWriter() {
        if (index < birthdayText.length) {
            message.innerHTML += birthdayText.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust typing speed here
        } else {
            // Fade in the photo after the message is fully typed
            setTimeout(() => {
                const photo = document.getElementById('photo');
                photo.classList.remove('hidden');
                photo.style.opacity = 1;
            }, 1000); // Delay before showing the photo
        }
    }

    typeWriter(); // Start the typewriter effect

    // Show the next button after the photo fades in
    setTimeout(() => {
        const nextButton = document.getElementById('next-button');
        nextButton.classList.remove('hidden');
    }, 4000); // Adjust timing as needed
});

// Next button click event
document.getElementById('next-button').addEventListener('click', function() {
    // Hide the main screen and show the cake screen
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('cake-screen').classList.remove('hidden');

    // Play the happy birthday music
    const hbdMusic = document.getElementById('hbd-music');
    hbdMusic.play();

    // Show the custom message and cute message button
    const customMessage = document.getElementById('custom-message');
    customMessage.classList.remove('hidden');

    const cuteMessageButton = document.getElementById('cute-message-button');
    cuteMessageButton.classList.remove('hidden');
});

// Cute message button click event
document.getElementById('cute-message-button').addEventListener('click', function() {
    // Stop the background music and play the final message
    const bgMusic = document.getElementById('bg-music');
    bgMusic.pause();

    const messageAudio = document.getElementById('message-audio');
    messageAudio.play();
});
