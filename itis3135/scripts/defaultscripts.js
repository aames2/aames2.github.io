document.addEventListener('DOMContentLoaded', (envent) => {
    displayCurrentDateTime();
})

function displayDateTime() {
    dateTimeElement = document.getElementById('dateTime');
    now = new Date();
    options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    dateTimeElement.innerText = now.toLocaleString('en-US', options);
}
function greet() {
    inputName = document.getElementById('name').value;
    inputMood = document.getElementById('mood').value;
    greetingElement = document.getElementById('greeting');
    greetingElement.innerText = "Welcome, " + inputName + ". You're feeling " + inputMood + " today?";
}
function showPolygon() {
    favNumberElement = document.getElementById('fnumber');
    let number = Math.round(Math.abs(favNumberElement.value));
    let polygon;
    switch (number) {
        case 2: polygon = "Digon"; break;
        case 3: polygon = "Triangle"; break;
        case 4: polygon = "Quadrilateral"; break;
        case 5: polygon = "Pentagon"; break;
        case 6: polygon = "Hexagon"; break;
        case 7: polygon = "Heptagon"; break;
        case 8: polygon = "Octagon"; break;
        case 9: polygon = "Nonagon"; break;
        case 10: polygon = "Decagon"; break;
        default: polygon = "Many sided polygon";
    }
    alert(polygon);
}
function areWeThereYet() {
    alert("No.");
}
function dumbJoke() {
    alert("What kind of sandals do frogs prefer? Open toad.");
}
function cowSound() {
    alert("MOOOOO");
}
function simpleMath() {
    alert("2+2=4");
}