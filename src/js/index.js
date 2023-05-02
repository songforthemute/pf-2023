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
var carouselImageControllers = document.querySelector(".carousel__control--image").childNodes;
var carouselContainerControllers = document.querySelector(".carousel__control--container").childNodes;
var carouselImageNodes = document.querySelectorAll(".carousel__item--image");
var carouselContainerNodes = document.querySelectorAll(".carousel__item--container");
var carouselContainer = {
    index: 0,
    imageCount: [3, 6, 5, 4, 4, 4],
    getCurrentImageCount: function () {
        return carouselContainer.imageCount[carouselContainer.index];
    },
    getLength: function () { return carouselContainer.imageCount.length; },
    reduceCounts: function (i) {
        return carouselContainer.imageCount
            .slice(0, i !== null && i !== void 0 ? i : carouselContainer.imageCount.length)
            .reduce(function (pre, cur) { return pre + cur; }, 0);
    },
};
var carouselImage = {
    index: 0,
    start: 0,
    end: 0,
};
function onClickNextImage() {
    var prevImage = carouselImageNodes[carouselImage.index];
    if (++carouselImage.index >= carouselImage.end) {
        carouselImage.index = carouselImage.start;
    }
    var nextImage = carouselImageNodes[carouselImage.index];
    // appear/disappear image
    nextImage.classList.add("carousel__item--active");
    prevImage.classList.remove("carousel__item--active");
}
function onClickPrevImage() {
    var prevImage = carouselImageNodes[carouselImage.index];
    if (--carouselImage.index < carouselImage.start) {
        carouselImage.index = carouselImage.end - 1;
    }
    var nextImage = carouselImageNodes[carouselImage.index];
    // appear/disappear image
    nextImage.classList.add("carousel__item--active");
    prevImage.classList.remove("carousel__item--active");
}
function onClickNextContainer() {
    // disappear prev image first
    var prevImage = carouselImageNodes[carouselImage.index];
    prevImage.classList.remove("carousel__item--active");
    // disappear prev container
    var prevContainer = carouselContainerNodes[carouselContainer.index];
    prevContainer.classList.remove("carousel__item--active");
    // adjust image && container index: re-calculate image index
    if (carouselContainer.index === carouselContainer.getLength() - 1) {
        carouselContainer.index = 0;
        carouselImage.start = 0;
        carouselImage.end = carouselContainer.getCurrentImageCount();
    }
    else {
        carouselImage.start += carouselContainer.getCurrentImageCount();
        carouselContainer.index++;
        carouselImage.end += carouselContainer.getCurrentImageCount();
    }
    carouselImage.index = carouselImage.start;
    // appear next container
    var nextContainer = carouselContainerNodes[carouselContainer.index];
    nextContainer.classList.add("carousel__item--active");
    // appear next image
    var nextImage = carouselImageNodes[carouselImage.index];
    nextImage.classList.add("carousel__item--active");
}
function onClickPrevContainer() {
    // disappear prev image first
    var prevImage = carouselImageNodes[carouselImage.index];
    prevImage.classList.remove("carousel__item--active");
    // disappear prev container
    var prevContainer = carouselContainerNodes[carouselContainer.index];
    prevContainer.classList.remove("carousel__item--active");
    // adjust image index: re-calculate image index
    if (carouselContainer.index === 0) {
        carouselContainer.index = carouselContainer.getLength() - 1;
        carouselImage.start = carouselContainer.reduceCounts(carouselContainer.index);
        carouselImage.end = carouselContainer.reduceCounts(carouselContainer.getLength());
    }
    else {
        carouselImage.end -= carouselContainer.getCurrentImageCount();
        carouselContainer.index--;
        carouselImage.start -= carouselContainer.getCurrentImageCount();
    }
    carouselImage.index = carouselImage.start;
    // appear next container
    var nextContainer = carouselContainerNodes[carouselContainer.index];
    nextContainer.classList.add("carousel__item--active");
    // appear next image
    var nextImage = carouselImageNodes[carouselImage.index];
    nextImage.classList.add("carousel__item--active");
}
// prev slide button in a image carousel in project
carouselImageControllers[1].addEventListener("click", onClickPrevImage);
// next slide button in a image carousel in project
carouselImageControllers[3].addEventListener("click", onClickNextImage);
// perv project button in a project carousel
carouselContainerControllers[1].addEventListener("click", onClickPrevContainer);
// next project button in a project carousel
carouselContainerControllers[3].addEventListener("click", onClickNextContainer);
