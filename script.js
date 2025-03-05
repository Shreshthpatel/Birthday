function startBirthday() {
    document.querySelector(".start-screen").classList.add("hidden");
    let bg = document.querySelector(".birthday-container");
    bg.classList.remove("hidden");
    
    // Change background after tapping
    setTimeout(() => {
        document.body.style.background = "url('birthday.png') center/cover no-repeat";
        bg.classList.add("show-photo"); // Make photo fade in
        document.querySelector(".next-button").classList.remove("hidden");
    }, 2000);
}

function showShayari() {
    document.querySelector(".birthday-container").classList.add("hidden");
    document.querySelector(".shayari-section").classList.remove("hidden");
    setTimeout(() => {
        document.querySelector(".shayari-section .next-button").classList.remove("hidden");
    }, 4000);
}

function showCake() {
    document.querySelector(".shayari-section").classList.add("hidden");
    document.querySelector(".cake-section").classList.remove("hidden");
}

function lightCandle() {
    document.querySelector(".flame").classList.remove("hidden");
    document.querySelector(".light-candle").classList.add("hidden");
    document.querySelector(".cut-cake").classList.remove("hidden");
}

function cutCake() {
    alert("Cake is being cut! 🎂🎉");
}
