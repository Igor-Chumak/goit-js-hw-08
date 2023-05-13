// npm install @vimeo/player
import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');
    // const player = new Vimeo.Player(iframe);
    const player = new Player(iframe);
    let currentTime=0;

    player.on('timeupdate', function({seconds}) {
        currentTime = seconds;
        console.log(currentTime);
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });