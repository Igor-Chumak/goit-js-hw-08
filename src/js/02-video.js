// npm install @vimeo/player
// npm i -g npm
// npm i --save lodash.throttle
import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
// import lodashThrottle from 'lodash.throttle';
var throttle = require('lodash.throttle');
// var lodashThrottle = require('lodash.throttle');

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    // const player = new Vimeo.Player(iframe);
    let currentTime=localStorage.getItem("videoplayer-current-time");
        console.log('Считано время: ', currentTime);

    // player.on('timeupdate', _.throttle(function() {}, 0));
    player.on('timeupdate',  _.throttle(timeupdate, 0));

    function timeupdate(e) {
        console.log(e);
    }

    // player.on('timeupdate', _.throttle(function({seconds}) {
    //     currentTime = seconds;
    //     localStorage.setItem("videoplayer-current-time", currentTime);
    //     console.log('currentTime: ', currentTime);
    // }, 1000));

    player.setCurrentTime(currentTime).then(function(seconds) {
        console.log('Play will start from seconds: ', seconds);
            });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });