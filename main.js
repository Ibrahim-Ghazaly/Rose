//Select element function

function show(){

document.body.classList.toggle("open")

}

function hide(){

    document.body.classList.toggle("open")
    
    }



//chnge header background color onscroll

var myheader=document.querySelector('header');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    myheader.classList.add("active")
  } else {
   
    myheader.classList.remove("active")
  }
}










// make animation on scrool
window.sr=ScrollReveal();


sr.reveal(".animate-left",{
   
    origin:"left",
    duration:1000,
    distance:'25rem',
    delay:300

})

sr.reveal(".animate-right",{
   
    origin:"right",
    duration:1000,
    distance:'25rem',
    delay:600

})

sr.reveal(".animate-top",{
   
    origin:"top",
    duration:1000,
    distance:'25rem',
    delay:300

})

sr.reveal(".animate-bottom",{
   
    origin:"bottom",
    duration:1000,
    distance:'25rem',
    delay:300

})


