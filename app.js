(function($){
  'use strict';
    $(window).on('load', function () {
        if ($("#preloader").length > 0)
        {
            $("#preloader").fadeOut("slow");
        }
    });
})(jQuery)



window.addEventListener('scroll', function(){
  let animation = document.getElementById('animated');
  let positionObj1 = animation.getBoundingClientRect().top;
  let sizeOfScreen = window.innerHeight/1.1;

  if(positionObj1 < sizeOfScreen){
    animation.style.animation = "text 15s ease 0s"
  }
})

window.addEventListener('scroll', function(){
  let myLogo = document.getElementById('logo');
  let hideLogo = document.getElementById('welcome-title');
  let positionLogo = hideLogo.getBoundingClientRect().top;
  let screenSize = window.innerHeight/7;

  if(positionLogo < screenSize){
    myLogo.style.visibility = "hidden";
  } else{
    myLogo.style.visibility = "visible";
  }
})










