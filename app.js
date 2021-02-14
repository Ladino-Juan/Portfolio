document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', myFunctionForSticky);
    var navbar = document.getElementById("myHeader");
    var sticky = navbar.offsetTop;
  
    function myFunctionForSticky() {
      if (window.pageYOffset >= sticky) {
        console.log("window.pageYOffset >= sticky");
      } else {
        console.log("Not window.pageYOffset >= sticky");
      }
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
})

window.addEventListener('scroll', function(){
  let animation = document.getElementById('animated');
  let positionObj1 = animation.getBoundingClientRect().top;
  console.log(positionObj1);
  let sizeOfScreen = window.innerHeight/1.1;

  if(positionObj1 < sizeOfScreen){
    animation.style.animation = "text 15s ease 0s"
  }
})