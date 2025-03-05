function startApp() {
    document.getElementById('tapScreen').style.display = 'none';
    document.getElementById('start').style.display = 'block';
    document.getElementById('bgMusic').play();
}

function showContent() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

function showMessage() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('messageSection').style.display = 'block';
}

function playMessage() {
    document.getElementById('bgMusic').pause();
    document.getElementById('msgAudio').play();
}
