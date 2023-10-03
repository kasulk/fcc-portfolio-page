export function dynamicCopyright() {
  const thisYear = new Date().getFullYear();
  const element = (document.createElement("span").innerHTML =
    "© " + thisYear + " ");

  document.querySelector("#copyright").prepend(element);
}
