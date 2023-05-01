(function () {
    console.log("hello world XD");
})();
// header titie logo
var headerTitle = document.querySelector(".header__title");
// scrolling go top
function onClickToTop() {
    // Issue: Modern Chromium browsers don't support smooth
    requestAnimationFrame(function () {
        window === null || window === void 0 ? void 0 : window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
headerTitle === null || headerTitle === void 0 ? void 0 : headerTitle.addEventListener("click", onClickToTop);
var carouselList = document.querySelector(".carousel__list");
var carouselItems = document.querySelectorAll(".carousel__item");
var prevButton = document.querySelector(".carousel__control--prev");
var nextButton = document.querySelector(".carousel__control--next");
var carouselIndex = 0;
var timerId;
carouselItems.forEach(function (carouselItem) {
    // carouselItem.addEventListener("dragstart", function (e: DragEvent) {
    //     console.log(e.clientX, e.clientY);
    //     console.log(e.dataTransfer);
    //     // store the current position of the cursor
    //     e.dataTransfer.setData("cursorX", String(e.clientX));
    //     e.dataTransfer.setData("cursorY", String(e.clientY));
    //     console.log(e.dataTransfer);
    // });
    // carouselItem.addEventListener("dragover", function (e: DragEvent) {
    //     e.preventDefault();
    // });
    carouselItem.addEventListener("drag", function (e) {
        // const cursorX = +e.dataTransfer.getData("cursorX");
        // const cursorY = +e.dataTransfer.getData("cursorY");
        // const diffX = e.clientX - cursorX;
        // const diffY = e.clientX - cursorY;
        // carouselItem.style.left = `${carouselItem.offsetLeft + diffX}px`;
        // carouselItem.style.top = `${carouselItem.offsetTop + diffY}px`;
        // // update the cursor position
        // e.dataTransfer.setData("cursorX", `${e.clientX}`);
        // e.dataTransfer.setData("cursorY", `${e.clientY}`);
        console.log(e);
        var clientX = e.clientX, offsetX = e.offsetX;
        if (clientX == 0)
            return;
        if (offsetX > 0) {
            onClickNextCarousel();
        }
        else if (offsetX < 0) {
            onClickPrevCarousel();
        }
    });
    // carouselItem.addEventListener("dragend", function (e: DragEvent) {
    //     console.log(e.dataTransfer.getData("cursorX"));
    //     console.log(e.dataTransfer.getData("cursorY"));
    //     e.dataTransfer.clearData();
    // });
});
function onClickNextCarousel() {
    var prevItem = carouselItems[carouselIndex];
    if (++carouselIndex >= carouselItems.length) {
        carouselIndex = 0;
    }
    var nextItem = carouselItems[carouselIndex];
    // appear next carousel
    nextItem.classList.add("carousel__item--active");
    // disappear prev carousel
    prevItem.classList.remove("carousel__item--active");
}
function onClickPrevCarousel() {
    var prevItem = carouselItems[carouselIndex];
    if (--carouselIndex <= 0) {
        carouselIndex = carouselItems.length - 1;
    }
    var nextItem = carouselItems[carouselIndex];
    // appear prev carousel
    nextItem.classList.add("carousel__item--active");
    // disappear current carousel
    prevItem.classList.remove("carousel__item--active");
}
prevButton.addEventListener("click", onClickPrevCarousel);
nextButton.addEventListener("click", onClickNextCarousel);
// // Function to start the automatic carousel timer
// function startTimer() {
//     timerId = setInterval(() => {
//         nextCarousel();
//     }, 5000);
// }
// // Start the automatic timer
// startTimer();
