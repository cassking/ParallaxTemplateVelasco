$(document).ready(function() {
    // Cache the Window object
    $window = $(window);

    $('section[data-type="background"]').each(function() {
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {

            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!                              
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = ' 50% ' + yPos + 'px';
            // Move the background
            $bgobj.css({
                backgroundPosition: coords
            });

        }); // window scroll Ends

    });

});
$(window).bind('scroll', function(e) {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('#parallax-bg1').css('top', (0 - (scrolled * .25)) + 'px');
    $('#parallax-bg2').css('top', (0 - (scrolled * .50)) + 'px');
    $('#parallax-bg3').css('top', (0 - (scrolled * .75)) + 'px');
}