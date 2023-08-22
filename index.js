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
const quoteElement = document.querySelector("#quote q");
let savedScrollPosition = 0;

function fetchAndRender() {
  savedScrollPosition = window.scrollY;

  quoteElement.classList.add("fade");

  // give the fade a second (and a half) to do its magic
  setTimeout(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        quoteElement.innerHTML = `${
          //   processFetchedData(data)
          data.value[0].toUpperCase() + data.value.substring(1)
        }`;
        // go back to previously saved scroll position
        window.scrollTo(0, savedScrollPosition);
        quoteElement.classList.remove("fade");
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, 1500);
}

function processFetchedData(data) {
  data.value[0].toUpperCase() + data.value.substring(1);
}

setInterval(fetchAndRender, 1000 * 10);
