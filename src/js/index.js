(function () {
    console.log("\n🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦\n🟦 I'm hireable now! 🟦\n🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦\n ");
})();
// querySelector Function
var $ = function (tag) {
    return document.querySelector(tag);
};
// Config Initial State
var $body = $("body");
// When initializing, Scroll lock
$body.style.overflow = "hidden";
// Check the state of Background image loading
var bgImage = new Image(0, 0); // <T>: HTMLImageElement
bgImage.src = "imgs/background.webp"; // set image's dir
bgImage.onload = function () {
    // Remove Loader & Resolve scroll Lock
    if (bgImage.complete) {
        setTimeout(function () {
            $("#loading").remove();
            $body.style.overflow = "inherit";
        }, 1500);
    }
};
// header titie logo
var $headerTitle = $(".header__title");
// header buttons: move scroll to the specific position
var $headerAboutButton = $("#header__about");
var $headerProjectButton = $("#header__project");
var $headerArticleButton = $("#header__article");
var $headerSkillButton = $("#header__skill");
var $headerOthersButton = $("#header__others");
var $aboutSection = $("#about");
var $projectSection = $("#project");
var $articleSection = $("#article");
var $skillSection = $("#skill");
var $othersSection = $("#others");
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
    onClickAdjustScroll($aboutSection.offsetTop - 300);
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
$headerOthersButton === null || $headerOthersButton === void 0 ? void 0 : $headerOthersButton.addEventListener("click", function () {
    onClickAdjustScroll($othersSection.offsetTop - 100);
});
// When scrolled down, adjust animation & hide them
var $introAnimation = $("#intro__animation");
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
var $carouselImagePrev = $(".carousel__image--prev");
var $carouselImageNext = $(".carousel__image--next");
var $carouselContainerPrev = $(".carousel__project--prev");
var $carouselContainerNext = $(".carousel__project--next");
var carouselImageNodes = document.querySelectorAll(".carousel__item--image");
var carouselBoxNodes = document.querySelectorAll(".carousel__item--box");
var carouselContainer = {
    index: 0,
    imageCount: [4, 7, 5, 5, 4, 4],
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
