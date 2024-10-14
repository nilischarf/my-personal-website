const h2 = document.createElement("h2");
//h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
document.body.addEventListener("click", function() {
    let image = document.createElement("img");
    image.src = "https://savageventures.b-cdn.net/wp-content/uploads/2023/06/locals-guide-to-new-jersey1.jpg";
    image.id="njImage";
    document.body.appendChild(image);
    image.style.display = "block";
})
