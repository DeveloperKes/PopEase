import { Pop } from "../dist/index.js";
function main() {
    const button = document.querySelector('button.button');
    if (button) {
        button.addEventListener('click', Pop.ready());
    }
}

main();