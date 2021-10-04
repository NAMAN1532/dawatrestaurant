window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60)
   {
    document.getElementById("hid1").style.display = "block";
    document.getElementById("hid1").style.position = "fixed";
    document.getElementById("hid1").style.zIndex = "999";
    document.getElementById("hid1").style.width = "100%";
    document.getElementById("hid1").style.top = "0";
    document.getElementById("carouselExampleFade").style.top = "0";

    
  } else {
    document.getElementById("hid1").style.display = "none";
    document.getElementById("carouselExampleFade").style.top = "-110px";
    
  }
  if (document.body.scrollTop >400|| document.documentElement.scrollTop > 400) {
    mybtn12.style.display = "block";
  } else {
    mybtn12.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  }


function show(){
    document.getElementById('menu1').style.display="flex";
    document.getElementById('menu2').style.display="flex";
    document.getElementById('menu3').style.display="flex";
    document.getElementById('menu4').style.display="flex";
   document.getElementById('menu5').style.display="flex";
   document.getElementById('menu6').style.display="flex";
  }
  function breakf(){
    document.getElementById('menu1').style.display="flex";
    document.getElementById('menu2').style.display="none";
    document.getElementById('menu3').style.display="flex";
    document.getElementById('menu4').style.display="flex";
   document.getElementById('menu5').style.display="none";
   document.getElementById('menu6').style.display="none";
  }
  function lunch(){
    document.getElementById('menu1').style.display="none";
    document.getElementById('menu2').style.display="flex";
    document.getElementById('menu3').style.display="none";
    document.getElementById('menu4').style.display="flex";
   document.getElementById('menu5').style.display="none";
   document.getElementById('menu6').style.display="flex";
  }
  function dine(){
    document.getElementById('menu1').style.display="flex";
    document.getElementById('menu2').style.display="flex";
    document.getElementById('menu3').style.display="flex";
    document.getElementById('menu4').style.display="flex";
   document.getElementById('menu5').style.display="none";
   document.getElementById('menu6').style.display="none";
  }
  function coffee(){
    document.getElementById('menu1').style.display="none";
    document.getElementById('menu2').style.display="none";
    document.getElementById('menu3').style.display="flex";
    document.getElementById('menu4').style.display="none";
   document.getElementById('menu5').style.display="flex";
   document.getElementById('menu6').style.display="flex";
  }
  function snack(){
    document.getElementById('menu1').style.display="none";
    document.getElementById('menu2').style.display="none";
    document.getElementById('menu3').style.display="none";
    document.getElementById('menu4').style.display="none";
   document.getElementById('menu5').style.display="flex";
   document.getElementById('menu6').style.display="flex";
  }


  
  
  