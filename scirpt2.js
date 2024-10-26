$(function(){
          let currentIndex = 0;
          
          $(".imageWrap").append($(".image").first().clone(true));

          setInterval(function(){
                    currentIndex++;

                    $(".imageWrap").animate({marginLeft: -750 * currentIndex + "px"}, 600);

                    if(currentIndex == 11){
                              setTimeout(function(){
                                        $(".imageWrap").animate({marginLeft: 0}, 0);

                                        currentIndex = 0;
                              }, 600);
                    }
          }, 3000);
})