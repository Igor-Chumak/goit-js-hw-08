// npm install @vimeo/player
// npm i --save lodash.throttle
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    let currentTime=localStorage.getItem("videoplayer-current-time");
        // console.log('Считано время: ', currentTime);

    player.on('timeupdate', throttle(function({seconds}) {
        currentTime = seconds;
        localStorage.setItem("videoplayer-current-time", currentTime);
        // console.log('currentTime: ', currentTime);
    }, 1000));

    player.setCurrentTime(currentTime).then(function(seconds) {
        // console.log('Play will start from seconds: ', seconds);
            });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });