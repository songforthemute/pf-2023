console.log("\n🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦\n🟦 I'm hireable now! 🟦\n🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦\n ");var $=function(e){return document.querySelector(e)},$body=$("body"),bgImage=($body.style.overflow="hidden",new Image(0,0)),$headerTitle=(bgImage.src="imgs/background.webp",bgImage.onload=function(){bgImage.complete&&setTimeout(function(){$("#loading").remove(),$body.style.overflow="inherit"},1500)},$(".header__title")),$headerAboutButton=$("#header__about"),$headerProjectButton=$("#header__project"),$headerArticleButton=$("#header__article"),$headerSkillButton=$("#header__skill"),$headerOthersButton=$("#header__others"),$aboutSection=$("#about"),$projectSection=$("#project"),$articleSection=$("#article"),$skillSection=$("#skill"),$othersSection=$("#others");function onClickAdjustScroll(e){void 0===e&&(e=0),requestAnimationFrame(function(){null!==window&&void 0!==window&&window.scrollTo({top:e,behavior:"smooth"})})}null!=$headerTitle&&$headerTitle.addEventListener("click",function(){onClickAdjustScroll()}),null!=$headerAboutButton&&$headerAboutButton.addEventListener("click",function(){onClickAdjustScroll($aboutSection.offsetTop-300)}),null!=$headerProjectButton&&$headerProjectButton.addEventListener("click",function(){onClickAdjustScroll($projectSection.offsetTop+25)}),null!=$headerArticleButton&&$headerArticleButton.addEventListener("click",function(){onClickAdjustScroll($articleSection.offsetTop-100)}),null!=$headerSkillButton&&$headerSkillButton.addEventListener("click",function(){onClickAdjustScroll($skillSection.offsetTop-100)}),null!=$headerOthersButton&&$headerOthersButton.addEventListener("click",function(){onClickAdjustScroll($othersSection.offsetTop-100)});var $introAnimation=$("#intro__animation"),$carouselImagePrev=(document.addEventListener("scroll",function e(){scrollY<=500?$introAnimation.style.opacity=String(1-.01*scrollY/5):($introAnimation.style.opacity="0",$introAnimation.style.animation="",this.removeEventListener("scroll",e))}),$(".carousel__image--prev")),$carouselImageNext=$(".carousel__image--next"),$carouselContainerPrev=$(".carousel__project--prev"),$carouselContainerNext=$(".carousel__project--next"),carouselImageNodes=document.querySelectorAll(".carousel__item--image"),carouselBoxNodes=document.querySelectorAll(".carousel__item--box"),carouselContainer={index:0,imageCount:[4,6,5,5,4,4],getCurrentImageCount:function(){return carouselContainer.imageCount[carouselContainer.index]},getLength:function(){return carouselContainer.imageCount.length},reduceCounts:function(e){return carouselContainer.imageCount.slice(0,null!=e?e:carouselContainer.imageCount.length).reduce(function(e,o){return e+o},0)}},carouselImage={index:0,start:0,end:carouselContainer.imageCount[0]};function onClickNextImage(){var e=carouselImageNodes[carouselImage.index];carouselImage.index===carouselImage.end-1?carouselImage.index=carouselImage.start:carouselImage.index++,carouselImageNodes[carouselImage.index].classList.add("carousel__item--active"),e.classList.remove("carousel__item--active")}function onClickPrevImage(){var e=carouselImageNodes[carouselImage.index];carouselImage.index===carouselImage.start?carouselImage.index=carouselImage.end-1:carouselImage.index--,carouselImageNodes[carouselImage.index].classList.add("carousel__item--active"),e.classList.remove("carousel__item--active")}function onClickNextContainer(){carouselImageNodes[carouselImage.index].classList.remove("carousel__item--active"),carouselBoxNodes[carouselContainer.index].classList.remove("carousel__item--active"),carouselContainer.index===carouselContainer.getLength()-1?(carouselContainer.index=0,carouselImage.start=0,carouselImage.end=carouselContainer.getCurrentImageCount()):(carouselImage.start+=carouselContainer.getCurrentImageCount(),carouselContainer.index++,carouselImage.end+=carouselContainer.getCurrentImageCount()),carouselImage.index=carouselImage.start,carouselBoxNodes[carouselContainer.index].classList.add("carousel__item--active"),carouselImageNodes[carouselImage.index].classList.add("carousel__item--active")}function onClickPrevContainer(){carouselImageNodes[carouselImage.index].classList.remove("carousel__item--active"),carouselBoxNodes[carouselContainer.index].classList.remove("carousel__item--active"),0===carouselContainer.index?(carouselContainer.index=carouselContainer.getLength()-1,carouselImage.start=carouselContainer.reduceCounts(carouselContainer.index),carouselImage.end=carouselContainer.reduceCounts(carouselContainer.getLength())):(carouselImage.end-=carouselContainer.getCurrentImageCount(),carouselContainer.index--,carouselImage.start-=carouselContainer.getCurrentImageCount()),carouselImage.index=carouselImage.start,carouselBoxNodes[carouselContainer.index].classList.add("carousel__item--active"),carouselImageNodes[carouselImage.index].classList.add("carousel__item--active")}$carouselImagePrev.addEventListener("click",onClickPrevImage),$carouselImageNext.addEventListener("click",onClickNextImage),$carouselContainerPrev.addEventListener("click",onClickPrevContainer),$carouselContainerNext.addEventListener("click",onClickNextContainer);