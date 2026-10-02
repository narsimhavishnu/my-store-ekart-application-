const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

button.addEventListener("click", () => {

button.innerHTML = "✓ Added";

button.style.background = "green";

setTimeout(() => {
button.innerHTML = "Add to Cart";
button.style.background = "#111";
},2000);

});
