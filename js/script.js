//Footer Song Functionality

//Song List
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

//Fetch random song from list
function getRandomSong(songs) {
    return songs[Math.floor(Math.random() * songs.length)];
}

var randomSong = getRandomSong(songs);

//Projects Github Fetching
function getRepoDetails(callback) {
    // Set fetch settings
    const options = {
        method: "GET",
        headers: {
            "User-Agent": "TristanDuncombe",
        },
    };

    // Seek response from API
    fetch("https://api.github.com/users/tristanduncombe/repos", options)
        .then((response) => response.json())
        .then((data) => {
            const repoDetails = data
                .filter((repo) => !repo.fork) // Exclude forked repos
                .map(function (repo) {
                    let description = repo.description || ""; // Set description to an empty string if it's null

                    //Ensure that less than 160 characters are present to preserve height.
                    if (description.length > 160) {
                        description = truncateString(description, 160);
                    }

                    return {
                        name: repo.name,
                        description: description, // Use the possibly truncated description
                        url: repo.html_url,
                    };
                });
            let html = "";
            //Now that data has been collected, construct card with data
            repoDetails.forEach((repo) => {
                html += `<div class="column">
            <div class="card" onclick="location.href='${repo.url}'">
                <div class="container">
                    <h4><b>${repo.name}</b></h4>
                        <p>${repo.description}</p>
                    </div>
                </div>
            </div>`;
            });
            //Send the response
            callback(html);
        })
        //If error occured, console log it
        .catch((error) => console.log("Error: " + error));
}

// If String is longer than a set amount of characters, reduce length and append an elipses.
function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    } else {
        return str;
    }
}

window.getRepoDetails = getRepoDetails;
