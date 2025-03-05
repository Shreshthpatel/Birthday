function startExperience() {
    document.getElementById("black-screen").style.opacity = "0";
    
    setTimeout(() => {
        document.getElementById("black-screen").style.display = "none";
        document.body.classList.add("bg-active");  // 🌟 Apply background image
        document.getElementById("main-content").style.display = "block";
        document.getElementById("bg-music").play();
        showBirthdayMessage();
    }, 1000);
}


function showBirthdayMessage() {
    let text = "Happy Birthday Meri Jaan";
    let i = 0;
    let speed = 100;
    let birthdayText = document.getElementById("birthday-text");

    function typeWriter() {
        if (i < text.length) {
            birthdayText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                document.getElementById("next1").style.display = "inline-block";
            }, 4000);
        }
    }
    typeWriter();
    document.getElementById("photo").style.opacity = "1";
}

function showShayari() {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("shayari-section").style.display = "block";

    let text = "Teri Muskurahat Hi Meri Pehchan Hai, \n Tere Bina Jeena Ab Armaan Nahi.";
    let i = 0;
    let speed = 100;
    let shayariText = document.getElementById("shayari-text");

    function typeWriter() {
        if (i < text.length) {
            shayariText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                document.getElementById("next2").style.display = "inline-block";
            }, 2000);
        }
    }
    typeWriter();
}

function showCake() {
    document.getElementById("shayari-section").style.display = "none";
    document.getElementById("cake-section").style.display = "block";
    document.getElementById("light-candle-btn").style.display = "inline-block";
}

function lightCandle() {
    document.getElementById("light-candle-btn").style.display = "none";
    document.getElementById("cut-cake-btn").style.display = "inline-block";
}

function cutCake() {
    document.getElementById("cut-cake-btn").style.display = "none";
    
    let candle = document.getElementById("candle");
    candle.style.opacity = 0;

    let cake = document.getElementById("cake");
    cake.classList.add("cake-cut");

    let bgMusic = document.getElementById("bg-music");
    let hbdMusic = document.getElementById("hbd-music");

    bgMusic.pause();
    hbdMusic.play();

    setTimeout(() => {
        document.getElementById("message-btn").style.display = "inline-block";
    }, 3000);
}

function playMessage() {
    document.getElementById("message-audio").play();
}
