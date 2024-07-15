import $ from "jquery";
import "bootstrap";
// import { test } from "./test";
import "slick-carousel";

(function () {
    // let none = document.getElementById("none");
    // let remove = document.getElementById("remove");

    $("#remove").on("click", function () {
        $("#none").slideUp();
    });
    // remove.onclick = function () {
    //     none.style.display = "none";
    // };

    // User click on the search icon
    // the search form will appear
    $(".search-toggler").on("click", function () {
        $(".search-collapse").toggleClass("show");
    });

    $(".landing .main-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        infinite: true,
        prevArrow: $(".landing .prev-arrow"),
        nextArrow: $(".landing .prev-next"),


        responsive: [
            {
              breakpoint: 768,
              settings: {
             
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
               
                slidesToShow: 2
              }
            }
          ]
    });

    $(".slider-compound .main-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        infinite: true,
        prevArrow: $(".slider-compound  .prev-arrow"),
        nextArrow: $(".slider-compound  .prev-next"),


        responsive: [
            {
              breakpoint: 768,
              settings: {
             
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
               
                slidesToShow: 1
              }
            }
          ]
    });


    $(".slider-our-happy .main-slider").slick({
      slidesToShow: 3.75,
      slidesToScroll: 4,
      arrows: true,
      infinite: true,
      prevArrow: $(".slider-our-happy  .prev-arrow"),
      nextArrow: $(".slider-our-happy  .prev-next"),


      responsive: [
          {
            breakpoint: 768,
            settings: {
           
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
             
              slidesToShow: 1
            }
          }
        ]
  });


      $(".slider-qwer-compound .main-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      infinite: true,
      prevArrow: $(".slider-qwer-compound .prev-arrow"),
      nextArrow: $(".slider-qwer-compound  .prev-next"),


      responsive: [
          {
            breakpoint: 768,
            settings: {
           
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
             
              slidesToShow: 1
            }
          }
        ]
  });



  $(".slider-one-compound .main-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 4,
    arrows: true,
    infinite: true,
    prevArrow: $(".slider-one-compound .prev-arrow"),
    nextArrow: $(".slider-one-compound  .prev-next"),


    responsive: [

      
        {
          breakpoint: 768,
          settings: {
         
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
           
            slidesToShow: 1
          }
        }
      ]
});



$(".slider-tow-compound .main-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 4,
  arrows: true,
  infinite: true,
  prevArrow: $(".slider-tow-compound .prev-arrow"),
  nextArrow: $(".slider-tow-compound  .prev-next"),


  responsive: [
      {
        breakpoint: 768,
        settings: {
       
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
         
          slidesToShow: 1
        }
      }
    ]
});

$(".slider-three-compound .main-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 4,
  arrows: true,
  infinite: true,
  prevArrow: $(".slider-three-compound .prev-arrow"),
  nextArrow: $(".slider-three-compound  .prev-next"),


  responsive: [
      {
        breakpoint: 768,
        settings: {
       
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
         
          slidesToShow: 1
        }
      }
    ]
});


$(".t-shirt-compound .main-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  infinite: true,
  prevArrow: $(".landing .prev-arrow"),
  nextArrow: $(".landing .prev-next"),


  responsive: [
      {
        breakpoint: 768,
        settings: {
       
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
         
          slidesToShow: 1
        }
      }
    ]
});



    // document
    //     .getElementById("popover-btn")
    //     .addEventListener("click", function () {
    //         var popover = document.getElementById("popover-content");
    //         popover.classList.toggle("show");
    //     });

    // // Close the popover if user clicks outside of it
    // window.addEventListener("click", function (event) {
    //     var popover = document.getElementById("popover-content");
    //     var popoverBtn = document.getElementById("popover-btn");
    //     if (event.target !== popover && event.target !== popoverBtn) {
    //         popover.classList.remove("show");
    //     }
    // });
})();

// $(document).ready(() => {
//     test();
// });




