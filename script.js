//your JS code here. If required.

let element = document.getElementById("level");

let level = 0;
let current = element;

while (current.parentElement) {
    level++;
    current = current.parentElement;
}

alert(`The level of the element is: ${level}`);
