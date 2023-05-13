// npm install @vimeo/player
import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    // const player = new Vimeo.Player(iframe);
    let currentTime=localStorage.getItem("videoplayer-current-time");
        console.log('Считано время: ', currentTime);

    player.on('timeupdate', function({seconds}) {
        currentTime = seconds;
        localStorage.setItem("videoplayer-current-time", currentTime);
        console.log('currentTime: ', currentTime);
    });

    player.setCurrentTime(currentTime).then(function(seconds) {
        console.log('Play will start from seconds: ', seconds);
            });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });