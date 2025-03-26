//03-25-25
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//3-26-25
/*
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
*/

const btnTwo = document.querySelector('#btnTwo');
btnTwo.addEventListener("click", () => {
    alert("Hello World back to you");
});

//Using functions and event listener
/*
btn.addEventListener("click", function (e) {
    console.log(e.target);
});
*/


btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");

//call the const, use forEach to iterate through the "button elements"
buttons.forEach((button) => {
    //adds a click listener to each button
    button.addEventListener("click", () => {
        alert(button.id);
    });
});


