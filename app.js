// animation timeline
const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)

        }

    }

})

// Barre de progression en haut de la page

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("Barre-progression").style.width = scrolled + "%";
}

// tooltip version bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// bouton qui descend le menu sur telephone
$(document).ready(function(){
    $(".hamburg").on("click", function(){
            $("nav ul").toggleClass("menu");
    });
});

// nav bar invisible en haut de page
$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('scroll');
}
            else{
            $('nav').removeClass('scroll');
            }
})

// bouton pour remonter en haut de la page
const btn = document.querySelector('.btn-arrow');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

// scroll bar personnalisée

const progressBar = document.querySelector('.scrollbar');

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    let progress = (document.documentElement.scrollTop / totalHeight) * 100;
    progressBar.style.height = `${progress}%`;
    progressBar.style.opacity = `${progress}%`;
})

// clique a la barre de progression 

const progressBarClick = document.querySelector('.clickScrollbar');

progressBarClick.addEventListener('click',(e) => {

    let newPageScroll = e.clientY / progressBarClick.offsetHeight * totalHeight;
    window.scrollTo({
        top: newPageScroll,
        behavior: 'smooth',
    })
})

// bouton invisible en haut de page et visible en descendant
$(window).on("scroll", function(){
    if($(window).scrollTop()){
        btn.style.opacity = 1;
}
            else{
            btn.style.opacity = 0;
            }
})