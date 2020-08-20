//connect api key to fileconst url = "http://api.football-data.org/v2/matches";
fetch(url, {
    method: "GET",
    withCredentials: true,
    headers: {
      "X-Auth-Token": "AIzaSyCcWtZcaD3QQn5c461Za05p5HMfgmu0l2o",
      "Content-Type": "application/json"
    }
  })
    .then(resp => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });