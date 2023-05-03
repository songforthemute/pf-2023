(function () {
    console.log("hello world XD");
})();

// loading & scroll lock/unlock
const loadingComponent = document.getElementById("loading");
const $body = document.querySelector("body");
$body.style.overflow = "hidden";

setTimeout(() => {
    loadingComponent.remove();
    $body.style.overflow = "inherit";
}, 3000);

// header titie logo
const $headerTitle = document.querySelector(
    ".header__title"
) as HTMLHeadingElement;

// header button: move scroll to the specific position
const $about = document.getElementById("about");
const $aboutButton = document.getElementById("header__about");
$aboutButton.addEventListener("click", () => {
    console.log($about.offsetTop);
    // console.log($about.scrollHeight);
    onClickAdjustScroll($about.offsetTop - 100);
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
    ".carousel__container--prev"
) as HTMLButtonElement;
const $carouselContainerNext = document.querySelector(
    ".carousel__container--next"
) as HTMLButtonElement;

const carouselImageNodes = document.querySelectorAll(".carousel__item--image");
const carouselContainerNodes = document.querySelectorAll(
    ".carousel__item--container"
);

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
    const prevContainer = carouselContainerNodes[
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
    const nextContainer = carouselContainerNodes[
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
    const prevContainer = carouselContainerNodes[
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
    const nextContainer = carouselContainerNodes[
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
