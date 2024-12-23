const svg = document.querySelector('svg');
const paths = document.querySelectorAll('path');

// Function to start the animation (draw paths)
function startDrawing() {
    paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        // Start the animation by setting strokeDashoffset to 0
        setTimeout(() => {
            path.style.strokeDashoffset = '0';
        }, 0);
    });
}

// Function to reverse the animation (hide paths)
function reverseDrawing() {
    paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        // Reverse the animation by resetting strokeDashoffset to the full length
        setTimeout(() => {
            path.style.strokeDashoffset = length;
        }, 0);
    });
}

// Attach scroll event to the window
let isScrolling = false;
window.addEventListener('wheel', (event) => {
    if (!isScrolling) {
        if (event.deltaY > 0) { // Check if scrolling down
            isScrolling = true;
            startDrawing();
        } else if (event.deltaY < 0) { // Check if scrolling up
            isScrolling = true;
            reverseDrawing();
        }
        setTimeout(() => {
            isScrolling = false; // Allow animation again after it completes
        }, 2000); // Match the animation duration
    }
});

// Attach mousemove event to track rightward motion
let lastMouseMoveTime = 0;
const throttleTime = 100; // Throttle time in milliseconds

window.addEventListener('mousemove', (event) => {
    const now = Date.now();
    if (now - lastMouseMoveTime > throttleTime) {
        if (event.clientX > lastMouseX && !isMouseMovingRight) {
            isMouseMovingRight = true;
            reverseDrawing();
            setTimeout(() => {
                isMouseMovingRight = false;
            }, 2000);
        }
        lastMouseMoveTime = now;
    }
    lastMouseX = event.clientX;
});