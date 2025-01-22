import FlowerMan from "../image.jpeg";
import { aboutContent } from "./about";
import { menuContent } from "./menu";

function updateContent() {
    document.getElementById('content').innerHTML = `
        <h1>Cory's Restaurant</h1>
        <img src="${FlowerMan}" alt="man with flowers" />
        <p>We serve all sorts of food, but mostly flowers!</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent();

    document.getElementById('home-btn').addEventListener('click', updateContent);
    document.getElementById('menu-btn').addEventListener('click', menuContent);
    document.getElementById('about-btn').addEventListener('click', aboutContent);
});
