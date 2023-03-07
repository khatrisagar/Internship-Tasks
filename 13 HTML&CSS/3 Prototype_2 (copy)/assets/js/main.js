let moveLeftArrow = document.getElementById('moveLeftArrow')
let moveRightArrow = document.getElementById('moveRightArrow')


moveLeftArrow.addEventListener('click', clickMe)

function clickMe(){
    console.log("Clicked")
}
let i = 1;
setInterval(changeSlide,3000 ,i++)


let slideIndex = 3;
showSlides(slideIndex);

function changeSlide(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    let slideCards = document.getElementsByClassName('project-card');
    if(n>slideCards.length){
        slideIndex = 3
    }

    if(n<3){
        slideIndex = slideCards.length
    }

    for (i = 0; i < slideCards.length; i++) {
        slideCards[i].style.display = "none";  
    }
        slideCards[slideIndex-1].style.display = "block";
        slideCards[slideIndex-2].style.display = "block";
        slideCards[slideIndex-3].style.display = "block";
}
