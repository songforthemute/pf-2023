console.log("hello world XD");var headerTitle=document.querySelector(".header__title");function onClickToTop(){requestAnimationFrame(function(){null!==window&&void 0!==window&&window.scrollTo({top:0,behavior:"smooth"})})}null!=headerTitle&&headerTitle.addEventListener("click",onClickToTop);var timerId,carouselList=document.querySelector(".carousel__list"),carouselItems=document.querySelectorAll(".carousel__item"),prevButton=document.querySelector(".carousel__control--prev"),nextButton=document.querySelector(".carousel__control--next"),carouselIndex=0;function onClickNextCarousel(){var e=carouselItems[carouselIndex];++carouselIndex>=carouselItems.length&&(carouselIndex=0),carouselItems[carouselIndex].classList.add("carousel__item--active"),e.classList.remove("carousel__item--active")}function onClickPrevCarousel(){var e=carouselItems[carouselIndex];--carouselIndex<=0&&(carouselIndex=carouselItems.length-1),carouselItems[carouselIndex].classList.add("carousel__item--active"),e.classList.remove("carousel__item--active")}carouselItems.forEach(function(e){e.addEventListener("drag",function(e){console.log(e);var o=e.clientX,e=e.offsetX;0!=o&&(0<e?onClickNextCarousel():e<0&&onClickPrevCarousel())})}),prevButton.addEventListener("click",onClickPrevCarousel),nextButton.addEventListener("click",onClickNextCarousel);