const fetch = require("./node_modules/node-fetch");

function getData(repo, startDate, endDate) {
  var repoFromServer;
//https://github.com/thatOkeBrett/oop-animals-part1.git

  fetch("https://api.github.com/users/thatOkeBrett/repos")
    .then((response) => response.json())
    .then((data) => {
      var repoFromServer;
      var i = 0;
      for (datas in data) {
        if (data[i].name == repo) {
          repoFromServer = data[i];
          console.log("Pulls URL: " + repoFromServer.pulls_url);
          console.log("Created at: " + repoFromServer.created_at);
          console.log("Updated at: " + repoFromServer.updated_at);
          console.log("Merged URL at: " + repoFromServer.merges_url);
        }
        // console.log(data[i].name);
        i++;
      }
      //  console.log(repoFromServer["id"]); // Prints result from `response.json()` in getRequest
    })

    .catch((error) => console.error(error));
}

getData("katas", "", "");
