document.getElementById("startButton").addEventListener("click", function() {
    this.disabled = true;
    playRandomAudio();
});

function playRandomAudio() {
    // Define the paths to your audio files for each option
    const audioFiles = {
        1: "Head.mp3",
        2: "Sholder.mp3",
        3: "knee.mp3",
        4: "toe.mp3",
        5: "Bottle.mp3"
    };

    // Generate a random option
    const choice = Math.floor(Math.random() * 5) + 1;
    console.log("Selected option:", choice);

    // Play the audio for the selected option
    const audio = new Audio(audioFiles[choice]);
    audio.onended = function() {
        // After the audio finishes playing, check if option 5 was selected
        if (choice !== 5) {
            // If not, play the next random audio
            playRandomAudio();
        } else {
            // If option 5 was selected, re-enable the button
            document.getElementById("startButton").disabled = false;
        }
    };
    audio.play();
}
