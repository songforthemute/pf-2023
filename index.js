console.log("hello world XD");var $body_1,loadingComponent=document.getElementById("loading"),$headerTitle=(null!==window&&void 0!==window&&window.sessionStorage.getItem("isVisited")?loadingComponent.remove():(null!==window&&void 0!==window&&window.sessionStorage.setItem("isVisited","true"),($body_1=document.querySelector("body")).style.overflow="hidden",setTimeout(function(){loadingComponent.remove(),$body_1.style.overflow="inherit"},3e3)),document.querySelector(".header__title")),$headerAboutButton=document.getElementById("header__about"),$headerProjectButton=document.getElementById("header__project"),$headerArticleButton=document.getElementById("header__article"),$headerSkillButton=document.getElementById("header__skill"),$headerOthersButton=document.getElementById("header__others"),$aboutSection=document.getElementById("about"),$projectSection=document.getElementById("project"),$articleSection=document.getElementById("article"),$skillSection=document.getElementById("skill"),$othersSection=document.getElementById("others");function onClickAdjustScroll(e){void 0===e&&(e=0),requestAnimationFrame(function(){null!==window&&void 0!==window&&window.scrollTo({top:e,behavior:"smooth"})})}null!=$headerTitle&&$headerTitle.addEventListener("click",function(){onClickAdjustScroll()}),null!=$headerAboutButton&&$headerAboutButton.addEventListener("click",function(){onClickAdjustScroll($aboutSection.offsetTop-300)}),null!=$headerProjectButton&&$headerProjectButton.addEventListener("click",function(){onClickAdjustScroll($projectSection.offsetTop+25)}),null!=$headerArticleButton&&$headerArticleButton.addEventListener("click",function(){onClickAdjustScroll($articleSection.offsetTop-100)}),null!=$headerSkillButton&&$headerSkillButton.addEventListener("click",function(){onClickAdjustScroll($skillSection.offsetTop-100)}),null!=$headerOthersButton&&$headerOthersButton.addEventListener("click",function(){onClickAdjustScroll($othersSection.offsetTop-100)});var $introAnimation=document.getElementById("intro__animation"),$carouselImagePrev=(document.addEventListener("scroll",function e(){scrollY<=500?$introAnimation.style.opacity=String(1-.01*scrollY/5):($introAnimation.style.opacity="0",$introAnimation.style.animation="",this.removeEventListener("scroll",e))}),document.querySelector(".carousel__image--prev")),$carouselImageNext=document.querySelector(".carousel__image--next"),$carouselContainerPrev=document.querySelector(".carousel__project--prev"),$carouselContainerNext=document.querySelector(".carousel__project--next"),carouselImageNodes=document.querySelectorAll(".carousel__item--image"),carouselBoxNodes=document.querySelectorAll(".carousel__item--box"),carouselContainer={index:0,imageCount:[3,6,5,4,4,4],getCurrentImageCount:function(){return carouselContainer.imageCount[carouselContainer.index]},getLength:function(){return carouselContainer.imageCount.length},reduceCounts:function(e){return carouselContainer.imageCount.slice(0,null!=e?e:carouselContainer.imageCount.length).reduce(function(e,o){return e+o},0)}},carouselImage={index:0,start:0,end:carouselContainer.imageCount[0]};function onClickNextImage(){var e=carouselImageNodes[carouselImage.index];carouselImage.index===carouselImage.end-1?carouselImage.index=carouselImage.start:carouselImage.index++,carouselImageNodes[carouselImage.index].classList.add("carousel__item--active"),e.classList.remove("carousel__item--active")}function onClickPrevImage(){var e=carouselImageNodes[carouselImage.index];carouselImage.index===carouselImage.start?carouselImage.index=carouselImage.end-1:carouselImage.index--,carouselImageNodes[carouselImage.index].classList.add("carousel__item--active"),e.classList.remove("carousel__item--active")}function onClickNextContainer(){carouselImageNodes[carouselImage.index].classList.remove("carousel__item--active"),carouselBoxNodes[carouselContainer.index].classList.remove("carousel__item--active"),carouselContainer.index===carouselContainer.getLength()-1?(carouselContainer.index=0,carouselImage.start=0,carouselImage.end=carouselContainer.getCurrentImageCount()):(carouselImage.start+=carouselContainer.getCurrentImageCount(),carouselContainer.index++,carouselImage.end+=carouselContainer.getCurrentImageCount()),carouselImage.index=carouselImage.start,carouselBoxNodes[carouselContainer.index].classList.add("carousel__item--active"),carouselImageNodes[carouselImage.index].classList.add("carousel__item--active")}function onClickPrevContainer(){carouselImageNodes[carouselImage.index].classList.remove("carousel__item--active"),carouselBoxNodes[carouselContainer.index].classList.remove("carousel__item--active"),0===carouselContainer.index?(carouselContainer.index=carouselContainer.getLength()-1,carouselImage.start=carouselContainer.reduceCounts(carouselContainer.index),carouselImage.end=carouselContainer.reduceCounts(carouselContainer.getLength())):(carouselImage.end-=carouselContainer.getCurrentImageCount(),carouselContainer.index--,carouselImage.start-=carouselContainer.getCurrentImageCount()),carouselImage.index=carouselImage.start,carouselBoxNodes[carouselContainer.index].classList.add("carousel__item--active"),carouselImageNodes[carouselImage.index].classList.add("carousel__item--active")}$carouselImagePrev.addEventListener("click",onClickPrevImage),$carouselImageNext.addEventListener("click",onClickNextImage),$carouselContainerPrev.addEventListener("click",onClickPrevContainer),$carouselContainerNext.addEventListener("click",onClickNextContainer);var $contact=document.getElementById("contact");