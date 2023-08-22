export function fixFetchedData(data) {
  // data.value = "test'";

  const lastChar = data.value[data.value.length - 1];
  // remove ',' from ending
  if (/,/.test(lastChar)) data.value = data.value.slice(0, -1);
  // add a dot to the end if its missing
  if (/[^.!?;']/.test(lastChar)) data.value = data.value + ".";

  // make sure the first letter of the quote is always upper case
  data.value = data.value[0].toUpperCase() + data.value.substring(1);

  // replace double quotes with single quotes
  data.value = data.value.replace(/"/g, "'");

  //   console.log("data processed:", data);
  return data.value;
}

export function getNextRandomCategory() {
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
