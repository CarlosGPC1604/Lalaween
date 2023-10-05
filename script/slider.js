document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 100;

    slider.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const diff = touchStartX - touchEndX;

        if (diff > swipeThreshold) {
            showNextSlide();
        } else if (diff < -swipeThreshold) {
            showPreviousSlide();
        }
    }

    function showNextSlide() {
        const currentSlide = document.querySelector("input[name='slider']:checked");
        const nextSlide = currentSlide.nextElementSibling || slider.firstElementChild;
        nextSlide.checked = true;
    }

    function showPreviousSlide() {
        const currentSlide = document.querySelector("input[name='slider']:checked");
        const previousSlide = currentSlide.previousElementSibling || slider.lastElementChild;
        previousSlide.checked = true;
    }
});
