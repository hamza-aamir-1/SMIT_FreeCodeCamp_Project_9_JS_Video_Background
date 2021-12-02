// Preloader
window.addEventListener('load', function(){
    document.querySelector('.myPreloader').classList.add('noloader');
}); 

// Play-Pause Button
function pause(){
    const video = document.querySelector('.video-bg');
    const btn = document.querySelector('.play-pause');
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        document.getElementById('play-pause-img').src = 'play.png';
        video.pause();
    }
    else{
        btn.classList.remove('slide');
        document.getElementById('play-pause-img').src = 'pause.png';
        video.play();
    }
}