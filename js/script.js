function playVideo(img) {
    const container = img.parentElement;
    const video = container.querySelector("video");
   const images= container.querySelectorAll('img');

  
    images.forEach(image => {
       image.style.display='none'; 
    });
    video.style.display = "block";

    video.play();


    video.onended = () => {
      video.style.display = "none";
     images.forEach(image => {
       image.style.display='block'; 
    });
      video.classList.remove("not-focused");
    };

   video.addEventListener('mouseenter', () => {
  video.classList.remove('not-focused');
});

video.addEventListener('mouseleave', () => {
  video.classList.add('not-focused');

  });

}

const videosSection= document.querySelector('#vedios');
    

videosSection.addEventListener('click', (e) => {
 
  if (e.target.tagName.toLowerCase() === 'img') {
    const clickedVideo = e.target.closest('.vedios-sec').querySelector('video');

    const allVideos = videosSection.querySelectorAll('video');

   
    allVideos.forEach(video => {
      if (video !== clickedVideo) {
        video.pause();

      }
    });

   
    clickedVideo.play();
  }
});

