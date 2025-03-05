document.getElementById('start-screen').addEventListener('click', function() {
    // Hide the start screen and show the main screen
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');

    // Start background music
    const bgMusic = document.getElementById('bg-music');
    bgMusic.play();

    // Fade in the birthday message after a short delay
    setTimeout(() => {
        const message = document.getElementById('birthday-message');
        message.classList.remove('hidden');
        message.style.opacity = 1;
    }, 1000);

    // Fade in the photo after the birthday message
    setTimeout(() => {
        const photo = document.getElementById('photo');
        photo.classList.remove('hidden');
        photo.style.opacity = 1;
    }, 3000);

    // Show the next button after the photo fades in
    setTimeout(() => {
        const nextButton = document.getElementById('next-button');
        nextButton.classList.remove('hidden');
    }, 4000);
});

document.getElementById('next-button').addEventListener('click', function() {
    // Hide the main screen and show the cake screen
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('cake-screen').classList.remove('hidden');

    // Optionally, you can play the happy birthday music here
    const hbdMusic = document.getElementById('hbd-music');
    hbdMusic.play();

    // Show the custom message and cute message button
    const customMessage = document.getElementById('custom-message');
    customMessage.classList.remove('hidden');

    const cuteMessageButton = document.getElementById('cute-message-button');
    cuteMessageButton.classList.remove('hidden');
});

document.getElementById('cute-message-button').addEventListener('click', function() {
    // Stop the background music and play the final message
    const bgMusic = document.getElementById('bg-music');
    bgMusic.pause();

    const messageAudio = document.getElementById('message-audio');
    messageAudio.play();
});
