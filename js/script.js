const rubberBuiscuitFullSong = new Audio("/music/rubber-biscuit.mp3");
const first = new Audio("/music/first.wav");
const second = new Audio("/music/second.wav");
const sounds = [first, second];

let counter = 0;

const onBiscuitClick = () => {
  sounds[counter].play();
  if (counter === sounds.length - 1) {
    counter = 0;
  } else {
    counter += 1;
  }
};
