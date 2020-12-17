const drums = {
soundsArr: [document.getElementById("clap"), document.getElementById("hihat"), document.getElementById("kick"), document.getElementById("openhat"), document.getElementById("boom"), document.getElementById("ride"), document.getElementById("snare"), document.getElementById("tom"), document.getElementById("tink")],
keyArr: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
sounds: function(letter) {
    let x = this.keyArr.indexOf(letter);
    this.soundsArr[x].play();
}
};

document.addEventListener("keydown", (x) => {
    drums.sounds(x.key);
})