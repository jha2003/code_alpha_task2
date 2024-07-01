// Music player object
const musicPlayer = {
    playlist: [],
    currentSong: 0,
    audioPlayer: document.getElementById('audio-player'),
    playBtn: document.getElementById('play-btn'),
    pauseBtn: document.getElementById('pause-btn'),
    skipBtn: document.getElementById('skip-btn'),
    volumeControl: document.getElementById('volume-control'),
    songTitle: document.getElementById('song-title'),
    songArtist: document.getElementById('song-artist'),
    playlistList: document.getElementById('playlist-list'),
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),

    // Initialize music player
    init: function() {
        this.loadPlaylist();
        this.playBtn.addEventListener('click', this.playSong);
        this.pauseBtn.addEventListener('click', this.pauseSong);
        this.skipBtn.addEventListener('click', this.skipSong);
        this.volumeControl.addEventListener('input', this.updateVolume);
        this.searchBtn.addEventListener('click', this.searchSongs);
    }
    }

    // Load playlist from JSON file or API