; (function() {
    $( window ).on('hashchange', function( e ) {
        var id = window.location.hash;

        if(id == null || id == "") {
            return false;
        }

        var to = $("[data-page='" + id +"']").offset().top - 55;

        $('html, body').stop().animate({
            scrollTop: to
        }, 1000);

        return false;
    });

    $(window).trigger("hashchange");
}());