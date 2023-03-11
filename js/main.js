$('.bannersec').owlCarousel({ 
  loop:true, 
  margin:0,
  responsiveClass:true,
  autoplay:true,
  dots:false,
  nav:false,
  animateOut: 'fadeOut',
  smartSpeed:1000,
  responsive:{
      0:{
          items:1,
      
      },
      565:{
          items:1,
          
      },
      767:{
          items:1,
          
      },
      1199:{
          items:1,
          
          
      }
  }
});



$('.productssec').owlCarousel({ 
  loop:true, 
  margin:20,
  responsiveClass:true,
  autoplay:true,
  dots:false,
  nav:false,
  smartSpeed:1000,
  responsive:{
      0:{
          items:1,
      
      },
      565:{
          items:1,
          
      },
      767:{
          items:1,
          
      },
      1199:{
          items:1,
          
          
      }
  }
});
  function counter(event) {
    var element   = event.target;         // DOM element, in this example .owl-carousel
     var items     = event.item.count;     // Number of items
     var item      = event.item.index + -1;     // Position of the current item
   
   // it loop is true then reset counter from 1
   if(item > items) {
     item = item - items
   }
   $('#counter').html(""+item+" ___ "+items)
 }

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "100%";
    document.getElementById("main").style.overflow = "hidden";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  };


  $(document).ready(function(){
    $("#close-strip").click(function(){
      $("#tender-strip").css({"margin-top":"-67px", "transition":"0.9s"});
      $("#banner-sec").css({"margin-top":"-50px", "transition":"0.9s"});
      $(".dropdown-menu").css({"top":"78px", "transition":"0.9s"});
     $("#myHeader").addClass("sticky2")
    });
  });



