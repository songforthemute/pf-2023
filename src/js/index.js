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
// header buttons: move scroll to the specific position
var $aboutSection = document.getElementById("about");
var $projectSection = document.getElementById("project");
var $articleSection = document.getElementById("article");
var $skillSection = document.getElementById("skill");
var $headerAboutButton = document.getElementById("header__about");
var $headerProjectButton = document.getElementById("header__project");
var $headerArticleButton = document.getElementById("header__article");
var $headerSkillButton = document.getElementById("header__skill");
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
$headerAboutButton === null || $headerAboutButton === void 0 ? void 0 : $headerAboutButton.addEventListener("click", function () {
    onClickAdjustScroll($aboutSection.offsetTop - 100);
});
$headerProjectButton === null || $headerProjectButton === void 0 ? void 0 : $headerProjectButton.addEventListener("click", function () {
    onClickAdjustScroll($projectSection.offsetTop + 25);
});
$headerArticleButton === null || $headerArticleButton === void 0 ? void 0 : $headerArticleButton.addEventListener("click", function () {
    onClickAdjustScroll($articleSection.offsetTop - 100);
});
$headerSkillButton === null || $headerSkillButton === void 0 ? void 0 : $headerSkillButton.addEventListener("click", function () {
    onClickAdjustScroll($skillSection.offsetTop - 100);
});
// When scrolled down, adjust animation & hide them
var $introAnimation = document.getElementById("intro__animation");
document.addEventListener("scroll", function introAnimation() {
    if (scrollY <= 500) {
        $introAnimation.style.opacity = String(1 - (0.01 * scrollY) / 5);
    }
    else {
        $introAnimation.style.opacity = "0";
        $introAnimation.style.animation = "";
        this.removeEventListener("scroll", introAnimation);
    }
});
// CAROUSEL PART
var $carouselImagePrev = document.querySelector(".carousel__image--prev");
var $carouselImageNext = document.querySelector(".carousel__image--next");
var $carouselContainerPrev = document.querySelector(".carousel__project--prev");
var $carouselContainerNext = document.querySelector(".carousel__project--next");
var carouselImageNodes = document.querySelectorAll(".carousel__item--image");
var carouselBoxNodes = document.querySelectorAll(".carousel__item--box");
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
    var prevContainer = carouselBoxNodes[carouselContainer.index];
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
    var nextContainer = carouselBoxNodes[carouselContainer.index];
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
    var prevContainer = carouselBoxNodes[carouselContainer.index];
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
    var nextContainer = carouselBoxNodes[carouselContainer.index];
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
