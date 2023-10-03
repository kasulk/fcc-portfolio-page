import { dynamicCopyright } from "./utils.js";
import { fetchAndRender } from "./api.js";

dynamicCopyright();

setInterval(fetchAndRender, 1000 * 10);
