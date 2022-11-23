const progress = document.getElementById('progress')
const previus = document.getElementById('previus')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    updateProgress()
});

previus.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    updateProgress()
});

function updateProgress() {
    progress.style.width = `${(100 / 4) * (currentActive - 1)}%`
   
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    if (currentActive === 1) {
        previus.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        previus.disabled = false;
        next.disabled = false
    }
}