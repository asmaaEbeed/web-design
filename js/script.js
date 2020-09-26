/*global $, jQuery, alert*/
$(function () {
    
    "use strict";
    
    $(".list-item-sub1").hover(function () {
    
        $(".sub-menu1").toggle();
    
    });
    
});
/*$(function() {  
    $("body").niceScroll();
});*/
$(window).on('load', function () {
    

    "use strict";
    $(".loading-overlay .sk-circle").fadeOut(1500, function () {
                        //to return body scroll
        $("body").css("overflow", "visible");
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();

        });
    });

});
        
  
//loading screen

