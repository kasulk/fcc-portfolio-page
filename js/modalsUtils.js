export async function loadHTMLFile(url, appendTarget) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error while loading the HTML-File");
    }

    const data = await response.text();

    const container = document.createElement("div");
    container.classList.add("modal-content-container");
    container.innerHTML = data;

    appendTarget.appendChild(container);
    //
  } catch (error) {
    console.error(error);
  }
}
