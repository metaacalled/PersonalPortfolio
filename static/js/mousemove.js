const cursor = document.querySelector(".cursor");
var timeout;
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y - 25 + "px";
    cursor.style.left = x - 25 + "px";
    cursor.style.display = "block";

    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 5000);
});
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});