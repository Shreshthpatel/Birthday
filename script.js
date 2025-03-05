document.addEventListener("DOMContentLoaded", function () {
    let tapToBegin = document.getElementById("tapToBegin");
    let mainContent = document.getElementById("mainContent");
    let message = document.getElementById("message");
    let nextButton1 = document.getElementById("next1");
    let cakeSection = document.getElementById("cakeSection");
    let nextButton2 = document.getElementById("next2");
    let audioSection = document.getElementById("audioSection");
    let bgMusic = document.getElementById("bgMusic");
    let messageAudio = document.getElementById("messageAudio");

    // Hide all sections except "Tap to Begin"
    mainContent.style.display = "none";
    cakeSection.style.display = "none";
    audioSection.style.display = "none";

    // Step 1: Tap to Begin
    tapToBegin.addEventListener("click", function () {
        tapToBegin.style.display = "none"; // Hide tap message
        mainContent.style.display = "block"; // Show first part
        bgMusic.play(); // Start background music
        typeWriterEffect("Happy Birthday Meri Jaan!", "message");
    });

    // Step 2: Show Cake Section on Clicking Next
    nextButton1.addEventListener("click", function () {
        mainContent.style.display = "none";
        cakeSection.style.display = "block";
    });

    // Step 3: Show Audio Section on Clicking Next
    nextButton2.addEventListener("click", function () {
        cakeSection.style.display = "none";
        audioSection.style.display = "block";
    });

    // Step 4: Stop Background Music and Play Message on Clicking Play
    document.getElementById("playMessage").addEventListener("click", function () {
        bgMusic.pause();
        bgMusic.currentTime = 0; // Reset music
        messageAudio.play();
    });
});

// Typewriter Effect Function
function typeWriterEffect(text, elementId, speed = 100) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear text before starting

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
