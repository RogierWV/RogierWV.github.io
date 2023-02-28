document.addEventListener("keydown", keyHandler);

const kbds = document.querySelectorAll("kbd");
for (const kbd in kbds) {
    kbds[kbd].addEventListener("click", function (event) {
       play(kbds[kbd].innerText);
    });
}

function keyHandler (event) {
    const keys = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];
    if(keys.includes(event.key.toUpperCase())) {
        play(event.key.toUpperCase());
    } else {
        console.warn("Wrong key was pressed: " + event.code);
    }
}

function play(key) {
    // console.log("The '" + key + "' key is pressed.");
    let audio = new Audio("assets/" + key + ".mp3");
    audio.play();
    audio.onended = function () {
        delete audio;
    }
}