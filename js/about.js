//fetch public repositories from Github

var request = require("request");

options = {
  url: "https://api.github.com/users/tristanduncombe/repos",
  headers: {
    "User-Agent": "TristanDuncombe",
  },
};

request.get(options).on("response", function (response) {
  console.log(response.statusCode);
  console.log(JSON.stringify(response));
});
