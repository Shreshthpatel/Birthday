document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');

    // Start background music
    const bgMusic = document.getElementById('bg-music');
    bgMusic.play();

    // Fade in the
