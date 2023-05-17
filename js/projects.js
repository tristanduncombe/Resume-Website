function getRepoDetails(callback) {
  const options = {
    method: "GET",
    headers: {
      "User-Agent": "TristanDuncombe",
    },
  };

  fetch("https://api.github.com/users/tristanduncombe/repos", options)
    .then((response) => response.json())
    .then((data) => {
      const repoDetails = data.map(function (repo) {
        let description = repo.description;
        if (description.length > 160) {
          description = truncateString(description, 160);
        }
        return {
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
        };
      });
      let html = "";
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
      callback(html);
    })
    .catch((error) => console.log("Error: " + error));
}

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str;
  }
}

window.getRepoDetails = getRepoDetails;
