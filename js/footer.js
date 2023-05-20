var songs = [
  {
    name: "Everyone's A Guru Now",
    link: "https://open.spotify.com/track/1S6VlDQoVgjfSeTsNfRvSd?si=64c03e917b7e4863",
  },
  {
    name: "action --> reaction",
    link: "https://open.spotify.com/track/3zEXS2CmWYXHBMz8exI4ia?si=1fa160c85c5242b4",
  },
  {
    name: "For Elise",
    link: "https://open.spotify.com/track/6i40XRqEwHAnSxwZWasMRp?si=2b9c93e291ee4b2f",
  },
  {
    name: "Cold Cold Man",
    link: "https://open.spotify.com/track/7AN4zvlHUTqpl25bqOhFcG?si=3db4cd811e8a4cbb",
  },
];

function getRandomSong(songs) {
  return songs[Math.floor(Math.random() * songs.length)];
}

var randomSong = getRandomSong(songs);
