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

const carouselList = document.querySelector(
    ".carousel__list"
) as HTMLUListElement;
const carouselItems = document.querySelectorAll(".carousel__item");
const prevButton = document.querySelector(
    ".carousel__control--prev"
) as HTMLButtonElement;
const nextButton = document.querySelector(
    ".carousel__control--next"
) as HTMLButtonElement;

let carouselIndex = 0;
let timerId: number;

carouselItems.forEach((carouselItem: HTMLLIElement) => {
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

    carouselItem.addEventListener("drag", function (e: DragEvent) {
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

        const { clientX, offsetX } = e;

        if (clientX == 0) return;

        if (offsetX > 0) {
            onClickNextCarousel();
        } else if (offsetX < 0) {
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
    const prevItem = carouselItems[carouselIndex] as HTMLLIElement;

    if (++carouselIndex >= carouselItems.length) {
        carouselIndex = 0;
    }

    const nextItem = carouselItems[carouselIndex] as HTMLLIElement;

    // appear next carousel
    nextItem.classList.add("carousel__item--active");
    // disappear prev carousel
    prevItem.classList.remove("carousel__item--active");
}

function onClickPrevCarousel() {
    const prevItem = carouselItems[carouselIndex] as HTMLLIElement;

    if (--carouselIndex <= 0) {
        carouselIndex = carouselItems.length - 1;
    }

    const nextItem = carouselItems[carouselIndex] as HTMLLIElement;

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
