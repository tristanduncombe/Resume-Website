const https = require("https");

const token = "dfe4cff6ffaa42b78fe5279bf7d9d622";
const options = {
  hostname: "api.spotify.com",
  path: "/v1/me/player/currently-playing",
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const req = https.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    const response = JSON.parse(data);

    console.log(response);
    if (response.item) {
      const trackName = response.item.name;
      const artistName = response.item.artists[0].name;
      console.log(`Currently playing: ${trackName} by ${artistName}`);
    } else {
      console.log("No track currently playing");
    }
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
