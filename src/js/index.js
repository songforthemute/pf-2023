(function () {
    console.log("hello world XD");
})();
// loading & scroll lock/unlock
var loadingComponent = document.getElementById("loading");
if (window === null || window === void 0 ? void 0 : window.sessionStorage.getItem("isVisited")) {
    loadingComponent.remove();
}
else {
    window === null || window === void 0 ? void 0 : window.sessionStorage.setItem("isVisited", "true");
    var $body_1 = document.querySelector("body");
    $body_1.style.overflow = "hidden";
    setTimeout(function () {
        loadingComponent.remove();
        $body_1.style.overflow = "inherit";
    }, 3000);
}
// header titie logo
var $headerTitle = document.querySelector(".header__title");
// header button: move scroll to the specific position
var $about = document.getElementById("about");
var $aboutButton = document.getElementById("header__about");
$aboutButton.addEventListener("click", function () {
    console.log($about.offsetTop);
    // console.log($about.scrollHeight);
    onClickAdjustScroll($about.offsetTop - 100);
});
// scrolling go top
function onClickAdjustScroll(value) {
    if (value === void 0) { value = 0; }
    // Issue: Modern Chromium browsers don't support smooth
    requestAnimationFrame(function () {
        window === null || window === void 0 ? void 0 : window.scrollTo({
            top: value,
            behavior: "smooth",
        });
    });
}
$headerTitle === null || $headerTitle === void 0 ? void 0 : $headerTitle.addEventListener("click", function () {
    onClickAdjustScroll();
});
var $carouselImagePrev = document.querySelector(".carousel__image--prev");
var $carouselImageNext = document.querySelector(".carousel__image--next");
var $carouselContainerPrev = document.querySelector(".carousel__container--prev");
var $carouselContainerNext = document.querySelector(".carousel__container--next");
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
    end: carouselContainer.imageCount[0],
};
function onClickNextImage() {
    var prevImage = carouselImageNodes[carouselImage.index];
    // check the limit of the current container
    if (carouselImage.index === carouselImage.end - 1) {
        carouselImage.index = carouselImage.start;
    }
    else {
        carouselImage.index++;
    }
    var nextImage = carouselImageNodes[carouselImage.index];
    // appear/disappear image
    nextImage.classList.add("carousel__item--active");
    prevImage.classList.remove("carousel__item--active");
}
function onClickPrevImage() {
    var prevImage = carouselImageNodes[carouselImage.index];
    // check the limit of the current container
    if (carouselImage.index === carouselImage.start) {
        carouselImage.index = carouselImage.end - 1;
    }
    else {
        carouselImage.index--;
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
$carouselImagePrev.addEventListener("click", onClickPrevImage);
// next slide button in a image carousel in project
$carouselImageNext.addEventListener("click", onClickNextImage);
// perv project button in a project carousel
$carouselContainerPrev.addEventListener("click", onClickPrevContainer);
// next project button in a project carousel
$carouselContainerNext.addEventListener("click", onClickNextContainer);
