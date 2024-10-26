$(function(){
          $(".nav>ul>li").mouseover(function(){
                    $(".nav>ul>li>ul").stop().fadeIn();
                    $("#aside").addClass("on");
          });
          $(".nav>ul>li").mouseout(function(){
                    $(".nav>ul>li>ul").stop().fadeOut();
                    $("#aside").removeClass("on");
          });

          let currentIndex = 0;

          $(".slider").hide().first().show();

          setInterval(function(){
                    let nextIndex = (currentIndex + 1) % 4;

                    $(".slider").eq(currentIndex).fadeOut(1200);
                    $(".slider").eq(nextIndex).fadeIn(1200);

                    currentIndex = nextIndex;
          }, 3000);

});