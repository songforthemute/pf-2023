(function () {
    console.log("hello world XD");
})();

// loading & scroll lock/unlock
const loadingComponent = document.getElementById("loading");

if (window?.sessionStorage.getItem("isVisited")) {
    loadingComponent.remove();
} else {
    window?.sessionStorage.setItem("isVisited", "true");
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";

    setTimeout(() => {
        loadingComponent.remove();
        $body.style.overflow = "inherit";
    }, 3000);
}

// header titie logo
const $headerTitle = document.querySelector(
    ".header__title"
) as HTMLHeadingElement;

// header buttons: move scroll to the specific position
const $aboutSection = document.getElementById("about");
const $headerAboutButton = document.getElementById("header__about");
$headerAboutButton.addEventListener("click", () => {
    onClickAdjustScroll($aboutSection.offsetTop - 200);
});
const $projectSection = document.getElementById("project");
const $headerProjectButton = document.getElementById("header__project");
$headerProjectButton.addEventListener("click", () => {
    onClickAdjustScroll($projectSection.offsetTop - 100);
});
const $articleSection = document.getElementById("article");
const $headerArticleButton = document.getElementById("header__article");
$headerArticleButton.addEventListener("click", () => {
    onClickAdjustScroll($articleSection.offsetTop - 200);
});
const $skillSection = document.getElementById("skill");
const $headerSkillButton = document.getElementById("header__skill");
$headerSkillButton.addEventListener("click", () => {
    onClickAdjustScroll($skillSection.offsetTop - 200);
});

// scrolling go top
function onClickAdjustScroll(value: number = 0) {
    // Issue: Modern Chromium browsers don't support smooth
    requestAnimationFrame(() => {
        window?.scrollTo({
            top: value,
            behavior: "smooth",
        });
    });
}

$headerTitle?.addEventListener("click", () => {
    onClickAdjustScroll();
});

const $carouselImagePrev = document.querySelector(
    ".carousel__image--prev"
) as HTMLButtonElement;
const $carouselImageNext = document.querySelector(
    ".carousel__image--next"
) as HTMLButtonElement;
const $carouselContainerPrev = document.querySelector(
    ".carousel__project--prev"
) as HTMLButtonElement;
const $carouselContainerNext = document.querySelector(
    ".carousel__project--next"
) as HTMLButtonElement;

const carouselImageNodes = document.querySelectorAll(".carousel__item--image");
const carouselBoxNodes = document.querySelectorAll(".carousel__item--box");

const carouselContainer = {
    index: 0,
    imageCount: [3, 6, 5, 4, 4, 4],
    getCurrentImageCount: () =>
        carouselContainer.imageCount[carouselContainer.index],
    getLength: () => carouselContainer.imageCount.length,
    reduceCounts: (i?: number) =>
        carouselContainer.imageCount
            .slice(0, i ?? carouselContainer.imageCount.length)
            .reduce((pre, cur) => pre + cur, 0),
};
const carouselImage = {
    index: 0,
    start: 0,
    end: carouselContainer.imageCount[0],
};

function onClickNextImage() {
    const prevImage = carouselImageNodes[carouselImage.index] as HTMLLIElement;

    // check the limit of the current container
    if (carouselImage.index === carouselImage.end - 1) {
        carouselImage.index = carouselImage.start;
    } else {
        carouselImage.index++;
    }

    const nextImage = carouselImageNodes[carouselImage.index] as HTMLLIElement;

    // appear/disappear image
    nextImage.classList.add("carousel__item--active");
    prevImage.classList.remove("carousel__item--active");
}

function onClickPrevImage() {
    const prevImage = carouselImageNodes[carouselImage.index] as HTMLLIElement;

    // check the limit of the current container
    if (carouselImage.index === carouselImage.start) {
        carouselImage.index = carouselImage.end - 1;
    } else {
        carouselImage.index--;
    }

    const nextImage = carouselImageNodes[carouselImage.index] as HTMLLIElement;

    // appear/disappear image
    nextImage.classList.add("carousel__item--active");
    prevImage.classList.remove("carousel__item--active");
}

function onClickNextContainer() {
    // disappear prev image first
    const prevImage = carouselImageNodes[carouselImage.index] as HTMLLIElement;
    prevImage.classList.remove("carousel__item--active");

    // disappear prev container
    const prevContainer = carouselBoxNodes[
        carouselContainer.index
    ] as HTMLLIElement;
    prevContainer.classList.remove("carousel__item--active");

    // adjust image && container index: re-calculate image index
    if (carouselContainer.index === carouselContainer.getLength() - 1) {
        carouselContainer.index = 0;
        carouselImage.start = 0;
        carouselImage.end = carouselContainer.getCurrentImageCount();
    } else {
        carouselImage.start += carouselContainer.getCurrentImageCount();
        carouselContainer.index++;
        carouselImage.end += carouselContainer.getCurrentImageCount();
    }
    carouselImage.index = carouselImage.start;

    // appear next container
    const nextContainer = carouselBoxNodes[
        carouselContainer.index
    ] as HTMLLIElement;
    nextContainer.classList.add("carousel__item--active");

    // appear next image
    const nextImage = carouselImageNodes[carouselImage.index] as HTMLLIElement;
    nextImage.classList.add("carousel__item--active");
}

function onClickPrevContainer() {
    // disappear prev image first
    const prevImage = carouselImageNodes[carouselImage.index] as HTMLLIElement;
    prevImage.classList.remove("carousel__item--active");

    // disappear prev container
    const prevContainer = carouselBoxNodes[
        carouselContainer.index
    ] as HTMLLIElement;
    prevContainer.classList.remove("carousel__item--active");

    // adjust image index: re-calculate image index

    if (carouselContainer.index === 0) {
        carouselContainer.index = carouselContainer.getLength() - 1;
        carouselImage.start = carouselContainer.reduceCounts(
            carouselContainer.index
        );
        carouselImage.end = carouselContainer.reduceCounts(
            carouselContainer.getLength()
        );
    } else {
        carouselImage.end -= carouselContainer.getCurrentImageCount();
        carouselContainer.index--;
        carouselImage.start -= carouselContainer.getCurrentImageCount();
    }

    carouselImage.index = carouselImage.start;

    // appear next container
    const nextContainer = carouselBoxNodes[
        carouselContainer.index
    ] as HTMLLIElement;
    nextContainer.classList.add("carousel__item--active");

    // appear next image
    const nextImage = carouselImageNodes[carouselImage.index] as HTMLLIElement;
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
