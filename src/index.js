import "./styles.css";
import home from "./modules/home.js"

let content = document.getElementById("content");

home();

function removeContent() {
    while (content.children[0]) {
        content.children[0].remove();
    }
    document.body.style.background = "";
}

removeContent();