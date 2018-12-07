$(document).ready(function() {
    // Load lightbox observers
    imgObserver();
    vidObserver();
});

// Display image lightbox
function imgObserver() {
    $(".lightbox-img").click(function() {

        console.log("Image tapped. Source " + $(this).attr("src"));

        $('body').prepend(" \
            <div id='lightbox-display'> \
                <img id='lightbox-content' src='"+ $(this).attr("src") +"'> \
            </div>\
        ");

        $("#lightbox-display").show();
        lightboxObserver();
  });
};

// Video lightbox
function vidObserver() {
    $(".lightbox-vid").click(function() {

        var src = $(this).find("source").attr("src");
        var type = $(this).find("source").attr("type");

        console.log("Clicked video.\nSource: " + src + "\nType: " + type);

        $('body').prepend(" \
            <div id='lightbox-display'> \
                <video id='lightbox-content' autoplay webkit-playsinline loop> \
                    <source src=" + src + " type=" + type + ">  \
                    This browser doesn't support video format \
                </video> \
            </div> \
        ");

        $("#lightbox-display").show();
        lightboxObserver();
    });
};

// Close lightbox when no longer needed
function lightboxObserver() 
{
    $("#lightbox-display").click(function() {
        console.log("Closing lightbox.");
        $("#lightbox-display").remove();
    });
};