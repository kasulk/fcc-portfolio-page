// const url = "https://api.chucknorris.io/jokes/random";
const url = "https://api.chucknorris.io/jokes/random?category=";
let category = getNextRandomCategory();

const quoteElement = document.querySelector("#quote q");
let savedScrollPosition = 0;

setInterval(fetchAndRender, 1000 * 10);
// setInterval(fetchAndRender, 1000 * 4);

function fetchAndRender() {
  quoteElement.classList.add("fade");

  // give the fade a second (and a half) to do its magic
  setTimeout(() => {
    savedScrollPosition = window.scrollY;

    fetch(url + category)
      .then((response) => response.json())
      .then((data) => {
        quoteElement.innerHTML = fixFetchedData(data);
        // go back to previously saved scroll position
        window.scrollTo(0, savedScrollPosition);
        quoteElement.classList.remove("fade");
        category = getNextRandomCategory();
        // console.log("next category:", category);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, 1500);
}

function fixFetchedData(data) {
  //   data.value = "test";

  const lastChar = data.value[data.value.length - 1];
  // remove ',' from ending
  if (/,/.test(lastChar)) data.value = data.value.slice(0, -1);
  // add a dot to the end if its missing
  if (/[^.!?;]/.test(lastChar)) data.value = data.value + ".";

  // make sure the first letter of the quote is always upper case
  data.value = data.value[0].toUpperCase() + data.value.substring(1);

  // replace double quotes with single quotes
  data.value = data.value.replace(/"/g, "'");

  //   console.log("data processed:", data);
  return data.value;
}

function getNextRandomCategory() {
  const categories = [
    "animal",
    "career",
    "celebrity",
    "dev",
    //   "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    // "political",
    // "religion",
    "science",
    "sport",
    "travel",
  ];

  const randomIndex = Math.floor(Math.random() * categories.length);

  return categories[randomIndex];
}

// const demoResponse = {
//   categories: [],
//   created_at: "2020-01-05 13:42:24.142371",
//   icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//   id: "Wv3UecrjSliPlLacFER2MA",
//   updated_at: "2020-01-05 13:42:24.142371",
//   url: "https://api.chucknorris.io/jokes/Wv3UecrjSliPlLacFER2MA",
//   value:
//     "Chuck Norris can climb Mount Everest with his eyes closed and his arms tied behind his back. He does that every morning to worm-up.",
// };
