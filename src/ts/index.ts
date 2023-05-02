(function () {
    console.log("hello world XD");
})();

// header titie logo
const headerTitle = document.querySelector(
    ".header__title"
) as HTMLHeadingElement;

// scrolling go top
function onClickToTop() {
    // Issue: Modern Chromium browsers don't support smooth
    requestAnimationFrame(() => {
        window?.scrollTo({ top: 0, behavior: "smooth" });
    });
}

headerTitle?.addEventListener("click", onClickToTop);

const carouselImageControllers = document.querySelector(
    ".carousel__control--image"
).childNodes;
const carouselContainerControllers = document.querySelector(
    ".carousel__control--container"
).childNodes;

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
    end: 0,
};

function onClickNextImage() {
    const prevImage = carouselImageNodes[carouselImage.index] as HTMLLIElement;

    if (++carouselImage.index >= carouselImage.end) {
        carouselImage.index = carouselImage.start;
    }

    const nextImage = carouselImageNodes[carouselImage.index] as HTMLLIElement;

    // appear/disappear image
    nextImage.classList.add("carousel__item--active");
    prevImage.classList.remove("carousel__item--active");
}

function onClickPrevImage() {
    const prevImage = carouselImageNodes[carouselImage.index] as HTMLLIElement;

    if (--carouselImage.index < carouselImage.start) {
        carouselImage.index = carouselImage.end - 1;
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
(carouselImageControllers[1] as HTMLLIElement).addEventListener(
    "click",
    onClickPrevImage
);
// next slide button in a image carousel in project
(carouselImageControllers[3] as HTMLLIElement).addEventListener(
    "click",
    onClickNextImage
);

// perv project button in a project carousel
(carouselContainerControllers[1] as HTMLLIElement).addEventListener(
    "click",
    onClickPrevContainer
);
// next project button in a project carousel
(carouselContainerControllers[3] as HTMLLIElement).addEventListener(
    "click",
    onClickNextContainer
);
