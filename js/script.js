$(function(){
        var count=$("#header_slide li").length;
        var current=1;
        var next=2;
        var interval=3000;
        var duration=500;
        var timer;

        $("#header_slide li:not(:last-child)").hide();
        timer=setInterval(slideTimer,interval);
        function slideTimer(){
            $("#header_slide li:nth-child("+ current +")").fadeOut(duration);
            $("#header_slide li:nth-child("+ next +")").fadeIn(duration);
            current=next;
            next=++next;
            if(next>count){
                next=1;
            }
        }
});
    
$(function(){
    var h = 0;
    $(".trainer_main .tab div").each(function(){
        if($(this).height() > h){
        h = $(this).height();
        }
    });
    $(".trainer_main .tab div").css("height", h + "px");


  $('.trainer_main .tab[id != "tab1"]').hide();
  $(".trainer_main a").click(function(){
    $(".trainer_main .tab").hide();
    $($(this).attr("href")).show();
    $(".current").removeClass("current");
    $(this).addClass("current");
    
    return false;
  });
});

$(function(){
    $(".studio_slide ul").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: true,
        speed: 500,
        fade: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
});

$(function(){
    $(".faq dt").click(function () {
        $(".faq_title").not(this).removeClass("open");
        $(".faq_title").not(this).next().slideUp(300);
        $(this).toggleClass("open");
        $(this).next().slideToggle(300);
      });
});

$(function(){
    $("a[href^=#]:not([href=#])").click(function(){
        var target=$($(this).attr("href")).offset().top;
        $("html,body").animate({scrollTop:target},500);

        return false;
    });
});

$(function(){
    $(window).scroll(function (){
        $('.fade-in').each(function(){
          var pos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > pos - windowHeight + 100){
            $(this).addClass('scroll');
          }
        });
    });
});

$(function(){
    if ($(window).width() < 520) {
        var dir = -1;
        var interval = 3000;
        var duration = 700;
        var timer;

        $("#price ul").prepend($("#price li:last-child"));
        $("#price ul").css("left", "-77.3vw");

        timer = setInterval(slideTimer, interval);

        function slideTimer(){
            if(dir == -1){
            $("#price ul").animate({"left" : "-=77.3vw"}, duration, function(){
                $(this).append($("#price li:first-child"));
                $(this).css("left", "-77.3vw");
            });
            }else{
            $("#price ul").animate({"left" : "+=77.3vw"}, duration, function(){
                $(this).prepend($("#price li:last-child"));
                $(this).css("left", "77.3vw");

                dir = -1;
            });
            }
        }
    }else{
    }
});
$(function(){
    if ($(window).width() < 520) {
        $(".header_top button").click(function(){
            $(".header_menu ul").slideToggle(200);
            $('.header_menu').toggleClass('menu--isOpen');
        });
    }
});
$(function(){
    if ($(window).width() < 520) {
        $(window).scroll(function (){
            $('.fade-in').each(function(){
              var pos = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > pos - windowHeight + 100){
                $(this).addClass('scroll');
              }
            });
        });
    }
});
$(function(){
    if($(window).width() < 1024){
        $(window).scroll(function (){
            $('.fade-in').each(function(){
              var pos = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > pos - windowHeight + 100){
                $(this).addClass('scroll');
              }
            });
        });
    }
});