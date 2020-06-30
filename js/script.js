


$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 1000,
      animateOut: "slideOutDown",
      animateIn: "slideInDown",
    });
  });

  function initMap(){
    var location = { lat : 25.920074 ,lng : 80.809998};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom:4,
      center:location
    });

  }

  window.onscroll = function() {myFunction();
  };

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
