// function begruesse() {
//   alert("Hallo von meiner externen JavaScript-Datei!");
// }

// const demo = {
//   categories: [],
//   created_at: "2020-01-05 13:42:24.142371",
//   icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//   id: "Wv3UecrjSliPlLacFER2MA",
//   updated_at: "2020-01-05 13:42:24.142371",
//   url: "https://api.chucknorris.io/jokes/Wv3UecrjSliPlLacFER2MA",
//   value:
//     "Chuck Norris can climb Mount Everest with his eyes closed and his arms tied behind his back. He does that every morning to worm-up.",
// };

const url = "https://api.chucknorris.io/jokes/random";
// const quoteElement = document.querySelector("#quotes q");
const quoteElement = document.querySelector("#motto q");

setInterval(() => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.value);
      quoteElement.innerHTML = `${data.value}`;
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen der Daten:", error);
      // quoteElement.innerHTML = "Fehler beim Abrufen der Daten.";
    });

  //   console.log("quoteElement:", quoteElement);
}, 3000);
