const container = document.querySelector(".container");

function draw() {
    const e = document.createElement("div");
    e.classList.add("star");
    container.appendChild(e);
    e.style.left = `${Math.random() * innerWidth}px`;

    e.style.fontSize = `${Math.random() * 24}px`;
    e.style.animationDuration = `${2 + Math.random() * 3}s`;

    setTimeout (
        () => container.removeChild(e), 5000,
    );
}

setInterval(
    () => draw(),
    50,
);