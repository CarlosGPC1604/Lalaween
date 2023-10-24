document.addEventListener("DOMContentLoaded", function () {
    function loadImagesInModal(modalId) {
        var modalImages = document.querySelectorAll('#' + modalId + ' img[data-src]');
        modalImages.forEach(function (img) {
            var dataSrc = img.getAttribute("data-src");
            img.setAttribute("src", dataSrc);
            img.removeAttribute("data-src");
        });
    }

    document.querySelector('[data-bs-target="#exampleModal1"]').addEventListener("click", function () {
        loadImagesInModal("exampleModal1");
    });

    document.querySelector('[data-bs-target="#exampleModal2"]').addEventListener("click", function () {
        loadImagesInModal("exampleModal2");
    });

    document.querySelector('[data-bs-target="#exampleModal3"]').addEventListener("click", function () {
        loadImagesInModal("exampleModal3");
    });
});