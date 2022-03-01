//Glitches: 
//      - Swiper Double Scrolls through some slides... Why?
//      - White Background (looks like from vid 3) flickers into the lower pages... why?
//      - Sometimes the videos don't play again after going back into viewBox 
//      - Possibly because of incorrect Swiper Size
//      - Video doesn't resize smoothly. Possibly because of wrong comparison

var mfp_container;



document.addEventListener('click', function() {
    mfp_container = document.querySelector(".pop-vid"); 
    mfp_all = document.querySelectorAll(".pop-vid");
  document.addEventListener('click', function(event) {
    var isClickInsideElement = mfp_container.contains(event.target);
    if (!isClickInsideElement) {
      for(i = 0; i < mfp_all.length; i++) {
        mfp_all[i].load();
      }
      mfp_container.pause();
      console.log("Outside");
    } else {
      console.log("inside");
    }
  });

});

var hidden = document.getElementById("promo-video");
var el;

  /*IF play-button is pressed, load video*/


  var bg = document.getElementById("bgvideo");
  var bg2 = document.getElementById("bgvideo2");
  var bg3 = document.getElementById("bgvideo3");
  /*IF mfp-close is pressed, pause video*/
  function pauseVid() {
     bg.pause();
  }
  function playVid() {
      bg.currentTime= 0;
      bg.play();
  }
  
  function pauseVid2() {
    bg2.pause();
 }
 function playVid2() {
     bg2.currentTime= 0;
     bg2.play();
 }

 function pauseVid3() {
  bg3.pause();
}
function playVid3() {
   bg3.currentTime= 0;
   bg3.play();
}
  function loadVid() {
    document.querySelectorAll(".pop-vid").load();
}

window.addEventListener("load", function(){
  bg.play();
  document.querySelector(".swiper-main").style.cursor = "default";
  document.querySelector("nav").style.pointerEvents = "auto";
});



/*!
* Determine if an element is in the viewport
* (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
* @param  {Node}    elem The element
* @return {Boolean}      Returns true if element is in the viewport
*/

var isInViewport = function (elem) {
var distance = elem.getBoundingClientRect();

return (
  distance.top >= 0 &&
  distance.left >= 0 &&
  distance.bottom <= (window.innerHeight + 830 || document.documentElement.clientHeight + 830) 
  //distance.right <= (window.innerWidth || document.documentElement.clientWidth)
);
};

var mute_button = document.querySelector("#mute");
var unmute_button = document.querySelector("#unmute");

mute_button.addEventListener('click', function() {
    if(bg3.muted) {  
      bg3.muted = false;
      mute_button.style.display = "none";
      unmute_button.style.display = "block";
    }
});
unmute_button.addEventListener('click', function() {
      bg3.muted = true;
      mute_button.style.display = "block";
      unmute_button.style.display = "none";
});

var page_1 = document.querySelector('#page1');
var page_2 = document.querySelector('#page2');
var page_3 = document.querySelector('#page3');
var page_4 = document.querySelector('#page4');
var page_5 = document.querySelector('#page5');
var page_6 = document.querySelector('#page6');
var page_7 = document.querySelector('#page7');
var page_8 = document.querySelector('#page8');
var page_9 = document.querySelector('#page9');

window.addEventListener('load', function () {
document.addEventListener('click', function() {
  if(isInViewport(page_3)) {
    playVid3();
  } else {
    pauseVid3();
  }
}, false);

swiper.on('resize', function() {
    if (swiper.height > bg.style.height) {
        bg.style.height = swiper.height;
        bg.style.width = "auto";
    } else {
        bg.style.width = "100%";
        bg.style.height = "auto";  
    }
});


swiper.on('transitionEnd', function() {
            if(isInViewport(page_1)) {
              playVid();
            } else {
              pauseVid();
            }
}, false); 

swiper.on('transitionEnd', function() {
  if(isInViewport(page_2)) {
    playVid2();
  } else {
    pauseVid2();
  }
}, false); 

swiper.on('transitionEnd', function() {
  if(isInViewport(page_3)) {
    playVid3();
  } else {
    pauseVid3();
  }
}, false); 

swiper.on('transitionEnd', function() {
  if(isInViewport(page_4)) {
    var q = document.querySelector(".quote-text");
    $(q).fadeIn();
    /* document.querySelector(".quote").style.width = "100%";
    document.querySelector(".quote-text").fadeIn(); */
  } 
}, false);

});


const swiper = new Swiper('.swiper-main', {
    // Optional parameters
    //cssMode: true,
    slidesPerView: 1,
    direction: 'vertical',
    loop: false,
    noSwiping: false,
    speed: 1000,
    shortSwipes: true,

    forceToAxis: true,
    preventClicks: true,
    preventClicksPropagation: true,
    preventInteractionOnTransition: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
      clickable: 'true',
    },
    
    //Keyboard Control
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
      
    //Mousewheel
    mousewheel: {
        sensitivity: 0.01,
    },
    
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      snapOnRelease: true
    },
    
    breakpoints: {

      992: {
        noSwiping: true,
      },
  
      1024: {
        noSwiping: true
      },
      1920 : {
        noSwiping: true
      }
    }

  });

const carousel = new Swiper('.s-carousel', {
  slidesPerView: 5,
  slidesPerGroup: 5,
  disabledOnInteraction: false,
  pauseOnMouseEnter: true,

  loop: true,
  spaceBetween: 20,
  direction: 'horizontal',
  maxBackfaceHiddenSlides: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000,
  },

});


$('#nav-logo').click(swiper,function(){
    swiper.slideTo(0);
})


/* 
function keepCentered() {
  var w = document.querySelector("#bgvideo2").clientWidth;
  var windowWidth = window.innerWidth;
    if (w > windowWidth) {
      obj.style.transform = "translate(calc((100vw - 100%)/2), calc((100vh - 100%)/2))";
    } else {
      obj.style.transform = "";
    }
}
window.addEventListener('resize', keepCentered); */

/* 
function fontScale() {
  var obj = document.querySelector(".page3");
  var height = obj.clientHeight;
  obj.style.fontSize = height;
}

window.addEventListener('resize', fontScale()); */

/* swiper.on('slideChangeTransitionEnd', function () {
        var acs = document.querySelectorAll('.swiper-slide-active')[0];
        var hasVerticalScrollbar = acs.scrollHeight > window.innerHeight;
        console.log (acs.scrollHeight + " is greater than " + window.innerHeight + "?");
        console.log(hasVerticalScrollbar);
				
        if (hasVerticalScrollbar) {
            var scrollHeight = acs.scrollHeight;
            var slideSize = window.innerHeight;
            var scrollDifferenceTop = scrollHeight - slideSize;

            acs.addEventListener('wheel', findScrollDirectionOtherBrowsers);

            function findScrollDirectionOtherBrowsers(event) {
                var scrollDifference = scrollHeight - slideSize - acs.scrollTop;

								// Scroll wheel browser compatibility
								var delta = event.wheelDelta || -1 * event.deltaY;
                
                // Enable scrolling if at edges
                var spos = delta < 0 ? 0 : scrollDifferenceTop;
               
                if (!(scrollDifference == spos)) {
                  console.log("DISABLING FULL SCROLL");
                  console.log(scrollDifference + " and " + spos);
                	swiper.mousewheel.disable();
                }
                else {
                  console.log("ENABLING FULL SCROLL");
                	swiper.mousewheel.enable();
                }
            }
        }
    });
 */

    //What I need for this to work:
    //  Reference that viewbox is smaller than slide
    //  Let viewbox move down until the edge, then redo scroll
    //  
