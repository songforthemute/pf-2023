(() => {
    console.log(
        "\n🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦\n🟦 I'm hireable now! 🟦\n🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦\n "
    );
})();

// querySelector Function
const $ = (tag: string) =>
    document.querySelector(tag) as HTMLElement | Element | any;

// Config Initial State
const $body = $("body");
// When initializing, Scroll lock
$body.style.overflow = "hidden";

// Check the state of Background image loading
const bgImage = new Image(0, 0); // <T>: HTMLImageElement
bgImage.src = "imgs/background.jpeg"; // set image's dir
bgImage.onload = () => {
    // Remove Loader & Resolve scroll Lock
    if (bgImage.complete) {
        setTimeout(() => {
            $("#loading").remove();
            $body.style.overflow = "inherit";
        }, 1500);
    }
};

// header titie logo
const $headerTitle = $(".header__title");
// header buttons: move scroll to the specific position
const $headerAboutButton = $("#header__about");
const $headerProjectButton = $("#header__project");
const $headerArticleButton = $("#header__article");
const $headerSkillButton = $("#header__skill");
const $headerOthersButton = $("#header__others");
const $aboutSection = $("#about");
const $projectSection = $("#project");
const $articleSection = $("#article");
const $skillSection = $("#skill");
const $othersSection = $("#others");

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
$headerAboutButton?.addEventListener("click", () => {
    onClickAdjustScroll($aboutSection.offsetTop - 300);
});
$headerProjectButton?.addEventListener("click", () => {
    onClickAdjustScroll($projectSection.offsetTop + 25);
});
$headerArticleButton?.addEventListener("click", () => {
    onClickAdjustScroll($articleSection.offsetTop - 100);
});
$headerSkillButton?.addEventListener("click", () => {
    onClickAdjustScroll($skillSection.offsetTop - 100);
});
$headerOthersButton?.addEventListener("click", () => {
    onClickAdjustScroll($othersSection.offsetTop - 100);
});

// When scrolled down, adjust animation & hide them
const $introAnimation = $("#intro__animation");

document.addEventListener("scroll", function introAnimation() {
    if (scrollY <= 500) {
        $introAnimation.style.opacity = String(1 - (0.01 * scrollY) / 5);
    } else {
        $introAnimation.style.opacity = "0";
        $introAnimation.style.animation = "";
        this.removeEventListener("scroll", introAnimation);
    }
});

// CAROUSEL PART
const $carouselImagePrev = $(".carousel__image--prev") as HTMLButtonElement;
const $carouselImageNext = $(".carousel__image--next") as HTMLButtonElement;
const $carouselContainerPrev = $(
    ".carousel__project--prev"
) as HTMLButtonElement;
const $carouselContainerNext = $(
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
