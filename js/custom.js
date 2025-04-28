/* Mobile Menu Script Start */
$(document)
.off("click", ".trigger__menunav--act")
.on("click", ".trigger__menunav--act", function (e) {
  
  e.stopPropagation();
  $("body").toggleClass("mbl__hiden");
  $(".mobile__menu").toggleClass("active");
});
  $(document).click(function (e) {
    if (!$(e.target).is(".trigger__menunav--act, .menu, .menu * ")) {
      if ($(".menu").is(":visible")) {
        $(".mobile__menu").removeClass("active");
        $("body").removeClass("mbl__hiden");
      }
    }
  });


$('#owl-banner').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:true,
    loop:false,
})

$('#owl-newproduct').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },

        680:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('#owl-mostWanted').owlCarousel({
    loop:true,
    margin:20,
    center:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },

        680:{
            items:3
        },
        1000:{
            items:4
        }
    }
})