var audioElement = new Audio('https://dl.dropbox.com/s/3l1ccd1dllgggal/Jingle_Bells.mp3');
audioElement.addEventListener('loadeddata', () => {
  let duration = audioElement.duration;
  // The duration variable now holds the duration (in seconds) of the audio clip
})