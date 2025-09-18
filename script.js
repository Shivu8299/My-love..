// Get the HTML elements we need to control
const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const albumArt = document.getElementById('album-art');
const playlistElement = document.getElementById('playlist');

// Array of your songs. 
// IMPORTANT: Change the filenames in the 'image' property to match your files!
const songs = [
    {
        name: "Dil Ka Jo Haal Hai",
        path: "https://files.catbox.moe/3h5x9d.mp3",
        image: "song1.jpg" // <-- CHANGE THIS to your image for this song
    },
    {
        name: "Snowman",
        path: "https://files.catbox.moe/3dmtpl.mp3",
        image: "song2.png" // <-- CHANGE THIS to your image for this song
    },
    {
        name: "Ankhon Se Batana",
        path: "https://files.catbox.moe/0irt05.mp3",
        image: "song3.jpg" // <-- CHANGE THIS to your image for this song
    }
];

// This function builds the list of song buttons on the page
function createPlaylist() {
    let playlistHTML = "";
    songs.forEach((song, index) => {
        // Create a list item with a button for each song
        playlistHTML += `<li><button onclick="playSong(${index})">${song.name}</button></li>`;
    });
    playlistElement.innerHTML = playlistHTML;
}

// This function plays a song and updates the picture and title
function playSong(index) {
    const song = songs[index];
    audioPlayer.src = song.path;      // Changes the song in the player
    songTitle.textContent = song.name; // Updates the song title text
    albumArt.src = song.image;         // **This changes the song picture!**
    audioPlayer.play();                // Plays the song
}

// --- This part creates the heart release effect on click ---
document.addEventListener('click', function(e) {
    // Create a new heart element
    let heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.innerHTML = '❤️';

    // Position the heart where the user clicked
    // The (-12px) helps center the emoji on the cursor
    heart.style.left = (e.clientX - 12) + 'px';
    heart.style.top = (e.clientY - 12) + 'px';

    // Add the heart to the page
    document.body.appendChild(heart);

    // Remove the heart after 1 second so the page doesn't get cluttered
    setTimeout(() => {
        heart.remove();
    }, 1000);
});


// Call this function once to build the playlist when the page loads
createPlaylist();

