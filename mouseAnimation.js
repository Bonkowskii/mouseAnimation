const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", e => {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach((circle, index) => {
        const lastX = circle.x;
        const lastY = circle.y;

        circle.x += (x - circle.x) * 0.3;
        circle.y += (y - circle.y) * 0.3;

        circle.style.left = circle.x - 12 + "px";
        circle.style.top = circle.y - 12 + "px";


        const scale = (circles.length - index) / circles.length;
        circle.style.transform = `scale(${scale})`;

        x = lastX;
        y = lastY;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();
