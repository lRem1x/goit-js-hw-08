import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframeRef = document.querySelector("iframe");
iframeRef.style.position = 'absolute';
iframeRef.style.left = '50%';
iframeRef.style.transform = 'translate(-50%)';

const player = new Player(iframeRef);
const CURRENT_TIME = "videoplayer-current-time";

reload ()
player.on('timeupdate', throttle(onPlay, 1000));
// player.setLoop(true);

function onPlay(e) {
    localStorage.setItem(CURRENT_TIME, e.seconds);
}

function reload() {
    const currentTime = localStorage.getItem(CURRENT_TIME);
    if (currentTime) {
        player.setCurrentTime(currentTime);
    };
}
