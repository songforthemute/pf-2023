console.log("hello world XD");var $body_1,loadingComponent=document.getElementById("loading"),$headerTitle=(null!==window&&void 0!==window&&window.sessionStorage.getItem("isVisited")?loadingComponent.remove():(null!==window&&void 0!==window&&window.sessionStorage.setItem("isVisited","true"),($body_1=document.querySelector("body")).style.overflow="hidden",setTimeout(function(){loadingComponent.remove(),$body_1.style.overflow="inherit"},3e3)),document.querySelector(".header__title")),$aboutSection=document.getElementById("about"),$headerAboutButton=document.getElementById("header__about"),$projectSection=($headerAboutButton.addEventListener("click",function(){onClickAdjustScroll($aboutSection.offsetTop-200)}),document.getElementById("project")),$headerProjectButton=document.getElementById("header__project"),$articleSection=($headerProjectButton.addEventListener("click",function(){onClickAdjustScroll($projectSection.offsetTop-100)}),document.getElementById("article")),$headerArticleButton=document.getElementById("header__article");function onClickAdjustScroll(e){void 0===e&&(e=0),requestAnimationFrame(function(){null!==window&&void 0!==window&&window.scrollTo({top:e,behavior:"smooth"})})}$headerArticleButton.addEventListener("click",function(){onClickAdjustScroll($articleSection.offsetTop-200)}),null!=$headerTitle&&$headerTitle.addEventListener("click",function(){onClickAdjustScroll()});var $carouselImagePrev=document.querySelector(".carousel__image--prev"),$carouselImageNext=document.querySelector(".carousel__image--next"),$carouselContainerPrev=document.querySelector(".carousel__project--prev"),$carouselContainerNext=document.querySelector(".carousel__project--next"),carouselImageNodes=document.querySelectorAll(".carousel__item--image"),carouselBoxNodes=document.querySelectorAll(".carousel__item--box"),carouselContainer={index:0,imageCount:[3,6,5,4,4,4],getCurrentImageCount:function(){return carouselContainer.imageCount[carouselContainer.index]},getLength:function(){return carouselContainer.imageCount.length},reduceCounts:function(e){return carouselContainer.imageCount.slice(0,null!=e?e:carouselContainer.imageCount.length).reduce(function(e,o){return e+o},0)}},carouselImage={index:0,start:0,end:carouselContainer.imageCount[0]};function onClickNextImage(){var e=carouselImageNodes[carouselImage.index];carouselImage.index===carouselImage.end-1?carouselImage.index=carouselImage.start:carouselImage.index++,carouselImageNodes[carouselImage.index].classList.add("carousel__item--active"),e.classList.remove("carousel__item--active")}function onClickPrevImage(){var e=carouselImageNodes[carouselImage.index];carouselImage.index===carouselImage.start?carouselImage.index=carouselImage.end-1:carouselImage.index--,carouselImageNodes[carouselImage.index].classList.add("carousel__item--active"),e.classList.remove("carousel__item--active")}function onClickNextContainer(){carouselImageNodes[carouselImage.index].classList.remove("carousel__item--active"),carouselBoxNodes[carouselContainer.index].classList.remove("carousel__item--active"),carouselContainer.index===carouselContainer.getLength()-1?(carouselContainer.index=0,carouselImage.start=0,carouselImage.end=carouselContainer.getCurrentImageCount()):(carouselImage.start+=carouselContainer.getCurrentImageCount(),carouselContainer.index++,carouselImage.end+=carouselContainer.getCurrentImageCount()),carouselImage.index=carouselImage.start,carouselBoxNodes[carouselContainer.index].classList.add("carousel__item--active"),carouselImageNodes[carouselImage.index].classList.add("carousel__item--active")}function onClickPrevContainer(){carouselImageNodes[carouselImage.index].classList.remove("carousel__item--active"),carouselBoxNodes[carouselContainer.index].classList.remove("carousel__item--active"),0===carouselContainer.index?(carouselContainer.index=carouselContainer.getLength()-1,carouselImage.start=carouselContainer.reduceCounts(carouselContainer.index),carouselImage.end=carouselContainer.reduceCounts(carouselContainer.getLength())):(carouselImage.end-=carouselContainer.getCurrentImageCount(),carouselContainer.index--,carouselImage.start-=carouselContainer.getCurrentImageCount()),carouselImage.index=carouselImage.start,carouselBoxNodes[carouselContainer.index].classList.add("carousel__item--active"),carouselImageNodes[carouselImage.index].classList.add("carousel__item--active")}$carouselImagePrev.addEventListener("click",onClickPrevImage),$carouselImageNext.addEventListener("click",onClickNextImage),$carouselContainerPrev.addEventListener("click",onClickPrevContainer),$carouselContainerNext.addEventListener("click",onClickNextContainer);