$(document).ready(function() {
    $(window).on("load", function() {
        $('.grid').masonry({
            // options
            itemSelector: '.grid-item',
            columnWidth: 100
        });
    });

    $(".arrow-down").click(function() {
        $('html,body').animate({
            scrollTop: $("#detail-screen").offset().top
        }, 'slow');
    });
});