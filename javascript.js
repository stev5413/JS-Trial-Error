//This function does not put a new into the DOM but into memory

const p = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');


//console.dir(p);

//03-24-25
document.body.append(p);
p.textContent = "Hey, I'm red";


document.body.append(h3);
h3.textContent = "I'm a blue h3";
h3.style.color = "blue";

document.body.append(div);
div.style.cssText = "border: black; background: pink;";

const h1 = document.createElement('h1');
div.appendChild(h1);
h1.textContent = "I'm in a div";

const p2 = document.createElement('p');
div.appendChild(p2);
p2.textContent = "ME TOO!";


//03-25-25
const container = document.querySelector("#container");

const content = createElement("div");
content.classList.add("content");

content.textContent = "This is the glorious text-content!";

container.appendChild(content);


