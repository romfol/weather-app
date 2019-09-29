console.log("JS loaded");

fetch("http://localhost:3000/weather?address=amsterdam").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      return console.log(data.error);
    }
    console.log(data);
  })
})