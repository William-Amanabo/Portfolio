

$(function() {
    // eslint-disable-next-line no-undef
    new WOW().init();
});

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

//**************************DropDown******************************************* */
$(".js-select2").each(function(){
    $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next('.dropDownSelect2')
    });
})
$(".js-select2").each(function(){
    $(this).on('select2:open', function (e){
        $(this).parent().next().addClass('eff-focus-selection');
    });
});
$(".js-select2").each(function(){
    $(this).on('select2:close', function (e){
        $(this).parent().next().removeClass('eff-focus-selection');
    });
});



/**************************Validate********************************************* */


(function ($) {
    "use strict";



  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);