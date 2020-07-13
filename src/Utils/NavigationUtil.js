
/*============================= Navigation ===================================== */


//smooth scrolling
$(function() {
    $("a.smooth-scroll").click(function(event) {
        // eslint-disable-next-line no-unused-expressions
        event.preventDefault;

        var section = $(this).attr("href")

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// Show/Hide transparent black navigation
$(function() {

    $(window).scroll(function() {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// Close mobile menu on click
$(function() {

    $(".navbar-collapse ul li a").on("click touch", function() {

        $(".navbar-toggle").click();
    });
});