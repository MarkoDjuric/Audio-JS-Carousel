
  const audio = document.querySelector("audio");
  audio.volume = 0.8;
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
var displayImage = document.get

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function moveToNextSlide() {
    audio.play();
    if (slidePosition <= totalSlides - 2){
         slides[slidePosition].classList.remove("carousel-item-visible");
         slidePosition += 1
            slides[slidePosition].classList.add("carousel-item-visible");
    }else{
         slides[slidePosition].classList.remove("carousel-item-visible");
         slidePosition = 0
         slides[slidePosition].classList.add("carousel-item-visible");
    }
console.log(slidePosition)
}

function moveToPrevSlide() {
    audio.play();
    if (slidePosition <= totalSlides && slidePosition != 0 ){
          slides[slidePosition].classList.remove("carousel-item-visible");
        slidePosition -= 1
         slides[slidePosition].classList.add("carousel-item-visible");
    }else{
        slides[slidePosition].classList.remove("carousel-item-visible");
        slidePosition = 4
        slides[slidePosition].classList.add("carousel-item-visible");
    }
    console.log(slidePosition)
}
