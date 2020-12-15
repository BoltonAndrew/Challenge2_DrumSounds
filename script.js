const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

document.addEventListener("keydown", (x) => {
    if (x.key === "a") {
        clap.play();
    } else if (x.key === "s") {
        hihat.play();
    } else if (x.key === "d") {
        kick.play();
    } else if (x.key === "f") {
        openhat.play();
    } else if (x.key === "g") {
        boom.play();
    } else if (x.key === "h") {
        ride.play();
    } else if (x.key === "j") {
        snare.play();
    } else if (x.key === "k") {
        tom.play();
    } else if (x.key === "l") {
        tink.play();
    }
})