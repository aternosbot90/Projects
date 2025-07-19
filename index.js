function changeVideo() {
    const video = document.querySelector('.bg-video');
    const source = document.getElementById('videoSource');

    // Change to a different video file
    source.src = 'video2.mp4';
    video.load(); // Reload the video with new source
    video.play(); // Play the new video
  }
  