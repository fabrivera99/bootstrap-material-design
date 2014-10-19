$(document).ready(function () {
    $(".scroller").tap(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('scrollto')).offset().top - 100
        }, 900);
    });
});